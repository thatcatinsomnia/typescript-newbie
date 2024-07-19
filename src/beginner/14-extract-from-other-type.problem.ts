interface User {
   id: number;
   firstName: string;
   lastName: string;
}


// TODO: extract firstName & lastName to a new type.
// NOTE: check typescript Utility Types:
// https://www.typescriptlang.org/docs/handbook/utility-types.html
type MyType = unknown;
