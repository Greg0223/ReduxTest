import { useEffect, useState } from "react";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { removeProductFromMyCar, selectProduct } from "./carSlice";
import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const ItemJosmer = styled("div")`
  display: flex;
  justify-content: space-between;
`
const ItemJose = styled("div")`
  margin:10px;
  display: flex;
  width: 10px
  
`

export default function MyCar() {
  const dispatch = useDispatch();
  const prods = useSelector(selectProduct);
  return (
    <Box sx={{ minWidth: 275, margin: "1px", fontSize: "100px" }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, textAlign: "center" }}
              color="text.primary"
              gutterBottom
            >
              <Typography variant="h5" component="div">
                Products in my Cart
              </Typography>

              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {prods.map((value) => (
                  <ItemJosmer className="Josmernoquiereusarenlinea">
                    <Box>
                      {value.quant}
                      <span> </span>
                      {value.mytitle}
                      <span> </span>
                      {value.price}
                    </Box>
                    <ItemJose>
                    <Button
                      variant="outlined"
                      sx={{maxwidth:"1px"}}
                      
                      onClick={() => {
                        dispatch(removeProductFromMyCar(value));
                      }}
                    >  </Button>
                    </ItemJose>
                    
                  </ItemJosmer>
                ))}
              </List>
            </Typography>
            <Typography
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h5" component="div">
                total
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {prods.reduce(
                  (totalPrice, curr) => totalPrice + curr.price * curr.quant,
                  0
                )}
              </Typography>
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button size="small"> go to pay</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
