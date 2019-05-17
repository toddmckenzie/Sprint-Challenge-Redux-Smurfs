/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, SUCCESS, FAILURE, ADD_SMURF,
  ADD_FRIEND_FAILURE, ADD_FRIEND_SUCCESS,
  DELETE_SMURF, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE
 } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetching: true,
  error: null,
  adding: false,
  deleting: false
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


function reducer(state = initialState, action) {
  switch (action.type){
    case FETCHING:
      return { ...state,
        fetching: true,
        error: null
      }
    case SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        fetching: false
      }
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case ADD_SMURF:
      return {
        ...state,
        adding: true
      }
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetching: false,
        error: ''
      }
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        fetching: false,
        error: 'We have an error'
      }
    case DELETE_SMURF:
      return{
        ...state,
        deleting: true
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        deleting: false,
        error: ''
      }
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        deleting: false,
        error: 'We have a delete error'
      }

    default:
      return state
  }
}



export default reducer;
