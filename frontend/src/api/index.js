export const login = function(user) {
	let result = fetch('http://localhost:5000/api/auth', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },

		body: JSON.stringify({
			email: user.email,
			password: user.password,
		}),
	}).then((response) => response.json())

	return result
}

export const fun2 = function() {
	console.log('hej')
}

export const fun3 = function() {
	console.log('hej')
}

export const fun4 = function() {
	console.log('hej')
}
