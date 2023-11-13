const { createSlice } = require('@reduxjs/toolkit');
const UiReducer = createSlice({
	name: 'ui',
	initialState: {
		tab: 'men',
	},
	reducers: {
		setTab(state, action) {
			state.tab = action.payload;
		},
	},
});

const { actions } = UiReducer;

export const { setTab } = actions;

export default UiReducer;
