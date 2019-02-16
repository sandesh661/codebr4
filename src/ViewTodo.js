import React from 'react';
import './index.css';

import { connect } from 'react-redux';
import { fetchTodos,updateTodo } from './actions/todoActions';

class ViewTodo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			todos : [],
      Alltodos: [],
			isEditable: '',
			editedTodo: '',
			editedDesc: '',
			showeditBtn: true,
      isDelCheck: true,
      disableCheckbox: false,
      disableRadio: false
		}
		this.handleEdtChng = this.handleEdtChng.bind(this);
		this.handleEdtChngDesc = this.handleEdtChngDesc.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
	}

  componentWillMount(){
  		this.props.fetchTodos();        //redux fetch
  }
  handleSearch(event){
      // console.log('Changing...');
      var updatedList = this.state.Alltodos;
          updatedList = updatedList.filter((todobj) => {
                return todobj.item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
          });
          this.setState({todos: updatedList});
  }
	componentWillReceiveProps(newProps) {
    this.setState({todos: newProps.todos});
    this.setState({Alltodos: newProps.todos});
  }
	handleDelete(id){
		this.props.handleDeletePrnt(id);
      this.setState({disableRadio: false});           //enable Radio on checkbox click
      this.setState({isDelCheck: true});
	}
	handleEdit(id, item, description){
		this.setState({isEditable: id});
		this.setState({editedTodo: item});
		this.setState({editedDesc: description});
		this.setState({disableCheckbox: true});           //disable checkbox on radio click

	}
	handleEdtChng(e){
		this.setState({editedTodo: e.target.value});
	}
	handleEdtChngDesc(e){
		this.setState({editedDesc: e.target.value});
	}
	handleUpdate(){
		var isDone = this.setState( state => {
      console.log(this.props);
			const list = state.todos.map((todobj) => {
				if(todobj.id !== this.state.isEditable){
					return todobj;
				}else{
					todobj.item = this.state.editedTodo;
  					todobj.description = this.state.editedDesc;
					return todobj;
				}
			});
			return{
				list,
			}
		});
          Promise.all([ isDone ]).then((responses) => {
            this.props.updateTodo(this.state.todos);
          });
		this.setState({isEditable: ''});
		this.setState({editedTodo: ''});
		this.setState({disableCheckbox: false});           //enable checkbox on radio click
	}
  onCheckClick(){
    this.setState({disableRadio: true});           //disable checkbox on radio click
    this.setState({isDelCheck: false});
  }

	render() {
		return(
      <div><input type="text" name="searchkey" onChange={this.handleSearch} className="searchBox"  placeholder="Search.." />
			{ this.state.todos.map((todobj) => {
				const editable = (todobj.id !== this.state.isEditable);
  			//const unselectAll = (this.state.disableCheckbox===true) ? 'Radio' : (this.state.disableRadio===true) ? 'checkBox' : '';
				return(
          <div key={todobj.id}>
    					<div className="editdiv">
    							<input type="text" value={editable ? todobj.item : this.state.editedTodo} className={editable ? "border-none" : ""} onChange={this.handleEdtChng} disabled={editable} />
                  <input type="checkbox" onClick={this.onCheckClick.bind(this)} name="todoCheckbox" className="btnRadio" disabled={this.state.disableCheckbox} />
                  <input type="radio"  onClick={this.handleEdit.bind(this, todobj.id, todobj.item, todobj.description)} name="todoRadio" className="btnRadio" disabled={this.state.disableRadio} checked={!editable} />

    					</div>
              <div>
                <textarea className="viewDesc"  onChange={this.handleEdtChngDesc} disabled={editable} value={editable ? todobj.description : this.state.editedDesc} />
                <button type="button" onClick={this.handleDelete.bind(this, todobj.id)} className="deleteBtn" disabled={this.state.isDelCheck} > X </button>
              { (editable) ?
                <button type="button" className="editBtn" disabled={editable} >edit</button>
                :
                <button type="button" onClick={this.handleUpdate} className="updtBtn" disabled={editable} >Update</button>
              }
              </div>
          </div>
			);
			})
    }
		</div>);
	}
}

const mapStateToProps = state =>({
	todos: state.todos.items
});
//posts from index file

export default connect(mapStateToProps, { fetchTodos, updateTodo })(ViewTodo);
//export default ViewTodo;
