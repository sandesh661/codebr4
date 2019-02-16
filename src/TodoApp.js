import React from 'react';
import './index.css';
import InputText from './InputText';
import ViewTodo from './ViewTodo';
//import FormsyInput from './FormsyInput';
//import Formsy from 'formsy-react';

import { connect } from 'react-redux';
import { createTodo, remveTodo } from './actions/todoActions';


class TodoApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			uid: 4
		}
	this.handleAddtodo = this.handleAddtodo.bind(this);
	this.handleDelTodo = this.handleDelTodo.bind(this);
	this.handleEditTodo = this.handleEditTodo.bind(this);
	}


	handleAddtodo(todo, todoDesc){
		var newArray = {
			 id:this.state.uid,
			 item: todo,
			 description:todoDesc
		}
		var updatedTodo = this.props.todos;
    this.props.createTodo(updatedTodo.concat(newArray));
    this.setState({uid: this.state.uid+1})
	}

	handleDelTodo(id){
		var result = this.props.todos.filter((todobj) => {
			return todobj.id !== id;
		});
		this.props.remveTodo(result);
		//this.setState({ todos: result});
	}
	handleEditTodo(id){

	}

	render() {
		return(

			<div>
				<Heading />
				<InputText handleSubmitPrnt={this.handleAddtodo} />
				<ViewTodo todos={this.state.todos} handleDeletePrnt={this.handleDelTodo} handleEditPrnt={this.handleEditTodo} />
			</div>

		);
	}
}

class Heading extends React.Component {
	render(){
		return(
			<div className="heading">
				<span>Todo App </span>
			</div>
		);
	}
}

const mapStateToProps = state =>({
todos: state.todos.items
});
//posts from index file

export default connect(mapStateToProps, { createTodo, remveTodo })(TodoApp);
