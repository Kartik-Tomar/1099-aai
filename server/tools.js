const fs = require("fs");
const path = require("path");

const GUIDE_DIR = path.join(__dirname, "./1099_processing_users_guide");

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

  create_calendar_event: ({ title, description, date, recurrence }) => {
    // Format: https://calendar.google.com/calendar/render?action=TEMPLATE&text=TITLE&details=DETAILS&dates=START/END&recur=RRULE
    // Supports one-time and recurring events

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

    // Handle recurrence rules
    // recurrence can be an object like: { frequency: "DAILY|WEEKLY|MONTHLY|YEARLY", interval: 1, count: 10, until: "YYYYMMDD", byDay: ["MO","TU"] }
    // Or a pre-formatted RRULE string
    let recur = "";
    if (recurrence) {
      let rrule = "";

      if (typeof recurrence === "string") {
        // If it's already an RRULE string, use it directly
        rrule = recurrence.startsWith("RRULE:") ? recurrence : `RRULE:${recurrence}`;
      } else if (typeof recurrence === "object") {
        // Build RRULE from object
        const parts = [];

        if (recurrence.frequency) {
          parts.push(`FREQ=${recurrence.frequency.toUpperCase()}`);
        }

        if (recurrence.interval) {
          parts.push(`INTERVAL=${recurrence.interval}`);
        }

        if (recurrence.count) {
          parts.push(`COUNT=${recurrence.count}`);
        } else if (recurrence.until) {
          parts.push(`UNTIL=${recurrence.until}`);
        }

        if (recurrence.byDay && Array.isArray(recurrence.byDay)) {
          parts.push(`BYDAY=${recurrence.byDay.join(",")}`);
        }

        if (recurrence.byMonthDay) {
          parts.push(`BYMONTHDAY=${recurrence.byMonthDay}`);
        }

        if (recurrence.byMonth) {
          parts.push(`BYMONTH=${recurrence.byMonth}`);
        }

        if (parts.length > 0) {
          rrule = `RRULE:${parts.join(";")}`;
        }
      }

      if (rrule) {
        recur = `&recur=${encodeURIComponent(rrule)}`;
      }
    }

    const link = `${baseUrl}&text=${encodedTitle}&details=${encodedDetails}${dates}${recur}`;
    return link;
  },
};

module.exports = tools;
