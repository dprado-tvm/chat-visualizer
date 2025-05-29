// This file is the entry point of the application. It initializes the application, sets up the server, and handles incoming requests for uploading and displaying conversations.

import express, { Request, Response } from 'express';
import path from 'path';
import { ChatExport, Conversation, Message } from './types';

const app = express();
const port = 3000;

// Middleware
app.use(express.json({ limit: '200mb' })); // Increased limit for large JSON files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Add base path middleware
app.use((req, res, next) => {
    res.locals.basePath = process.env.NODE_ENV === 'production' ? '/chat-visualizer-1' : '';
    next();
});

// Routes
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/upload', async (req: Request, res: Response) => {
    try {
        const data = req.body as ChatExport;
        
        // Process conversations
        const processedData = data.conversations.map((conv: Conversation) => ({
            id: conv.id,
            displayName: conv.displayName,
            messages: conv.MessageList.map((msg: Message) => ({
                id: msg.id,
                time: msg.originalarrivaltime,
                content: msg.content,
                from: msg.from,
                type: msg.messagetype
            }))
        }));

        res.json({ 
            success: true, 
            conversations: processedData 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error instanceof Error ? error.message : 'Unknown error' 
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});