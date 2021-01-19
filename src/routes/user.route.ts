import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/userRepository';
import CreateUserService from '../services/CreateUserService';

const userRoute = Router();

userRoute.get('/users', async (request, response) => {
    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();

    return response.json(users);
});

userRoute.post('/users', async (request, response) => {
    try {
        const { name, birth_date } = request.body;

        const createUser = new CreateUserService();
        const user = await createUser.execute({
            name,
            birth_date,
        });

        response.status(201).json(user);
    } catch(err) {
        response.status(400).json({ error: err.message });
    }
});

 export default userRoute;