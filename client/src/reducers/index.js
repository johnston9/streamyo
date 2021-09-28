import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});

// FINAL FORM VERSION
// import { combineReducers } from "redux";
 
// import authReducer from "./authReducer";
// import streamReducer from "./streamReducer";
 
// export default combineReducers({
//   auth: authReducer,
//   streams: streamReducer,
// });