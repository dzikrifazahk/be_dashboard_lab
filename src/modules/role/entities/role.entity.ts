import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('role')
export class RoleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        name: 'roleName',
        type: 'varchar',
    })
    roleName: string;

    @Column({
        name: 'acces',
        type: 'varchar',
        array: true,
        nullable: true
    })
    acces: string[];

}
