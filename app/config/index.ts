export class Config {
  port: number;
  pizzaFile: string;

  constructor() {
    this.port = parseInt(process.env.PORT as string) || 3000;
    this.pizzaFile = process.env.PIZZA_FILE          || "./fixture/pizza.json"
  }

  validate() {
    if (!this.port)      throw "PORT is not integer";
    if (!this.pizzaFile) throw "PIZZA_FILE is not integer";
  }
}
