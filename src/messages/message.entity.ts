import { Column, Entity, ObjectIdColumn } from "typeorm";


@Entity()
export class Message {
    @ObjectIdColumn()
    id: number
    @Column()
    content: string
    @Column()
    status: string
    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    date: Date
}