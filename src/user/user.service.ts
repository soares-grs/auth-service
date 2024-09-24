import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  username: string;
  name: string;
  password: string;
};

@Injectable()
export class UserService {
  private readonly users = [
    {
      id: 1,
      username: 'someusername',
      name: 'Example name',
      password: '123',
    },
  ];

  async findOne(username: string): Promise<User | any> {
    return this.users.find((user) => user.username == username);
  }
}
