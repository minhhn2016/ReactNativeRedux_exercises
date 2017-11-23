import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    // 1 -- initialize state object the key of libraries, with the value of LibraryReducer
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
