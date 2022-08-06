export class Config {
  port: number;

  constructor() {
    this.port = parseInt(process.env.PORT as string) || 3000;
  }
}

