/**
 * Main entry point for the Mhm application
 */

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function add(a: number, b: number): number {
  return a + b;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserManager {
  private users: User[] = [];
  private nextId: number = 1;

  addUser(name: string, email: string): User {
    const user: User = {
      id: this.nextId++,
      name,
      email
    };
    this.users.push(user);
    return user;
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}

if (require.main === module) {
  console.log(greet('Mhm'));
  console.log('Sum of 5 + 3 =', add(5, 3));
}
