import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Box, Grid, IconButton, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import "./App/App.css";
import { border, borderColor, flexbox, height, Stack } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import MyCar from "./Car/Car";
import { useDispatch, useSelector } from "react-redux";



const ToolbarJose = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));




const MyBar = ({ setShowMyCar }: { setShowMyCar: (param: number) => void }) => {
  const navigate = useNavigate();
  const [bar, setBar] = useState(0);

  return (
    <AppBar position="static">
      <ToolbarJose>
        <Stack direction="row" spacing={2}>
          
          <Button
            sx={{ border: 1, borderColor: "White" }}
            size="small"
            color="inherit"
            onClick={() => {
              navigate("/ProductList");
            }}
          >
            <div className="test"> Product List</div>
          </Button>

          <Button
            sx={{ border: 1, borderColor: "White" }}
            size="small"
            color="inherit"
            onClick={() => {
              navigate("/Categories");
            }}
          >
            <div className="test"> Categories</div>
          </Button>
          <Button
            sx={{ border: 1, borderColor: "White" }}
            size="small"
            color="inherit"
            onClick={() => {
              navigate("/AddNewProduct");
            }}
          >
            <div className="test"> Add to my Car</div>
          </Button>
        </Stack>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{
            ":hover": { backgroundColor: "blue" },
            border: 1,
            borderColor: "My Car",
          }}
          onClick={() => {
            navigate("/MyCar");
          }}
          onMouseOver={() => {
            setShowMyCar(1);
          }}
          onMouseOut={() => {
            setShowMyCar(0);
          }}
        >
          <div className="test"> Add to </div> <ShoppingCart />
        </IconButton>
      </ToolbarJose>
    </AppBar>
  );
};
export default MyBar;
