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
import { Margin } from "@mui/icons-material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { textAlign } from "@mui/system";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14, textAlign:"center"}} color="text.primary" gutterBottom>
      <Typography variant="h5" component="div">
          Products in my Car
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {[1, 2, 3].map((value) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={
                <IconButton aria-label="comment">
                  <Checkbox size="small" />
                </IconButton>
              }
            >
              <ListItemText primary={`Line item ${value}`} />
            </ListItem>
          ))}
        </List>
      </Typography>
      <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="div">
          total
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          $$$$$$
        </Typography>
      </Typography>
    </CardContent>
    <CardActions sx={{display:"flex", justifyContent:"space-around"}}>
      <Button size="small"> go to pay</Button>
    </CardActions>
  </React.Fragment>
);

export default function MyCar() {
     
  return (
    
    <Box sx={{ minWidth: 275, margin: "1px"   }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
