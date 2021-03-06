import {ADOPT_DOG_REQUEST,
ADOPT_DOG_ERROR,
ADOPT_DOG_SUCCESS,
FETCH_DOG_REQUEST,
FETCH_DOG_ERROR,
FETCH_DOG_SUCCESS} from '../actions'

const initialState = {
    data: null,
    error: null,
    loading: false
  }


  export default function(state = initialState, action){
    if(action.type === ADOPT_DOG_REQUEST){
      return Object.assign({}, state, {
        loading: true
      }) 
    }
    if(action.type === ADOPT_DOG_SUCCESS){
      return Object.assign({}, state, {
        data: null,
        loading: false
      })
    }
    if(action.type === ADOPT_DOG_ERROR){
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    }
    if(action.type === FETCH_DOG_REQUEST){
      return Object.assign({}, state, {
        loading: true
      }) 
    }
    if(action.type === FETCH_DOG_SUCCESS){
      return Object.assign({}, state, {
        data: action.dog,
        loading: false
      })
    }
    if(action.type === FETCH_DOG_ERROR){
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    }
  
      return state;
  }