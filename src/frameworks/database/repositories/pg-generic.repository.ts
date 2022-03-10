import { IGenericRepository } from 'src/core/abstracts';
import { Repository } from 'typeorm';

export class PgGenericRepository<T> implements IGenericRepository<T> {
  public _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  public async findAll(): Promise<T[]> {
    return this._repository.find();
  }
  public async findById(id: string): Promise<T> {
    return this._repository.findOne({ where: { id } });
  }
  public async create(item: T | any): Promise<T> {
    return this._repository.save(item);
  }
  public async update(id: string, item: T | any): Promise<void> {
    this._repository.update(id, item);
  }

  public async delete(id: string): Promise<void> {
    this._repository.delete(id);
  }
}
