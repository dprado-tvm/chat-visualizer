export function parseJson(jsonString: string) {
    try {
        const data = JSON.parse(jsonString);
        const conversations = data.conversations.map((conv: any) => ({
            id: conv.id,
            participants: conv.participants,
            messages: conv.messages.map((msg: any) => ({
                sender: msg.sender,
                content: msg.content,
                timestamp: new Date(msg.timestamp),
            })),
        }));
        return conversations;
    } catch (error) {
        throw new Error("Invalid JSON format");
    }
}