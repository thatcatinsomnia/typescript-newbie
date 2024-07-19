interface User {
    id: number;
    name: string;
    role: 'user' | 'admin' | 'dog';
}

// TODO: how to make createUser always return User type ?
const createUser = () => {
    return {};
};

const user = createUser();

