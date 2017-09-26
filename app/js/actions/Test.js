export const setText = () => {
	return { text: 'hello', type: 'SET_TEXT' }
}

export const asyncAction = (password) => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			resolve(password)
		})
	}
}