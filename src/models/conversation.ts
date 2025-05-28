class Conversation {
    id: string;
    participants: User[];
    messages: Message[];

    constructor(id: string, participants: User[]) {
        this.id = id;
        this.participants = participants;
        this.messages = [];
    }

    addMessage(message: Message) {
        this.messages.push(message);
    }

    getMessageHistory(): Message[] {
        return this.messages;
    }
}

export default Conversation;