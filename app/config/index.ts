class Config {
  port: number;

  constructor() {
    this.port = parseInt(process.env.PORT as string) || 3000;
  }

  validate() {
    if (!this.port) throw "PORT is not integer";
  }
}

export {Config};
