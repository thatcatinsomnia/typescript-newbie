// TODO: refactor to DRY out this code

interface User {
    id: number;
    name: string;
    age: number;
}

interface Pet {
    id: number;
    type: 'dog' | 'cat' | 'ghost';
}

interface Role {
    id: number;
    type: 'user' | 'admin';
}

