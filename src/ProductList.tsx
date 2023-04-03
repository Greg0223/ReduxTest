import { useEffect, useState } from "react";
import * as React from "react";
import { AppBar, Box, Grid, IconButton, Toolbar } from "@mui/material";
import "./App.css";
import {
  border,
  borderColor,
  flexbox,
  height,
  margin,
  Stack,
} from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { Category, ShoppingCart } from "@mui/icons-material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardProductList from "./CardProductList";
import { useParams } from "react-router-dom";
export type TypeResults = {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductList = () => {
  const [myProduct, setMyProduct] = useState<{ products: TypeResults[] }>();
  const {category} = useParams();
  console.log(category)

  useEffect(() => {
    const callProduct = async () => {
      try {
        const myResp = await fetch(
          "https://dummyjson.com/products/?limit=30&skip=10"
        );
        const myData = await myResp.json();
        console.log(myResp);
        console.log(myData);
        setMyProduct(myData);
      } catch (myError) {
        console.log(myError);
      }
    };
    callProduct();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, margin: 1 }}>
      <Grid container>
        {myProduct?.products
          .filter((currentProduct) => {
            return category ? currentProduct.category == category: true;
          })
          .map((product, index) => (
            <Grid item xs={2} sm={3} md={2} lg={2} key={index}>
              <CardProductList
                prop1={product.title}
                prop2={product.description}
                prop3={product.price}
                prop4={product.discountPercentage}
                prop5={product.rating}
                prop6={product.stock}
                prop7={product.brand}
                prop8={product.category}
                prop9={product.images}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
