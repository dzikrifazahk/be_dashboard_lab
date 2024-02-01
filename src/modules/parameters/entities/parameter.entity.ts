import { CommonColumn } from "src/common/column/common-column";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('parameters')
export class ParameterEntity extends CommonColumn {
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

    @Column({
        name: 'type',
        type: 'varchar'
    })
    type: string;
}
