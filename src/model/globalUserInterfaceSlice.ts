import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OverallDisplay {
	tabIndex: number;
	isModalVisible: boolean;
}

let initialState: OverallDisplay = {
	tabIndex: 2,
	isModalVisible: false,
};

const globalUserInterfaceSlice = createSlice({
	name: 'globalUserInterface',
	initialState,
	reducers: {
		setCurrentTab(state, action: PayloadAction<number>) {
			state.tabIndex = action.payload;
		},
		setModalVisibility(state, action: PayloadAction<boolean>) {
			state.isModalVisible = action.payload;
		},
	},
});

export const {
	setCurrentTab,
	setModalVisibility,
} = globalUserInterfaceSlice.actions;

export default globalUserInterfaceSlice.reducer;
