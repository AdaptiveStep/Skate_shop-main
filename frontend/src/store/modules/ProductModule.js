export default {

	getters: {
		prodById(state, getters, rootState) {
			return (pid) => {
				let tmp = rootState.allProdDictionary[pid]
				if (!(tmp === undefined)) {
					return tmp
				} else {
					return {
						title: 'Unknown Product',
						price: '0',
						shortDesc: 'Unknown',
						longDesc:
							'No description. This product cannot be found in the database',
						imgFile: 'notfound.png',
						_id: '',
					}
				}
			}
		},

		prodsByIdArray(n, getters) {
			return (parray) => parray.map((id) => getters.prodById(id))
		},
	},
}
