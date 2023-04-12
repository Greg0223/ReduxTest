import { Store } from "@mui/icons-material";
import { configureStore } from "@reduxjs/toolkit";
import AddNewProduct from "./AddNewProduct";
import addProductSlice from "./Car/carSlice";
import addNewProductToMyCar from "./Car/carSlice";

const store = configureStore({
  reducer: {
    nextProduct: addNewProductToMyCar,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
