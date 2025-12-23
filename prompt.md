I am building an AI assistant (for demo purpose) which can help user with 1099 processing. I have provided the detailed guide that is designed to provide an overview of the tasks involved with 1099 Withholding Processing. The guide shows users how to process 1099 Withholding Forms for a calendar year, as well as how to complete tasks throughout the year for smooth withholding processing. Using the software PeopleSoft Financials.

Guide details

- The guide is in form of md file
- Dir path: 1099_aai/1099_processing_users_guide
- All the list of content and path in this file - "1099_aai/1099_processing_users_guide/table_of_contents.md"
- Guide file have images which will be shown to user depending on the query and or task the ai assistant is showing to user

For Ai assistant use LLM - models/gemini-3-flash-preview and provide it context and mcp to get the guide files for context and then answer the user query. also ask user to add tasks to the calender if required. by simple creating a calendar link for google calender.

Project architecture

- project dir - 1099_aai
- node js server
- express js
- LLM - models/gemini-3-flash-preview
- frontend - react js
- use javascript not typescript

Backend

- Use node js and express js
- create user login password protected system with jwt token
- user id and password will be env files
- jwt is mandatory in chat api calls
- use LLM - models/gemini-3-flash-preview
- in the sytem promt give the context of the guide files and mcp tool and list of content as well and informing the to use guide as much as possible to answer the user query.
- use mcp tool to get the guide files for context and then answer the user query.
- Create calendar link for google calender and ask user to add tasks to the calender if required. In the calender link add proer name and description of the task.

Frontend

- It should be simple and user friendly with mordern desing
- Use react js and tailwind css
- should be completly responsive
- create a login password protected page where user can login
- it shpuld have a chat interface where user can ask questions and ai assistant can answer
- at the start of the chat it should add some cta button to start the chat, like "What the checklist for 1099 processing?" or "How to start 1099 processing?" etc.
- in the chat it should show the user query and ai assistant answer and mcp tool used by the ai, do not show mcp tool response and ai query just show the tool used
- in ai assistant answers if there are image it should be shown in chat
- if the chat assistant create link for google calender it should be shown in chat as button
- save the chat and chat history locally in localstorage.

NOTE: this is just a demo project so UI and UX shpuld be good but backend shpuld be simple and easy to understand and maintain.
