import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'student'})
export class UserEntity{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number;

    @Column({unique:true})
    name:string;

    @Column()
    age:number

    @Column()
    createdAt:Date;

}