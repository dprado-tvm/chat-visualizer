export function renderMessageView(conversation) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-view');

    const title = document.createElement('h2');
    title.textContent = `Messages in Conversation with ${conversation.participants.join(', ')}`;
    messageContainer.appendChild(title);

    conversation.messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');

        const sender = document.createElement('strong');
        sender.textContent = `${message.sender}: `;
        messageElement.appendChild(sender);

        const content = document.createElement('span');
        content.textContent = message.content;
        messageElement.appendChild(content);

        const timestamp = document.createElement('small');
        timestamp.textContent = ` (${new Date(message.timestamp).toLocaleString()})`;
        messageElement.appendChild(timestamp);

        messageContainer.appendChild(messageElement);
    });

    return messageContainer;
}