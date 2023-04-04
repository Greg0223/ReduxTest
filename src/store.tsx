import { Store } from '@mui/icons-material';
import { configureStore } from '@reduxjs/toolkit';
import AddNewProduct from './AddNewProduct';
import addProductSlice from './Car/carSlice';
import  AddNewProductToMyCar  from './Car/carSlice';

 const store = configureStore({
  reducer: {
   
    nextProduct: AddNewProductToMyCar
    

  },
})

export type RootState = ReturnType<typeof store.getState>
;
export default store