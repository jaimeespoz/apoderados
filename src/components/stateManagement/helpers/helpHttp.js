export const helpHttp = () => {
	const customFetch = (endpoint, options) => {
		const defaultHeader = {
			accept: 'application/json',
		};

		const controller = new AbortController();
		options.signal = controller.signal;

		options.method = options.method || 'GET';
		options.headers = options.headers
			? {
					...defaultHeader,
					...options.headers,
			  }
			: defaultHeader;

		options.body = JSON.stringify(options.body) || false;
		if (!options.body) delete options.body;

		// alert(JSON.stringify(options));
		setTimeout(() => controller.abort(), 3000);

		console.log(endpoint + ' : ' + JSON.stringify(options));
		return (
			fetch(endpoint, options)
				// .then(parseJson)
				// .then((res) => {
				// 	console.log('My json: ', res);
				// })
				// .then((response) => console.log(response))
				// .then((response) => response.json())
				// .then((json) => console.log(json))
				.then((res) =>
					res.ok
						? res.json()
						: Promise.reject({
								err: true,
								status: res.status || '00',
								statusText: res.statusText || 'Ocurrio un Error',
						  })
				)
				.catch((err) => err)
		);
	};
	const parseJson = async (response) => {
		const text = await response.text();
		console.log(text);
		try {
			const json = JSON.parse(text);
			console.log(json);
			return json;
		} catch (err) {
			throw new Error('Did not receive JSON, instead received: ' + text);
		}
	};
	// const register = (url, options = {}) => {
	// 	options.method = 'POST';
	// 	return customFetch(url, options);
	// };

	// const login = (url, options = {}) => {
	// 	options.method = 'POST';
	// 	return customFetch(url, options);
	// };

	const get = async (url, options = {}) => await customFetch(url, options);

	const post = (url, options = {}) => {
		options.method = 'POST';
		return customFetch(url, options);
	};

	const put = (url, options = {}) => {
		options.method = 'PUT';
		return customFetch(url, options);
	};

	const del = (url, options = {}) => {
		options.method = 'DELETE';
		return customFetch(url, options);
	};

	return {
		// register,
		// login,
		get,
		post,
		put,
		del,
	};
};
