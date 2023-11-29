export const ROUTES = {
  static: {
    home: "/",
    cart: "/cart",
  },
  dynamic: {
    productDetails: (id: string | number) => `/product/${id}`,
  },
};
