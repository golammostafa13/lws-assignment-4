import { edited } from "../actions";

const editTodo = (id, todoText) => {
    return async (dispatch) => {
        const response = await fetch("https://lws-ser-ver.herokuapp.com/api/todos/"+id, {
            method: "PUT",
            body: JSON.stringify({
                text: todoText,
                completed: false,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todo = await response.json();

        dispatch(edited(id, todo.text));
    };
};

export default editTodo;
