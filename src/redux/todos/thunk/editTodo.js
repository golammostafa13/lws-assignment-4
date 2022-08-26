import { edited } from "../actions";

const editTodo = (id, todoText) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:9000/todos/"+id, {
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
