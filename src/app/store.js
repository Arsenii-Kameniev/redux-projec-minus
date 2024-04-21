import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

//import loginReducer from `../Pages/LoginPlace/loginSlice`
import loginReducer from '../Pages/LoginPlace/loginSlice';
import registrationReducer from '../Pages/RegistrationMenu/registrationSlice';
import cardReducer from '../Pages/CardMenu/cardSlice';
import productReducer from '../Pages/ProductMenu/productSlice';
import orderReducer from '../Pages/OrderMenu/orderSlice';
import orderStatusReducer from '../Pages/OrderStatusMenu/orderStatusSlice';
import categoryReducer from '../Pages/CategoryMenu/categorySlice';
import workPlaceReducer from '../Pages/WorkPlace/workPlaceSlice';
import allProductsReducer from './AllProductsMenu/allProductsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    registration: registrationReducer,
    card: cardReducer,
    product: productReducer,
    order: orderReducer,
    orderStatus: orderStatusReducer,
    category: categoryReducer,
    workPlace: workPlaceReducer,
    allProducts: allProductsReducer,
  },
});
