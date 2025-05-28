// This file is the entry point of the application. It initializes the application, sets up the server, and handles incoming requests for uploading and displaying conversations.

import express from 'express';
import { readFile } from './services/file-reader';
import { parseJson } from './services/json-parser';
import { renderConversationList } from './views/conversation-list';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/upload', (req, res) => {
    const fileContent = readFile(req.body.filePath);
    const conversations = parseJson(fileContent);
    const html = renderConversationList(conversations);
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});