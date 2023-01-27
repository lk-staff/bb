import { Injectable } from '@nestjs/common';
// import { UserRepository } from '@/users/repositories/user.repository';

@Injectable()
export class UsersService {
  // constructor(private readonly userRepository: UserRepository) {}

  async create() {
    return 'This action adds a new user';
  }
}
