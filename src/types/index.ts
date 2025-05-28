export interface Conversation {
    id: string;
    participants: User[];
    messages: Message[];
}

export interface Message {
    sender: User;
    content: string;
    timestamp: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
}