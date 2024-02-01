import { CommonColumn } from "src/common/column/common-column";
import { RegistrationEntity } from "src/modules/registrations/entities/registration.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UsersEntity extends CommonColumn {
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
        name: 'alias_name',
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
    
    @OneToMany(() => RegistrationEntity, (reg) => reg.user)
    registration: RegistrationEntity[];
}
