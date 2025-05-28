export function renderConversationList(conversations: any[]): string {
    let html = '<ul>';
    conversations.forEach(conversation => {
        html += `<li>${conversation.id} - Participants: ${conversation.participants.join(', ')}</li>`;
    });
    html += '</ul>';
    return html;
}