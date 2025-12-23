const fs = require("fs");
const path = require("path");

const GUIDE_DIR = path.join(__dirname, "../1099_processing_users_guide");

const tools = {
  list_guide_files: () => {
    try {
      const files = fs
        .readdirSync(GUIDE_DIR)
        .filter((file) => file.endsWith(".md"));
      return JSON.stringify(files);
    } catch (error) {
      return JSON.stringify({ error: error.message });
    }
  },

  read_guide_file: ({ filename }) => {
    try {
      const filePath = path.join(GUIDE_DIR, filename);
      if (!fs.existsSync(filePath)) {
        return JSON.stringify({ error: "File not found" });
      }
      const content = fs.readFileSync(filePath, "utf-8");
      return content;
    } catch (error) {
      return JSON.stringify({ error: error.message });
    }
  },

  create_calendar_event: ({ title, description, date }) => {
    // Format: https://calendar.google.com/calendar/render?action=TEMPLATE&text=TITLE&details=DETAILS&dates=START/END
    // Simple implementation assuming all-day event or specific time if provided in date

    const baseUrl =
      "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const encodedTitle = encodeURIComponent(title);
    const encodedDetails = encodeURIComponent(description || "");

    // Simple date handling - if date is YYYYMMDD, use it. If not, try to parse.
    // For this demo, let's assume the LLM provides a reasonable string or we just default to "today"
    // Better: Ask LLM to provide YYYYMMDDTHHMMSSZ format

    let dates = "";
    if (date) {
      // Basic cleanup to ensure it looks like a date param
      dates = `&dates=${date}/${date}`;
    }

    const link = `${baseUrl}&text=${encodedTitle}&details=${encodedDetails}${dates}`;
    return link;
  },
};

module.exports = tools;
