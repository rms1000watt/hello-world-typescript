import pizzaJSON from '../fixture/pizza.json';

export class Pizza {
  orderID: number;
  customerID: number;
  toppings: string[];
  size: string;
  orderType: string;
  destination: string;
  promotion: string | undefined;

  constructor(
    orderID: number,
    customerID: number,
    toppings: string[],
    size: string,
    orderType: string,
    destination: string,
    promotion?: string
  ) {
    this.orderID = orderID
    this.customerID = customerID
    this.toppings = toppings
    this.size = size
    this.orderType = orderType
    this.destination = destination
    this.promotion = promotion
  }
}

export function loadPizzas(): Pizza[] {
  const pizzas: Pizza[] = []

  pizzaJSON.forEach(obj => {
    const pizza: Pizza = new Pizza(
      obj.orderID,
      obj.customerID,
      obj.toppings,
      obj.size,
      obj.orderType,
      obj.destination,
      // obj.promotion, // TODO: figure out how to uncomment this
    )

    pizzas.push(pizza)
  })

  return pizzas
}
