export class Task {
  public id?: string;
  public title: string;
  public description?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;

  constructor(title: string, description?: string) {
    this.title = title;
    this.description = description;
  }
}
