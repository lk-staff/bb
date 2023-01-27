import { EntityRepository } from '@mikro-orm/core';
import { User } from '@/users/entities/user.entity';

export class UserRepository extends EntityRepository<User> {}
