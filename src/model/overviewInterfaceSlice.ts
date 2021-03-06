import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OverviewInterface {
	bioVisible: boolean;
	workVisible: boolean;
	educationVisible: boolean;
	speakingVisible: boolean;
}
export interface SectionTogglePayload {
	section:
		| 'bioVisible'
		| 'workVisible'
		| 'educationVisible'
		| 'speakingVisible';
	value: boolean;
}

let initialState: OverviewInterface = {
	bioVisible: false,
	workVisible: false,
	educationVisible: false,
	speakingVisible: false,
};

const overviewInterfaceSlice = createSlice({
	name: 'globalUserInterface',
	initialState,
	reducers: {
		setSectionVisibility(state, action: PayloadAction<SectionTogglePayload>) {
			state[action.payload.section] = action.payload.value;
		},
	},
});

export const { setSectionVisibility } = overviewInterfaceSlice.actions;

export default overviewInterfaceSlice.reducer;
