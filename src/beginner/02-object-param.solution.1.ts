export const getFullName = (params: {
    firstName: string;
    lastName: string;
}) => {
  return params.firstName + params.lastName;
};

console.log(getFullName({ firstName: 'Hello', lastName: 'World' }));
console.log(getFullName({ firstName: 'John', lastName: 'Doe' }));

