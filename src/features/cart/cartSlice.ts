import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ICardWithQuantity } from '../../types/types'
import type { RootState } from '../../store/store'


// Define a type for the slice state
interface CartItem {
  items: ICardWithQuantity[]
}

// Define the initial state using that type
const initialState: CartItem = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<ICardWithQuantity, 'quantity'>>) => {
      const productId = action.payload.id;
      const existingItem = state.items.find(item => item.id === productId);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ 
          ...action.payload, 
          quantity: 1 
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<{id:number}>) => {
      const cardId = action.payload.id
      state.items = state.items.filter(({id}) => id !== cardId)
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const productId = action.payload.id;
      const existingItem = state.items.find(item => item.id === productId);
      
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    
    decrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const productId = action.payload.id;
      const existingItem = state.items.find(item => item.id === productId);
      
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== productId);
        }
      }
    },
    
    setQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        if (quantity > 0) {
          existingItem.quantity = quantity;
        } else {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
    removeAllFromCart: (state) => {
      state.items = []
    },
  },
})

export const selectIsInCart = (state: RootState, productId: number) => {
  return state.cart.items.some(item => item.id === productId);
};

export const selectCartItem = (state: RootState, productId: number) => {
  return state.cart.items.find(item => item.id === productId);
};

export const selectQuantity = (state: RootState, productId: number) => {
  const item = state.cart.items.find(item => item.id === productId);
  return item ? item.quantity : 0;
};

export const selectTotalItems = (state: RootState) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const selectTotalPrice = (state: RootState) => {
  return state.cart.items.reduce((total, item) => 
    total + (item.price * item.quantity), 0
  ).toFixed(2);
};

export const { addToCart, removeFromCart, decrementQuantity, incrementQuantity, setQuantity, removeAllFromCart } = cartSlice.actions

export const cartReducer =  cartSlice.reducer