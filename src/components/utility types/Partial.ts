interface User {
    id: number;
    name: string;
    age: number;
  }
export const updateUser = (user: Partial<User>) => {
    // All properties in user are optional
    console.log(user);
};
  updateUser({ id: 1, name: 'Alice' });