import { ChatExport } from '../types';

export const readJsonFile = (file: File): Promise<ChatExport> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (event) => {
            try {
                const content = event.target?.result as string;
                const data = JSON.parse(content) as ChatExport;
                resolve(data);
            } catch (error) {
                reject(new Error('Failed to parse JSON file'));
            }
        };

        reader.onerror = () => {
            reject(new Error('Failed to read file'));
        };

        reader.readAsText(file);
    });
};