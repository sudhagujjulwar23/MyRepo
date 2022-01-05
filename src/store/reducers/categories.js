import {CATEGORIES} from '../../../data/dummydata';

const initialState = {
    categories:CATEGORIES,
    filteredDishes:CATEGORIES,
    username:''
}

const categoryReducer = (state=initialState,action) => {
    return state;
}

export default categoryReducer;