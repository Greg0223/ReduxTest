import * as React from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { removeProductFromMyCar, selectProduct } from "./carSlice";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { BorderColorOutlined } from "@mui/icons-material";

const ItemJosmer = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const ItemJose = styled("div")`
  margin: 10px;
  display: flex;
  width: 10px;
`;

export default function MyCar() {
  const dispatch = useDispatch();
  const prods = useSelector(selectProduct);
  return (
    <Box
      sx={{
        maxWidth: "200px",
        minWidth: "180px",
        backgroundColor: " white",
        borderStyle: "outset",
        marginTop: "8px",
      }}
    >
      <Typography sx={{ textAlign: "center", fontSize: "15" }}>
        Products
      </Typography>
      <Typography>
        {prods.map((value) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "16px",
              marginLeft: "8px",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                marginRight: "5px",
                maxWidth: "120px",
              }}
            >
              ({value.quant})<span> </span>
              {value.mytitle}
            </Typography>
            <Typography
              sx={{ fontSize: "12px", display: "flex", alignItems: "center" }}
            >
              {value.price} $ <span />
              <IconButton aria-label="delete" sx={{}}>
                <DeleteIcon
                  sx={{ fontSize: "15px" }}
                  onClick={() => {
                    dispatch(removeProductFromMyCar(value));
                  }}
                />
              </IconButton>
            </Typography>
          </Box>
        ))}

        <Typography></Typography>
      </Typography>

      <Typography
        sx={{ textAlign: "center", fontSize: "20px", marginTop: "20px" }}
      >
        Total: <span />
        {prods.reduce(
          (totalPrice, curr) => totalPrice + curr.price * curr.quant,
          0
        )}
        $ <span />
      </Typography>
    </Box>
  );
}
