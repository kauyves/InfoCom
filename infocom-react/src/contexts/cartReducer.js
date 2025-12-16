const initialState = {
  items: [], // [{ id, product, quantity }]
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity } = action.payload;

      const existing = state.items.find((item) => item.id === product.id);

      if (!existing) {
        // se não existe, adiciona novo item
        return {
          ...state,
          items: [...state.items, { id: product.id, product, quantity }],
        };
      }

      // se já existe, apenas incrementa a quantidade
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      };
    }

    case "REMOVE_ITEM": {
      const id = action.payload;
      // remove o item pelo id
      return {
        ...state,
        items: state.items.filter((item) => item.id !== id),
      };
    }

    case "UPDATE_QTY": {
      const { id, quantity } = action.payload;

      // se quantidade <= 0, remove o item
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== id),
        };
      }

      // atualiza a quantidade do item
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    }

    // se a ação for limpar o carrinho, retorna o estado inicial (vazio)
    case "CLEAR":
      return initialState;

    // qualquer outra ação, retorna o estado atual
    default:
      return state;
  }
}

export { initialState, cartReducer };