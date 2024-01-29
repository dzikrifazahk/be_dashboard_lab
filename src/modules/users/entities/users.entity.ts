import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: 'username',
        type: 'varchar',
    })
    username: string;

    @Column({
        name: 'password',
        type: 'varchar',
    })
    password: string;

    @Column({
        name: 'fullname',
        type: 'varchar',
    })
    fullname: string;

    @Column({
        name: 'aliasName',
        type: 'varchar',
    })
    aliasName: string;

    @Column({
        name: 'role',
        type: 'varchar',
    })
    role: string;

    @Column({
        name: 'address',
        type: 'varchar'
    })
    address: string;

    @Column({
        name: 'needChangePassword',
        type: 'boolean',
        default: false
    })
    needChangePassword: boolean;
    
}
