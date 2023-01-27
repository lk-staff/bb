import { Entity, EntityRepositoryType } from '@mikro-orm/core';
import { BaseEntity } from 'core/entities/base.entity';
import { UserRepository } from '@/users/repositories/user.repository';

@Entity({ customRepository: () => UserRepository })
export class User extends BaseEntity {
  [EntityRepositoryType]?: UserRepository;

  email!: string;

  password!: string;
}
