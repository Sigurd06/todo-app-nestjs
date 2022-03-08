export abstract class IGenericRepository<T> {
  public abstract findAll(): Promise<T[]>;
  public abstract findById(id: string): Promise<T>;
  public abstract create(item: T | any): Promise<T>;
  public abstract update(id: string, item: T | any): Promise<void>;
  public abstract delete(id: string): Promise<void>;
}
