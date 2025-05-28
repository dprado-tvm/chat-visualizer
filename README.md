# Chat Visualizer

Chat Visualizer is a web application that allows users to upload and visualize historical conversations exported from Microsoft services. The application processes a JSON file containing conversation data and presents it in a user-friendly format.

## Features

- Upload JSON files containing historical conversations.
- Display a list of conversations with participants.
- View individual messages within each conversation.

## Project Structure

```
chat-visualizer
├── src
│   ├── app.ts                # Entry point of the application
│   ├── models
│   │   ├── conversation.ts    # Conversation model
│   │   ├── message.ts         # Message model
│   │   └── user.ts            # User model
│   ├── services
│   │   ├── file-reader.ts     # File reading service
│   │   └── json-parser.ts     # JSON parsing service
│   ├── views
│   │   ├── conversation-list.ts # View for displaying conversations
│   │   └── message-view.ts     # View for displaying messages
│   └── types
│       └── index.ts           # Type definitions
├── test
│   └── __mocks__
│       └── sample-conversation.json # Sample conversation data for testing
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd chat-visualizer
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm start
   ```

## Usage

- Upload a JSON file containing conversation data.
- Navigate through the list of conversations and view messages.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.