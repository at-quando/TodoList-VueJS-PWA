import { Timestamp } from "@google-cloud/firestore"

export class Todos {
  name: string;
  date: Timestamp;
  type: number;
  content: string;

  constructor(data: any) {
    this.name = data.name;
    this.date = data.date;
    this.type = data.type;
    this.content = data.content;
  }
}
