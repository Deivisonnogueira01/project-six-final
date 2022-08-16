import internal from "stream";


@Entity()
export class Cat {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length : 100})
    name: string;

    @Column('int')
    age: number;

}
