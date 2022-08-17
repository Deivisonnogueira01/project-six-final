import {Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class CreateCat {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length : 100})
    name: string;

    @Column('int')
    age: number;

}
