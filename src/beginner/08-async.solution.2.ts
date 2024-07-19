interface Todo {
    id: number;
    userId: number;
    title: string;
    complete: true;
}

const myTodo = async () => {
    const todo: Todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json());

    return todo;
};

console.log(myTodo);

