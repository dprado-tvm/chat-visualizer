const fs = require('fs');

function generateSampleData() {
    const users = [
        { id: 'user1', name: 'John Smith' },
        { id: 'user2', name: 'Sarah Johnson' },
        { id: 'user3', name: 'Mike Brown' },
        { id: 'user4', name: 'Emma Wilson' },
        { id: 'user5', name: 'James Miller' },
        { id: 'user6', name: 'Lisa Anderson' },
        { id: 'user7', name: 'David Taylor' },
        { id: 'user8', name: 'Maria Garcia' },
        { id: 'user9', name: 'Robert Martinez' },
        { id: 'user10', name: 'Jennifer Lee' },
        { id: 'user11', name: 'William Chen' },
        { id: 'user12', name: 'Patricia Wong' },
        { id: 'user13', name: 'Michael Davis' },
        { id: 'user14', name: 'Elizabeth Kim' },
        { id: 'user15', name: 'Thomas Moore' },
        { id: 'user16', name: 'Jessica White' },
        { id: 'user17', name: 'Kevin Patel' },
        { id: 'user18', name: 'Michelle Rodriguez' },
        { id: 'user19', name: 'Christopher Thompson' },
        { id: 'user20', name: 'Amanda Martinez' },
        { id: 'bot1', name: 'Teams Bot' },
        { id: 'bot2', name: 'Meeting Assistant' }
    ];

    const messageTypes = ['Text', 'RichText/HTML'];
    const topics = [
        'Project Alpha', 'Daily Standup', 'Bug Reports', 'Team Chat',
        'Marketing Discussion', 'Design Reviews', 'Customer Support',
        'Release Planning', 'Security Updates', 'Infrastructure'
    ];

    const data = {
        userId: 'user1',
        conversations: []
    };

    // Generate 50 conversations
    for (let i = 0; i < 50; i++) {
        const conversation = {
            id: `conv_${i}_${Date.now()}`,
            displayName: `${topics[i % topics.length]} ${Math.floor(i/5) + 1}`,
            MessageList: []
        };

        // Generate between 100 and 500 messages per conversation
        const messageCount = 100 + Math.floor(Math.random() * 400);
        let currentDate = new Date(2023, 0, 1);

        for (let j = 0; j < messageCount; j++) {
            currentDate = new Date(currentDate.getTime() + (1 + Math.floor(Math.random() * 29)) * 60000);
            const sender = users[Math.floor(Math.random() * users.length)];
            const mentionedUser = users[Math.floor(Math.random() * users.length)];

            const message = {
                id: `msg_${j}_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
                content: `@${mentionedUser.name} Could you please review the latest changes?`,
                from: sender.id,
                fromName: sender.name,
                originalarrivaltime: currentDate.toISOString(),
                messagetype: messageTypes[Math.floor(Math.random() * messageTypes.length)]
            };

            conversation.MessageList.push(message);
        }

        data.conversations.push(conversation);
    }

    return data;
}

const sampleData = generateSampleData();
fs.writeFileSync('public/sample-data.json', JSON.stringify(sampleData));
console.log('Sample data file generated successfully!');