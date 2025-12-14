import { Logger } from "@nestjs/common";
import { ObjectId } from "mongodb";
import { AfterInsert, AfterLoad, AfterUpdate, BeforeInsert, BeforeRemove, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class User {

    private readonly logger = new Logger(User.name);

    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column({ default: false })
    active: boolean;

    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;

    @BeforeInsert()
    logBeforeInsert() {
        this.logger.log(`Avant insertion d'un user : ${this.email}`);
    }

    @AfterInsert()
    logAfterInsert() {
        this.logger.log(`User inséré : ${this.email}`);
    }

    @AfterUpdate()
    logAfterUpdate() {
        this.logger.log(`User mis à jour : ${this.email}`);
    }

    @BeforeRemove()
    logBeforeRemove() {
        this.logger.log(`Suppression du user : ${this.id}`);
    }

    @AfterLoad()
    logAfterLoad() {
        this.logger.log(`User récupéré : ${this.email}`);
    }
}