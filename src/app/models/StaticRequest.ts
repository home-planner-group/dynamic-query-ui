export class StaticRequest {
  dbUrl?: string;
  username?: string;
  password?: string;
  fileName: string = '';

  public customDB(): void {
    this.dbUrl = 'jdbc:mysql://host.docker.internal:3306/database-name';
    this.username = 'root';
    this.password = 'password';
  }

  public defaultDB(): void {
    this.dbUrl = undefined;
    this.username = undefined;
    this.password = undefined;
  }
}
