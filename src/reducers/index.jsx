import productReducer from './homeProductSlice';
import UiReducer from './UiReducer';
import cartReducer from './cartSlice';
import homeProductsReducer from './homeProductSlice';
import categoryProductReducer from './getCategoryProductSlice';
import menuCategoryReducer from './getMenuCategorySlice';
import productByCategoryReducer from './getProductByCategorySlice';
import productDetailsReducer from './productDetailSlice';
import showCartReducer from './showCartSlice';
import confirmOrderReducer from './confirmOrderSlice';
import showAddressReducer from './showAddressSlice';
import creteAddressReducer from './createAddressSlice';
import updateAddressReducer from './updateAddressSlice';
import deleteAddressReducer from './deleteAddressSlice';
import getOrderReducer from './getOrderSlice';
import getOrderDetailsReducer from './getOrderDetailsSlice';
import logOutReducer from './logOutSlice';
import registrationReducer from './userRegistrationSlice';
import loginReducer from './userLoginSlice';
import authReducer from './authSlice';

const rootReducer = {
  logOuts: logOutReducer.reducer,
  ui: UiReducer.reducer,
  // category: categoryReducer.reducer,
  product: productReducer.reducer,
  cart: cartReducer.reducer,
  homeProducts: homeProductsReducer.reducer,
  categoryProduct: categoryProductReducer.reducer,
  menuCategory: menuCategoryReducer.reducer,
  productByCat: productByCategoryReducer.reducer,
  productDetails: productDetailsReducer.reducer,
  showCart: showCartReducer.reducer,
  confirmOrder: confirmOrderReducer.reducer,
  addressDetails: showAddressReducer.reducer,
  createAdd: creteAddressReducer.reducer,
  updateAdd: updateAddressReducer.reducer,
  deleteAdd: deleteAddressReducer.reducer,
  getOrderDetails: getOrderReducer.reducer,
  singleOrderDetails: getOrderDetailsReducer.reducer,
  registration: registrationReducer.reducer,
  login: loginReducer.reducer,
  auth: authReducer,
};

export default rootReducer;
