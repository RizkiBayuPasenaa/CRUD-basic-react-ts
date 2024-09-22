// User.ts
const User: UserType[] = [
  {
    id: 1,
    name: 'John',
    age: 20
  },
  {
    id: 2,
    name: 'Jane',
    age: 21
  },
  {
    id: 3,
    name: 'Jack',
    age: 22
  },
  {
    id: 4,
    name: 'Jill',
    age: 23
  },
  {
    id: 5,
    name: 'Joe',
    age: 24
  }
];

export default User;

export interface UserType {
  id: number;
  name: string;
  age: number;
}
