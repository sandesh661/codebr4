import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
//import InputText from './InputText';
//import ViewTodo from './ViewTodo';
//import FormsyInput from './FormsyInput';
//import Formsy from 'formsy-react';

import { Provider } from 'react-redux';
import store from './store';

//import { connect } from 'react-redux';
//import { createTodo } from './actions/todoActions';







ReactDOM.render(<Provider store={store} ><TodoApp /></Provider>, document.getElementById('root'));
