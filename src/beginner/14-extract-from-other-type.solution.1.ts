interface User {
   id: number;
   firstName: string;
   lastName: string;
}

type MyType = Omit<User, 'id'>;

