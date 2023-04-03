import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function SubmitButon() {
  
  return (
    <Stack direction="row" spacing={2} margin="4px">
      <Button variant="outlined" size="small" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button 
      onClick={()=>{
          
      }} variant="contained" size="small" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}
