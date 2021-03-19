import { Router } from "express";
import { UserController } from './controllers/UserController';
import { CreateUserUseCase } from "./controllers/UserUseCase/CreateUserUserCase";
import { UpdateUserUseCase } from "./controllers/UpdateUserUseCase/UpdateUserUserCase";
import {UserRepository} from './repositories/UserRepository'

const userRepo = new UserRepository()


const updateUserUseCase = new UpdateUserUseCase(userRepo)
const createUserUseCase = new CreateUserUseCase(userRepo)
const userController = new UserController(createUserUseCase, updateUserUseCase)

const router = Router()

router.get('/health', function(req, res) {
  return res.status(200).json({status: 'UP'});
});


router.post('/', (request, response) => userController.execute(request, response))
router.post('/teste', (request, response) => userController.executeAnotherFunction(request, response))

export {router}