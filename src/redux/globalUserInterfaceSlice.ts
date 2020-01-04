import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OverallDisplay {
	tabIndex: number;
	isModalVisible: boolean;
}

interface SetCurrentTabPayload {
	tabIndex: number;
}

interface SetModalVisibility {
	isModalVisible: boolean;
}

let initialState: OverallDisplay = {
	tabIndex: 0,
	isModalVisible: false,
};

const globalUserInterfaceSlice = createSlice({
	name: 'globalUserInterface',
	initialState,
	reducers: {
		setCurrentTab(state, action: PayloadAction<SetCurrentTabPayload>) {
			const { tabIndex } = action.payload;
			state.tabIndex = tabIndex;
		},
		setModalVisibility(state, action: PayloadAction<SetModalVisibility>) {
			const { isModalVisible } = action.payload;
			state.isModalVisible = isModalVisible;
		},
	},
});

export const {
	setCurrentTab,
	setModalVisibility,
} = globalUserInterfaceSlice.actions;

export default globalUserInterfaceSlice.reducer;
