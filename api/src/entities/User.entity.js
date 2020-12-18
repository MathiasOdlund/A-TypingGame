import { EntitySchema } from '../../node_modules/typeorm/index';

export const UserAuthType = {
  LOCAL: 'local',
  DISCORD: 'discord',
};

export const User = new EntitySchema({
  name: 'user',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    username: {
      name: 'username',
      unique: true,
      type: 'varchar',
      length: 20,
      nullable: false,
    },
    email: {
      name: 'email',
      unique: true,
      type: 'varchar',
      length: 50,
      nullable: false,
    },
    password: {
      name: 'password',
      type: 'varchar',
      length: 255,
      nullable: true,
    },
    isVerified: {
      name: 'is_verified',
      type: 'bool',
      default: false,
    },
    authType: {
      name: 'auth_type',
      type: 'enum',
      enum: UserAuthType,
      default: UserAuthType.LOCAL,
    },
    createdAt: {
      name: 'created_at',
      createDate: true,
    },
    updatedAt: {
      name: 'updated_at',
      updateDate: true,
    },
  },
});
