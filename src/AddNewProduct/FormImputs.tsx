import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { SubmitType } from "../AddNewProduct";

export default function InputAdornments({
  propTitle,
  propDescription,
  propPrice,
  propStock,
  propSet,
}: {
  propTitle: string;
  propDescription: string;
  propPrice?: SubmitType["price"];
  propStock?: SubmitType["stock"];
  propSet: (
    paramObj: SubmitType | ((submitType: SubmitType) => SubmitType)
  ) => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <TextField
        label="Title"
        id="outlined-start-adornment"
        sx={{ m: 1, width: 150, backgroundColor: "white" }}
        size="small"
        onChange={(event) => {
          propSet((oldState) => {
            return {
              title: event.target.value,
              description: propDescription,
              price: propPrice,
              stock: propStock,
              category: oldState.category,
              images: oldState.images
            };
          });
        }}
        value={propTitle}
      />
      <TextField
        label="Description"
        id="outlined-start-adornment"
        sx={{ m: 1, width: 150, backgroundColor: "white" }}
        size="small"
        onChange={(event) => {
          propSet((oldState) => {
            return {
              title: propTitle,
              description: event.target.value,
              price: propPrice,
              stock: propStock,
              category: oldState.category,
              images: oldState.images
            };
          });
        }}
        value={propDescription}
      />
      <TextField
        label="$Price"
        id="outlined-start-adornment"
        sx={{ m: 1, width: 150, backgroundColor: "white" }}
        size="small"
        onChange={(event) => {
          propSet((oldState) => {
            return {
              title: propTitle,
              description: propDescription,
              price: +event.target.value,
              stock: propStock,
              category: oldState.category,
              images: oldState.images
            };
          });
        }}
        value={propPrice}
        type="number"
      />
      <TextField
        label="Stock"
        id="outlined-start-adornment"
        sx={{ m: 1, width: 150, backgroundColor: "white" }}
        size="small"
        onChange={(event) => {
          propSet((oldState) => {
            return {
              title: propTitle,
              description: propDescription,
              price: propPrice,
              stock: +event.target.value,
              category: oldState.category,
              images: oldState.images
            };
          });
        }}
        value={propStock}
        type="number"     />
    </Box>
  );
}
