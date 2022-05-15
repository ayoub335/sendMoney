import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Timer {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'periode_id',
    })
    id: number;
    @Column()
    periode:string
}