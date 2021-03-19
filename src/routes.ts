import { Router } from "express";
import { CreateUserController } from './controllers/UserUseCase/CreateUserController';
import { CreateUserUseCase } from "./controllers/UserUseCase/CreateUserUserCase";
import {UserRepository} from './repositories/UserRepository'

const userRepo = new UserRepository()

const createUserUseCase = new CreateUserUseCase(userRepo)
const createUserController = new CreateUserController(createUserUseCase)

const router = Router()

router.get('/health', function(req, res) {
  return res.status(200).json({status: 'UP'});
});


router.post('/', (request, response) => createUserController.execute(request, response))
router.post('/teste', (request, response) => createUserController.executeAnotherFunction(request, response))

export {router}