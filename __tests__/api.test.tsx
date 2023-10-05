import axios from 'axios';

test('createPoll API works correctly', async () => {
    const response = await axios.post('/api/createPoll', {/* your data here */});
    expect(response.data.success).toBe(true);
});
