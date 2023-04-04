import * as React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import burger1 from "./assets/burguer.jpg";
import burger2 from "./assets/Hamburguesa2.jpg";
import burger3 from "./assets/hamburguesa3.jpg";
import { AppBar, Box, Grid, IconButton, Toolbar } from "@mui/material";
import { BoxProps } from "@mui/material";
import { useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Burguer1 from "./assets/burguer.jpg";
import NewBanner from "./assets/1.jpg";
import "./App/App.css";
import { border, borderColor, flexbox, height, Stack } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCart } from "@mui/icons-material";
import MyBar from "./MyBar";

const ToolbarJose  = styled(Toolbar)(()=>(
  {display:"flex", justifyContent:"space-between"}
))

const MyBanner = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                
                display: "flex",
                borderColor: "darkblue",
                backgroundColor: "lightviolet",
                justifyContent: "space-around",
                "&:hover": {
                  backgroundColor: "lightblue",
                  justifyContent: "space-around",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >

              <img src={NewBanner} alt="MDN"  width={"100%"} height={140}/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default MyBanner;
