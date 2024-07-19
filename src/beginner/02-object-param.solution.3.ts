interface GetFullNameArgs {
    firstName: string;
    lastName: string;
}

export const getFullName = (params: GetFullNameArgs) => {
    return params.firstName + params.lastName;
};

console.log(getFullName({ firstName: 'Hello', lastName: 'World' }));
console.log(getFullName({ firstName: 'John', lastName: 'Doe' }));

