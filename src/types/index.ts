export interface ChatExport {
    userId: string;
    exportDate: string;
    conversations: Conversation[];
}

export interface Conversation {
    id: string;
    displayName: string;
    version: number;
    properties: ConversationProperties;
    threadProperties: any;
    MessageList: Message[];
}

export interface ConversationProperties {
    conversationblocked: boolean;
    lastimreceivedtime: string;
    consumptionhorizon: string;
    conversationstatus: string;
}

export interface Message {
    id: string;
    displayName: string | null;
    originalarrivaltime: string;
    messagetype: string;
    version: number;
    content: string;
    conversationid: string;
    from: string;
    properties: MessageProperties;
}

export interface MessageProperties {
    importance: string;
    onbehalfof: string;
    formatVariant: string;
    mentions: string;
}