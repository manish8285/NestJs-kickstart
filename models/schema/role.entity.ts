import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { Permission } from './permission.entity';


@Entity("roles")
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column({unique:true})
    value: string;

    @Column()
    description: string;

    @ManyToMany(() => Permission,{
        eager: true
    })
    @JoinTable()
    permissions: Permission[];


}