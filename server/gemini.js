const { GoogleGenerativeAI } = require("@google/generative-ai");
const tools = require("./tools");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
  tools: [
    {
      functionDeclarations: [
        {
          name: "list_guide_files",
          description:
            "List all available guide files (chapters) in the documentation.",
        },
        {
          name: "read_guide_file",
          description: "Read the content of a specific guide file.",
          parameters: {
            type: "OBJECT",
            properties: {
              filename: {
                type: "STRING",
                description:
                  "The name of the file to read (e.g., 'C1_WITHHOLDING_PROCESS_INGINTRODUCTION.md')",
              },
            },
            required: ["filename"],
          },
        },
        {
          name: "create_calendar_event",
          description: "Create a Google Calendar event link with support for one-time and recurring events.",
          parameters: {
            type: "OBJECT",
            properties: {
              title: {
                type: "STRING",
                description: "Title of the event",
              },
              description: {
                type: "STRING",
                description: "Description of the event",
              },
              date: {
                type: "STRING",
                description:
                  "Date of the event in YYYYMMDD format (e.g. 20250131) or YYYYMMDDTHHMMSSZ for specific time (e.g. 20250131T100000Z)",
              },
              recurrence: {
                type: "STRING",
                description:
                  "Optional recurrence rule for repeating events. Can be a JSON string representing an object with properties: frequency (DAILY/WEEKLY/MONTHLY/YEARLY), interval (number), count (number of occurrences), until (end date YYYYMMDD), byDay (array like ['MO','WE','FR']), byMonthDay (day number), byMonth (month number). Example: '{\"frequency\":\"WEEKLY\",\"byDay\":[\"MO\",\"WE\"],\"count\":12}' for every Monday and Wednesday, 12 times. Or a direct RRULE string like 'FREQ=WEEKLY;INTERVAL=1;COUNT=10;BYDAY=MO,WE,FR'",
              },
            },
            required: ["title", "date"],
          },
        },
      ],
    },
  ],
});

const chatSession = model.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: "System Prompt: You are a helpful 1099 Processing Assistant. You have access to a detailed user guide via tools. Always check the guide files to answer user questions accurately. If a user asks about a specific topic, find the relevant file and read it. If the user wants to schedule a task, use the calendar tool. The guide images are hosted on Cloudinary, and the links are embedded in the markdown files. When you read a file, you will see the image links. Display them to the user if relevant.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Understood. I am ready to help with 1099 processing using the available guide and tools.",
        },
      ],
    },
  ],
});

async function handleChat(userMessage, history = []) {
  console.log("[GEMINI] Starting chat session...");
  console.log("[GEMINI] History items:", history.length);

  // Note: In a real app, we would manage history per user session more robustly.
  // For this demo, we'll just append the new message to the persistent session or a new one.
  // Since we want to keep it simple, let's just use a single session for the demo or re-create it with history.

  // Re-creating chat with history for stateless API feel (simplified)
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "System Prompt: You are a helpful 1099 Processing Assistant. You have access to a detailed user guide via tools. Always check the guide files to answer user questions accurately. If a user asks about a specific topic, find the relevant file and read it. And explain in details with all the images.If the user wants to schedule a task, use the calendar tool. The guide images are hosted on Cloudinary, and the links are embedded in the markdown files. When you read a file, you will see the image links. Display them to the user if relevant.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Understood. I am ready to help with 1099 processing using the available guide and tools.",
          },
        ],
      },
      ...history,
    ],
  });

  console.log("[GEMINI] Sending message to LLM API...");
  console.log("[GEMINI] Message:", userMessage.substring(0, 100) + (userMessage.length > 100 ? "..." : ""));

  let result = await chat.sendMessage(userMessage);
  let response = await result.response;
  let text = response.text();

  console.log("[GEMINI] Initial response received, length:", text.length);

  // Handle function calls loop
  while (response.functionCalls()) {
    const functionCalls = response.functionCalls();
    console.log("[GEMINI] Function calls detected:", functionCalls.length);
    const functionResponses = [];

    for (const call of functionCalls) {
      const name = call.name;
      const args = call.args;
      console.log("[GEMINI] Executing function:", name, "with args:", JSON.stringify(args));
      let apiResponse;

      if (name === "list_guide_files") {
        apiResponse = tools.list_guide_files();
        console.log("[GEMINI] list_guide_files returned", apiResponse.split("\n").length, "files");
      } else if (name === "read_guide_file") {
        apiResponse = tools.read_guide_file(args);
        console.log("[GEMINI] read_guide_file returned content length:", apiResponse.length);
      } else if (name === "create_calendar_event") {
        apiResponse = tools.create_calendar_event(args);
        console.log("[GEMINI] create_calendar_event created link");
      }

      functionResponses.push({
        functionResponse: {
          name: name,
          response: { name: name, content: apiResponse },
        },
      });
    }

    console.log("[GEMINI] Sending function responses back to LLM...");
    result = await chat.sendMessage(functionResponses);
    response = await result.response;
    text = response.text();
    console.log("[GEMINI] Response after function call, length:", text.length);
  }

  console.log("[GEMINI] Final response ready, total length:", text.length);
  return text;
}

module.exports = { handleChat };
