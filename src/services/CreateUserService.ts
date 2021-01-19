import { getCustomRepository } from "typeorm";
import User from "../models/User";
import UserRepository from "../repositories/userRepository";

interface RequestDTO {
    name: string;
    birth_date: Date;
}

class CreateUserService {
    public async execute({ name, birth_date }: RequestDTO): Promise<User> {
        const birth_date_year = birth_date.getFullYear();
        if (birth_date_year < 1920) {
            throw Error('This birth date is from someone very very old');
        }

        const userRepository = getCustomRepository(UserRepository);
        const user = userRepository.create({ name, birth_date });
        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;