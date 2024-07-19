interface Base {
    id: number;
}

interface User extends Base {
    name: string;
    age: number;
}

interface Pet extends Base {
    type: 'dog' | 'cat' | 'ghost';
}

interface Role extends Base {
    type: 'user' | 'admin';
}

