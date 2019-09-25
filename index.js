const axios = require('axios');
const querystring = require('querystring');

class MailgunAPI {
	constructor ({ apiKey, domain, region }) {
		if (typeof apiKey !== 'string') throw new TypeError('apiKey must be string');
		if (typeof domain !== 'string') throw new TypeError('domain must be string');

		let apiDomain;
		if (region.toUpperCase() === 'EU') {
			apiDomain = 'api.eu.mailgun.net';
		} else {
			apiDomain = 'api.mailgun.net';
		}

		this.api = axios.create({
			baseURL: `https://${apiDomain}/v3/${domain}/`,
			auth: {
				username: 'api',
				password: apiKey,
			},
		});

		return this;
	}

	sendMessage (params = {}) {
		return this.api({
			method: 'POST',
			url: '/messages',
			data: querystring.stringify(params),
		});
	}
}

module.exports = MailgunAPI;
