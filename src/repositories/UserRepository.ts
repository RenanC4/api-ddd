import {BaseRepository} from '../core/BaseRepository'
import {User} from '../entities/User'

export class UserRepository extends BaseRepository<User> {

	numberOfUsers(): Promise<number> {
		return this._collection.count({})
	}

	getUser(name: string, age: number): Promise<boolean> {
		return this.create({name, age})
	}

}