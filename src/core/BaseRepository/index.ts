import {Write, Read} from './interfaces'

import { MongoClient, Db, Collection, InsertOneWriteOpResult } from 'mongodb';


export abstract class BaseRepository<T> implements Write<T>, Read<T> {

	public readonly _collection: Collection;

	constructor() {
		
	}

	async create(item: T): Promise<boolean> {
		console.log('base repository', item)
		const result = 1
		return !!result
	}
	update(id: string, item: T): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
	delete(id: string): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
	find(item: T): Promise<T[]> {
		throw new Error('Method not implemented.');
	}
	findOne(id: string): Promise<T> {
		throw new Error('Method not implemented.');
	}
    
}