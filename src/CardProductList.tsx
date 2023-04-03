import * as React from "react";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import burger1 from "./assets/burguer.jpg";
import burger2 from "./assets/Hamburguesa2.jpg";
import burger3 from "./assets/hamburguesa3.jpg";
import {
  AppBar,
  Box,
  createTheme,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import { BoxProps } from "@mui/material";
import { useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Burguer1 from "./assets/burguer.jpg";
import NewBanner from "./assets/e.jpg";
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
import { ShoppingCart } from "@mui/icons-material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Lizzar from "./assets/Lizzy.jpg";
import { ThemeProvider } from "@emotion/react";

/* Everything we need on the cardproduct= "Title, description, price, disc, rating, stock, brand, category. thumbail, images".*/

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 10,
      align: "justify",
      color: "text.secondary",
      margin: 0,
    },
    subtitle2: {
      fontSize: 10,
      align: "justify",
      color: "text.secondary",
      margin: 0,
    },
    body1: {
      fontSize: 8,
      align: "justify",
      color: "text.secondary",
      margin: 0,
    },
  },
});

const CardProductList = ({
  prop1: title,
  prop2: description,
  prop3: price,
  prop4: discountPercentage,
  prop5: rating,
  prop6: stock,
  prop7: brand,
  prop8: category,
  prop9: image,
}: {
  prop1: string;
  prop2: string;
  prop3: number;
  prop4: number;
  prop5: number;
  prop6: number;
  prop7: string;
  prop8: string;
  prop9: string[];
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((oldState) => oldState < image.length - 1 ? oldState + 1 : 0);
    }, 2000);
    return () =>
      clearInterval(interval);
  }, []);

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 140, m: 1 }}
        image={image[currentImg]}
        title="green iguana"
      />
      <CardContent>
        <ThemeProvider theme={theme}>
          <Typography margin={0} variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1">{description}</Typography>
          <Typography variant="subtitle1">Price: {price}</Typography>
          <Typography variant="subtitle1">
            %-Discount: {discountPercentage}
          </Typography>
          <Typography variant="subtitle1">Rating: {rating}</Typography>
          <Typography variant="subtitle1">Stock: {stock}</Typography>
          <Typography variant="subtitle1">Brand: {brand}</Typography>
          <Typography variant="subtitle1">Categories: {category}</Typography>
        </ThemeProvider>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
};

export default CardProductList;
