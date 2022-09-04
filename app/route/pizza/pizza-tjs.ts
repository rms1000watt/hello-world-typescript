enum Destination {
  pickup = "pickup",
  delivery = "delivery",
}

enum OrderType {
  phone = "phone",
  website = "website",
}

enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

enum Toppings {
  anchovy = "anchovy",
  bacon = "bacon",
  ham = "ham",
  jalepeno = "jalepeno",
  olive = "olive",
  pepperoni = "pepperoni",
  pineapple = "pineapple",
  sausage = "sausage",
}

export interface Pizza {
  /**
   * @type integer
   * @minimum 0
   * @maximum 999999999
   */
  customerID: number;

  /**
   * @type integer
   * @minimum 0
   * @maximum 999999999
   */
  orderID: number;

  destination: Destination;
  orderType: OrderType;
  size: Size;
  toppings: Toppings[];

  promotion?: string;
}
