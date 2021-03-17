import { response, Response } from 'express';
import {BaseUseCase} from '../../core/BaseUseCase'
import { UserRepository } from '../../repositories/UserRepository';
import { CreateUserDTO } from './CreateUserDTO';

export class CreateUserUseCase implements BaseUseCase<CreateUserDTO, Promise<Response>> {
	private userRepo: UserRepository

	constructor(userRepo: UserRepository){
		this.userRepo = userRepo
	}

	async execute(req: CreateUserDTO) : Promise <Response> {
		const {name, age} = req

		try {
				const response = await this.userRepo.getUser(name, age)
				console.log(response)
		} catch (error) {	
				return error
		}
		return 
	}

}