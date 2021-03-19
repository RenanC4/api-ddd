import {Request, Response} from 'express'
import { BaseController } from '../../core/BaseController';
import { CreateUserDTO } from './CreateUserDTO';
import { CreateUserUseCase } from './CreateUserUserCase';

export class CreateUserController extends BaseController{
	private userUseCase: CreateUserUseCase

	constructor(userUseCase: CreateUserUseCase) {
		super()
		this.userUseCase = userUseCase;
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
			console.log('another function')

			this.created(res)
			
		} catch (error) {
			return this.fail(res, error.toString())
		}
	}

	
}