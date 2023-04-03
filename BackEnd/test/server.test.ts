import axios from 'axios';

describe('API Endpoint Test', () => {
  const baseURL = 'http://localhost:3000';

  test('GET / should return "Hello, World!"', async () => {
    const response = await axios.get(`${baseURL}/`);
    expect(response.status).toBe(200);
    expect(response.data).toBe('Hello, World!');
  });
  
});
