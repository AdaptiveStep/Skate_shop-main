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

export const getAllItems = function() {
	let result = fetch('http://localhost:5000/api/products', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	}).then((response) => response.json())

	return result
}

export const getProductById = function(productId) {
	let result = fetch('http://localhost:5000/api/products/:id', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },

		body: JSON.stringify({
			id: productId,
		}),
	}).then((response) => response.json())

	return result
}

export const createProduct = function(product, user) {
	let result = fetch('http://localhost:5000/api/products/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + user.token,
		},

		body: JSON.stringify({
			title: product.title,
			price: product.price,
			shortDesc: product.shortDesc,
			category: product.category,
			longDesc: product.longDesc,
			imgFile: product.imgFile,
			serial: product.serial,
		}),
	}).then((response) => response.json())

	return result
}



export const updateProductById = function(product, user) {
	console.log('USER now', user)
	console.log('Product now', product)

	let endpoint = 'http://localhost:5000/api/products/' + product._id
	let result = fetch(endpoint, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',

			Authorization: 'Bearer ' + user.token,
		},

		body: JSON.stringify({
			title: product.title,
			price: product.price,
			shortDesc: product.shortDesc,
			category: product.category,
			longDesc: product.longDesc,
			imgFile: product.imgFile,
			serial: product.serial,
			id: product._id,
		}),
	}).then((response) => response.json())

	return result
}

export const deleteProductById = function(product, user) {
	let endpoint = 'http://localhost:5000/api/products/' + product._id
	let result = fetch(endpoint, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + user.token,
		},
	}).then((response) => response.json())
	return result
}

export const createOrder = function(user, itemIdArray, price) {
	let result = fetch('http://localhost:5000/api/orders', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',

			Authorization: 'Bearer ' + user.token,
		},

		body: JSON.stringify({
			items: itemIdArray,
			orderValue: price,
			status: 'inProcess',
		}),
	}).then((response) => response.json())
	return result
}

export const createUnknownOrder = function(itemIdArray, price) {
	let result = fetch('http://localhost:5000/api/orders', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			items: itemIdArray,
			orderValue: price,
			status: 'inProcess',
		}),
	}).then((response) => response.json())
	return result
}

export const getAllOrders = function(user) {
	let result = fetch('http://localhost:5000/api/orders', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + user.token,
		},
	}).then((response) => response.json())

	return result
}

export const createUser = function(user) {
	let tmpadress = user.adress
		? user.adress
		: { street: 'TestStreet', zip: '123 34', city: 'TestCity' }
	let result = fetch('http://localhost:5000/api/register', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },

		body: JSON.stringify({
			email: user.email,
			password: user.password,
			repeatPassword: user.password,

			name: user.name,
			adress: tmpadress,
			payment: {
				cardOwner: 'unamed',
				cardNumber: '0000 0000 0000 0000',
				validUntil: '10 / 23',
				cvv: '123',
			},
		}),
	}).then((response) => response.json())

	return result
}
