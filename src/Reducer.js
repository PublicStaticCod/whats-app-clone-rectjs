export const initialState = {
	user: null,
	//  remove after finish devlopment....
};

export const actionTypes = {
	SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};

export default reducer;

// no go to indext .js and pluged in it DataLayer
