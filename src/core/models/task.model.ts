export class Task {
  public readonly id?: string;
  public readonly title: string;
  public readonly completed: boolean;
  public readonly important: boolean;
  public readonly description?: string;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
  public readonly deletedAt?: Date;

  constructor(
    title: string,
    description?: string,
    completed: boolean = false,
    important: boolean = false,
  ) {
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.important = important;
  }
}
