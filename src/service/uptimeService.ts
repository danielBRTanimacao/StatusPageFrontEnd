import axios from 'axios';

const endpoint = 'http://127.0.0.1:8080/api/endpoints';

export interface uptimeEntity {
    id: number;
    name: string;
    url: string;
    online: boolean;
    ping: number;
    lastChecked: Date;
}

export async function getData() {
    try {
        const response = await axios.get(endpoint);
        return response.data.content;
    } catch (e) {
        console.error(e);
        return [];
    }
}
