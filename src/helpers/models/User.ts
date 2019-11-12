export class User {
  private name: string;
  private password: string;
  private email: string;
  private access_token: string;
  private id_token: string;
  private picture: string;
  private provider: string;

  constructor(data: any) {
    const profile = data.additionalUserInfo.profile;
    this.name = profile.name;
    this.password = '';
    this.email = profile.email;
    this.picture = profile.picture;
    this.access_token = data.credential.accessToken;
    this.id_token = data.credential.idToken;
    this.provider = data.credential.providerId;
  }
}
