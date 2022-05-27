import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID j6qS54GzSmkaWJIhsPnwMJFLAZ-56nMJ0Eh7LlA_Z00'
    }
});