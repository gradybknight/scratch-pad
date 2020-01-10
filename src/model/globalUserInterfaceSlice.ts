import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AllowedScreens =
	| 'Overview'
	| 'Projects'
	| 'ScratchPad'
	| 'AboutSite';
export interface TabInformation {
	tabIndex: number;
	screenName: AllowedScreens;
}

type OverallDisplayState = {
	isModalVisible: boolean;
} & TabInformation;

let initialState: OverallDisplayState = {
	tabIndex: 0,
	screenName: 'Overview',
	isModalVisible: false,
};

const globalUserInterfaceSlice = createSlice({
	name: 'globalUserInterface',
	initialState,
	reducers: {
		setCurrentTab(state, action: PayloadAction<TabInformation>) {
			state.tabIndex = action.payload.tabIndex;
			state.screenName = action.payload.screenName;
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
