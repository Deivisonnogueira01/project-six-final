import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateDog {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('text')
  name: string;

  @Column('int')
  age: number;
}