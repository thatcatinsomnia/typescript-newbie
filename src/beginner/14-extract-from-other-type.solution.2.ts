interface User {
   id: number;
   firstName: string;
   lastName: string;
}

type MyType = Pick<User, 'firstName' | 'lastName'>;

