// TODO: how to type params ?

export const getFullName = (params) => {
  return params.firstName + params.lastName;
};

console.log(getFullName({ firstName: 'Hello', lastName: 'World' }));
console.log(getFullName({ firstName: 'John', lastName: 'Doe' }));

