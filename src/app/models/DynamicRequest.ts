export class DynamicRequest {
  dbUrl?: string;
  username?: string;
  password?: string;
  statement: string = 'SELECT * FROM table_name';

  public customDB(): void {
    this.dbUrl = 'jdbc:mysql://host.docker.internal:3306/database-name';
    this.username = 'root';
    this.password = 'password';
  }

  public defaultDB(): void{
    this.dbUrl = undefined;
    this.username = undefined;
    this.password = undefined;
  }
}
