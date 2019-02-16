import { FETCH_TODOS, ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../actions/types';

const initialState = {
	items: []
}

export default function(state = initialState, action){
	switch(action.type){
		case FETCH_TODOS:
			return{
				...state,
				items: action.payload
			};
      case ADD_TODO:
			return{
				...state,
				items: action.payload
			};
    	case REMOVE_TODO:
    			return{
    				...state,
    				items: action.payload
    	};
      case UPDATE_TODO:
        	return{
        	   ...state,
        		items: action.payload
      };
		default:
			return state;
	}
}
