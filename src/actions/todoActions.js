import { FETCH_TODOS, ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './types';

const todos =   [ {
                      id: 1,
                      item: 'item One',
                      description: 'item one description.'
                    },
                    {
                      id: 2,
                      item: 'item Two',
                      description: 'item two description.'
                    },
                    {
                      id: 3,
                      item: 'new item',
                      description: 'Here is description'
                    }
                  ]

export const fetchTodos = () => dispatch => {

		  dispatch({
			  type: FETCH_TODOS,
			  payload: todos
		  })
}

export const createTodo = (todoData) => dispatch => {
  //const newTodo = todos.push(todoData);
  //console.log(todos);
	 dispatch({
			  type: ADD_TODO,
			  payload: todoData
		  })
}

export const remveTodo = (todoData) => dispatch => {
	 dispatch({
			  type: REMOVE_TODO,
			  payload: todoData
		  })
}
export const updateTodo = (todoData) => dispatch => {
	 dispatch({
			  type: UPDATE_TODO,
			  payload: todoData
		  })
}
