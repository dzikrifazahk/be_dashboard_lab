import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('parameters')
export class Parameter {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: 'parameter_id',
        type: 'varchar'
    })
    code: string;

    @Column({
        name: 'name',
        type: 'varchar'
    })
    name: string;

    @Column({
        name: 'alias_code',
        type: 'varchar'
    })
    aliasCode: string;
}
