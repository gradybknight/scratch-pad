import { combineReducers } from '@reduxjs/toolkit';
import globalUserInterfaceReducer from './globalUserInterfaceSlice';
import overviewInterfaceReducer from './overviewInterfaceSlice';

const rootReducer = combineReducers({
	globalUserInterface: globalUserInterfaceReducer,
	overviewInterface: overviewInterfaceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
