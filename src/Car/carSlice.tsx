import { PlaylistAddOutlined } from "@mui/icons-material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface Jose {
  mytitle: string;
  price: number;
  quant: number;
}
const addNewProductToMyCar = createSlice({
  name: "productListCounter",
  initialState: [] as Jose[],

  reducers: {
    addProductToMyCar: (state, action) => {
      if (state.some((value) => value.mytitle === action.payload.mytitle)) {
        const position = state.findIndex(
          (findMe) => findMe.mytitle === action.payload.mytitle
        );
        
        state[position] = {
          ...state[position],
          quant: state[position].quant + 1,
        };
      } else {
        const payloadModify = { ...action.payload, quant: 1 };

        state.push(payloadModify);
      }
      return state;
    },

    removeProductFromMyCar: (state, action) => {
      const position = state.findIndex(
        (findMe) => findMe.mytitle === action.payload.mytitle
      )
        
      if (state[position].quant > 1) {
        
        state[position] = {
          ...state[position],
          quant: state[position].quant - 1,
        };
      } else {
        state.splice(position,1)
      }
      return state;
    },
  },
});

export default addNewProductToMyCar.reducer;

export const { addProductToMyCar, removeProductFromMyCar } = addNewProductToMyCar.actions;


export const selectProduct = (state:RootState) => state.nextProduct;

