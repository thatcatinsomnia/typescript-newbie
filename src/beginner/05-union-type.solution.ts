interface User {
    id: number;
    name: string;

    role: 'user' | 'admin' | 'dog';
}

const someone: User = {
    id: 1,
    name: 'John',

    // @ts-expect-error
    role: 'demon slayer'
};

