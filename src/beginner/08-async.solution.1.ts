interface Todo {
    id: number;
    userId: number;
    title: string;
    complete: true;
}

const myTodo = async (): Promise<Todo> => {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json());

    return todos;
};

console.log(myTodo());

