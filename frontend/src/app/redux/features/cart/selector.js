const selectCartModule = (state) => state.cart;

export const selectProductAmount = (state, id) =>
  selectCartModule(state)[id] || 0;

export const selectAllProductAmount = (state) =>
  Object.keys(selectCartModule(state)).reduce(
    (acc, key) => acc + selectCartModule(state)[key],
    0
  );

  export const selectFilmsIds = (state) => Object.keys(selectCartModule(state));