interface User {
    id: number;
    name: string;
    role: 'user' | 'admin' | 'dog';
}

const createUser = (): User => {
    return {
        id: 1,
        name: 'Elone Musk',
        role: 'admin'
    };
};

const user = createUser();

