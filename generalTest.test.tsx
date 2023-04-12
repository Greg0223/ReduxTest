/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import MyCar from "./src/Car/Car";
import { Provider } from "react-redux";
import AddNewProductToMyCar from "./src/Car/carSlice";
import { configureStore } from "@reduxjs/toolkit";
import { describe } from "@jest/globals";
import { useSelector, useDispatch } from "react-redux";
import { removeProductFromMyCar, selectProduct } from "./src/Car/carSlice";

const prods = useSelector(selectProduct);

const store = configureStore({
  reducer: {
    nextProduct: AddNewProductToMyCar,
  },
  preloadedState: {
    nextProduct: [
      {
        mytitle: "string",
        price: 1,
        quant: 1,
      },
      {
        mytitle: "string2",
        price: 2,
        quant: 2,
      }
    ],
  },
});

describe('Car Tests', () => {
  test("renders Category Button", () => {

    render(
      <Provider store={store}>
        <MyCar />
      </Provider>
    );
    const btnEl = screen.getAllByText(/string2/i);
    console.log(btnEl);
    screen.debug()
  });  
});


