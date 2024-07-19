interface User {
    id: number;
    name: string;

    // TODO: how to make role can only be one of 'user', 'admin', 'dog' ?
    role: string;
}

const someone: User = {
    id: 1,
    name: 'John',

    // @ts-expect-error
    role: 'demon slayer'
};

