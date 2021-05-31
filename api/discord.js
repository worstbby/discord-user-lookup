const axios = require('axios');
const rateLimit = require('axios-rate-limit');

const http = rateLimit(axios.create({
            baseURL: 'https://discord.com/api',
            headers: {
                'Authorization':`Bot ${process.env.TOKEN}`,
            }
        }
    ), 
    {
        maxRequests: 15,
        perMilliseconds: 1000,
        maxRPS: 15,
    }
);

const getUser = async (id) => {
    try {
        const response = await http.get(`/users/${id}`);
        return response;
    } catch (error) {
        return { data: { error: error.message } };
    }
}

module.exports = { getUser }
