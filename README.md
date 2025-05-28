# Chat Visualizer

A web-based tool for visualizing Skype/Teams chat exports.

## Features
- Load and visualize Skype/Teams chat exports
- Search through all conversations
- Virtual scrolling for better performance
- Mobile-responsive design
- Local storage of conversations
- Shareable URLs (data stays in your browser)

## Getting Started

### Installation
1. Clone this repository:
```bash
git clone https://github.com/yourusername/chat-visualizer.git
cd chat-visualizer
```

2. Install dependencies:
```bash
npm install
```

### Running the Application
1. Start the local server:
```bash
npm start
```

2. Open http://localhost:3000 in your browser

### Generating Sample Data
To try the application with sample data:

1. Generate the sample file:
```bash
node scripts/generate-sample.js
```

2. This will create a `sample-data.json` file in the `public` directory
3. Open the application in your browser
4. Upload the generated `sample-data.json` file

The sample data includes:
- 50 different conversations
- 100-500 messages per conversation
- 20 different users and 2 bots
- Realistic timestamps and message content
- About 30MB of sample data

### Using Your Own Data
- Export your Skype/Teams chat history as JSON
- Upload the JSON file to the application
- The data stays in your browser's storage
- Use the generated URL to access your conversations later

## Privacy
- All data is stored locally in your browser
- No data is sent to any server
- Conversations are only accessible through your browser
- Use the Delete button to remove stored conversations

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

## License
MIT