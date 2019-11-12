export class Todo {
  private name: string;
  private date: Date;
  private type: number;
  private content: string;

  constructor(data: any) {
    this.name = data.name;
    this.date = data.date;
    this.type = data.type;
    this.content = data.content;
  }
}
