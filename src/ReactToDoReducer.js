export const ReactToDoReducer = (initialState, action) => {
	switch (action.type){
		case 'Add':
			return [action.payload, ...initialState]
		case 'Delete':
			return initialState.filter(item => item.id !== action.payload);
		case 'Done':
			return initialState.map(item => {
				if(item.id === action.payload){
					return {
						...item,
						done: true
					}
				}
				return item;
			})
		default:
			return initialState;
	}
}