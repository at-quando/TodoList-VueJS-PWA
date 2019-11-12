export class Users {
  name: string;
  password: string;
  email: string;
  access_token: string;
  id_token: string;
  picture: string;
  provider: string;

  constructor(data: any) {
    this.name = data.name;
    this.password = data.password;
    this.email = data.email;
    this.access_token = data.access_token;
    this.id_token = data.id_token;
    this.picture = data.picture;
    this.provider = data.provider;
  }
}
