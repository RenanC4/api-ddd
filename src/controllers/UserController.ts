import {Request, Response} from 'express'
import { BaseController } from '../core/BaseController';
import { CreateUserDTO } from './UserUseCase/CreateUserDTO';
import { CreateUserUseCase } from './UserUseCase/CreateUserUserCase';
import { UpdateUserUseCase } from './UpdateUserUseCase/UpdateUserUserCase';

export class UserController extends BaseController{
	private userUseCase: CreateUserUseCase
	private updateUserUseCase: UpdateUserUseCase

	constructor(userUseCase: CreateUserUseCase, updateUserUseCase: UpdateUserUseCase) {
		super()
		this.userUseCase = userUseCase;
		this.updateUserUseCase = updateUserUseCase;
	}

	protected async executeImpl(req: Request, res: Response) : Promise<void | any>{
		const userInformation: CreateUserDTO = req.body as CreateUserDTO
		
		try {

			if (!userInformation.name) {
				return this.fail(res, 'no name informed')
			}

			 await this.userUseCase.execute(userInformation)

			this.created(res)
			
		} catch (error) {
			return this.fail(res, error.toString())
		}
	}

	public async executeAnotherFunction(req: Request, res: Response) : Promise<void | any>{
		const userInformation: CreateUserDTO = req.body as CreateUserDTO
		
		try {

			if (!userInformation.profession) {
				return this.fail(res, 'no profession informed')
			}

			await this.updateUserUseCase.execute(userInformation)

			console.log('another function')

			this.created(res)
			
		} catch (error) {
			return this.fail(res, error.toString())
		}
	}

	
}