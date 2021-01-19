import { getCustomRepository } from "typeorm";
import User from "../models/User";
import UserRepository from "../repositories/userRepository";

interface RequestDTO {
    name: string;
    birth_date: Date;
}

class CreateUserService {
    public async execute({ name, birth_date }: RequestDTO): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);
        const user = userRepository.create({ name, birth_date });
        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;