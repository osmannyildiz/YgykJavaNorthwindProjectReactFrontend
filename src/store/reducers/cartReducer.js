import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
	cartItems: [
		/*{ quantity: 1, product: { name: "Çubuk kraker" } }*/
	],
};

export default function cartReducer(state = initialState, { type, payload }) {
	switch (type) {
		case ADD_TO_CART:
			let cartItem = state.cartItems.find((ci) => ci.product.id === payload.id);
			if (cartItem) {
				cartItem.quantity++;
				return { ...state };
			} else {
				const newCartItem = { quantity: 1, product: payload };
				return {
					...state,
					cartItems: [...state.cartItems, newCartItem],
				};
			}

		case REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter((ci) => ci.product.id !== payload.id),
			};

		default:
			return state;
	}
}
