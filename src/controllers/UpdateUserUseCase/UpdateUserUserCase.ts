import { response, Response } from 'express';
import {BaseUseCase} from '../../core/BaseUseCase'
import { UserRepository } from '../../repositories/UserRepository';
import { UpdateUserDTO } from './UpdateUserDTO';

export class UpdateUserUseCase implements BaseUseCase<UpdateUserDTO, Promise<Response>> {
	private userRepo: UserRepository

	constructor(userRepo: UserRepository){
		this.userRepo = userRepo
	}

	async execute(req: UpdateUserDTO) : Promise <Response> {
		const {name, profession} = req

		try {
				//const response = await this.userRepo.getUser(name, profession)
				console.log('update user')
				return 
		} catch (error) {	
				return error
		}
		 
	}

}