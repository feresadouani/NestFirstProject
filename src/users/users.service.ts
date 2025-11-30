import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { ObjectId } from "mongodb";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }
    async create(email: string, password: string): Promise<User> {
        try {
            const user = this.userRepository.create({ email, password, active: false })
            await this.userRepository.save(user);
            return user;
        } catch (error) {
            console.error("Erreur lors de la création de l'utilisateur: ", error);
            throw new InternalServerErrorException("Erreur lors de la création de l'utilisateur");
        }

    }

    async findAll(): Promise<User[]> {
        try {
            const list = await this.userRepository.find();
            if (list.length === 0) {
                throw new NotFoundException("Aucun utilisateur trouvé");
            }
            return list;
        } catch (error) {
            throw new InternalServerErrorException("Erreur de serveur");
        }
    }

    async findOnebyId(id: ObjectId): Promise<User> {
        try {
            const user = await this.userRepository.findOneBy({ id });
            if (!user) {
                throw new NotFoundException("Utilisateur non trouvé");
            }
            return user;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException("Erreur de serveur");
        }
    }
    async findOnebyEmail(email: string): Promise<User> {
        try {
            const user = await this.userRepository.findOneBy({ email });
            if (!user) {
                throw new NotFoundException("Utilisateur non trouvé");
            }
            return user;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException("Erreur de serveur");
        }
    }
    async findActive(): Promise<User[]> {
        try {
            const activeUsers = await this.userRepository.findBy({ active: true });
            if (activeUsers.length === 0) {
                throw new NotFoundException("Aucun utilisateur actif trouvé");
            }
            return activeUsers;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException("Erreur de serveur");
        }
    }
    async update(id: ObjectId, data: Partial<User>): Promise<User> {
        try {
            await this.userRepository.update(id, data);
            const updatedUser = await this.userRepository.findOneBy({ id });
            if (!updatedUser) {
                throw new NotFoundException("Utilisateur non trouvé après la mise à jour");
            }
            return updatedUser;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException("Erreur lors de la mise à jour de l'utilisateur");
        }
    }

    async remove(id: ObjectId): Promise<void> {
        try {
            const result = await this.userRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException("Utilisateur non trouvé pour la suppression");
            }
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException("Erreur lors de la suppression de l'utilisateur");
        }
    }

    async activateAccount(email: string, password: string): Promise<User> {
        try {
            const user = await this.findOnebyEmail(email);
            if (user.password !== password) {
                throw new NotFoundException("Mot de passe incorrect");
            }
            user.active = true;
            await this.userRepository.save(user);
            return user;
        } catch (error) {CDATASection
            console.error(error);
            throw new InternalServerErrorException("Erreur lors de l'activation du compte utilisateur");
        }
    }
}