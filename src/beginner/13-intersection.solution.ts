interface User {
    id: number; 
    name: string;
    age: number;
}

interface Pet {
    id: number;
    type: 'dog' | 'cat' | 'ghost';
}

const getUserAndPets = (): User & { pets: Pet[] } => {
    return {
        id: 1,
        name: 'John',
        age: 80,
        pets: [
            {
                id: 1,
                type: 'ghost'
            },
            {
                id: 2,
                type: 'ghost'
            }
        ]
    };
};

const userAndPets = getUserAndPets();

