type GetFullNameArgs = {
    firstName: string;
    lastName: string;
};

export const getFullName = (params: GetFullNameArgs) => {
    return params.firstName + params.lastName;
};

// TODO: how to make lastName optional ?
console.log(getFullName({ firstName: 'Hello' }));
console.log(getFullName({ firstName: 'John', lastName: 'Doe' }));

