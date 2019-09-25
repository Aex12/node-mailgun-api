const axios = require('axios');

class MailgunAPI {
	constructor ({ apiKey, domain }) {
		this.api = axios.create({
			baseURL: `https://api.mailgun.net/v3/${domain}/`,
			username: 'api',
			password: apiKey,
		});

		return this;
	}

	sendMessage (options) {
		return this.api.post('/messages', options);
	}
}

module.exports = MailgunAPI;
