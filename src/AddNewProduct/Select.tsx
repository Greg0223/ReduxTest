import * as React from "react";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";
import { SubmitType } from "../AddNewProduct";

export default function MySelect({myoption, propSet}:{myoption:string, propSet: (
  paramObj: SubmitType | ((submitType: SubmitType) => SubmitType)
) => void;}) {
  const [options, setOptions] = useState<string[]>();

  useEffect(() => {
    const callCategories = async () => {
      try {
        const myResp = await fetch("https://dummyjson.com/products/Categories");
        const myData = await myResp.json();
        console.log(myResp);
        console.log(myData);
        setOptions(myData);
      } catch (myError) {
        console.log(myError);
      }
    };
    callCategories();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 150, backgroundColor: "white" }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Category
        </InputLabel>
        <Select
          onChange={(event) => {
            propSet((oldState) => {
              return {
                title: oldState.title,
                description: oldState.description,
                price: oldState.price,
                stock: oldState.stock,
                category: event.target.value,
                images: oldState.images,
              };
            });
          }}
          value={myoption}
          
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
                   autoWidth
          label="Relative"
        >
          {options?.map((param) => (
            <MenuItem value={param}>{param}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
