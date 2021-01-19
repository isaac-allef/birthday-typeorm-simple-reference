import { Router } from 'express';

const userRoute = Router();

interface UserCreate {
    name: string,
    age: number,
}

userRoute.get('/users', (request, response) => {
    const user: UserCreate = { name: 'Isaac', age: 25 };
    response.json(user)
})

 export default userRoute;