// const private_key = import.meta.env.REACT_APP_PRIVATE_API_TOKEN;
const private_key =
	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njc0MThiNDNjZjVkNDkwZmQ0YjliNWE5YjljZmQwMiIsIm5iZiI6MTczMjQ1NjY5Ni4xMDAyMTk1LCJzdWIiOiI2MjE4ZTU4NTM4M2RmMjAwNmMxNjE5OTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sP65SjfSpyKaMpXTdAX13bC-B_k8RdM96Iq89SFjYyU';

const urlBase = 'https://api.themoviedb.org/';

export async function getStreams() {
	try {
		const response = await fetch(
			// `${urlBase}3/tv/popular?language=en-US&page=1`,
			// `${urlBase}3/discover/movie`,
			`${urlBase}3/trending/all/day`,

			{
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${private_key}`,
				},
			}
		);

		if (!response.ok) throw new Error('Erro ao buscar Streams!');

		const data = await response.json();

		// console.log(data);

		return data.results;
	} catch (e) {
		// alert(e);
		console.log(e);
	}
}

export async function getStreamById(id) {
	try {
		const response = await fetch(
			// `${urlBase}3/tv/popular?language=en-US&page=1`,
			`${urlBase}3/movie/${id}`,
			{
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${private_key}`,
				},
			}
		);

		console.log(response);

		if (!response.ok) throw new Error('Erro ao buscar Streams!');

		const data = await response.json();

		console.log(data);

		return data;
	} catch (e) {
		// alert(e);
		console.log(e);
	}
}

export async function getRecommendations(id) {
	try {
		const response = await fetch(
			// `${urlBase}3/tv/popular?language=en-US&page=1`,
			`${urlBase}3/movie/${id}/recommendations`,
			{
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${private_key}`,
				},
			}
		);

		if (!response.ok) throw new Error('Erro ao buscar Streams!');

		const data = await response.json();

		return data.results;
	} catch (e) {
		// alert(e);
		console.log(e);
	}
}
