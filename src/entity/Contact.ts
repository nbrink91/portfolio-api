import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export default class Contact {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    message: string;
}