import { useState, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import ImgUpload from "./AddNewProduct/ImgUpload";
import MySelect from "./AddNewProduct/Select";
import InputAdornments from "./AddNewProduct/FormImputs";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
export type SubmitType = {
  title: string;
  description: string;
  price: number | undefined | "";
  stock?: number | "";
  category: string;
  images: string;
};

const AddNewProduct = () => {
  const [submitForm, setSubmitForm] = useState<SubmitType>({
    title: "",
    description: "",
    price: undefined,
    stock: undefined,
    category: "",
    images: "",
  });

  useEffect(() => {
    console.log(submitForm);
  }, [submitForm]);
  return (
    <Box
      sx={{
        padding: 1.6,
        maxWidth: 250,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "white",
        alignSelf: "center",
        margin: "10px",
      }}
    >
      Please fill the next data to continue
      <InputAdornments
        propTitle={submitForm.title}
        propDescription={submitForm.description}
        propPrice={submitForm.price}
        propStock={submitForm.stock}
        propSet={setSubmitForm}
      />
      <MySelect myoption={submitForm.category} propSet={setSubmitForm} />
      <ImgUpload propImg={submitForm.images} propSet={setSubmitForm} />
      <Stack direction="row" spacing={2} margin="4px">
        <Button
          variant="outlined"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => {
            setSubmitForm((oldState) => {
              return {
                title: "",
                description: "",
                price: "",
                stock: "",
                category: "",
                images: "",
              };
            });
          }}
        >
          Delete
        </Button>
        <Button
          onClick={() => {
            const newObject = {
              ...submitForm,
              images: submitForm.images.split("\n").filter((filterImages) => {
                return filterImages!=="";
              }),
            };
            fetch("https://dummyjson.com/products/add", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newObject),
            })
              .then((res) => res.json())
              .then(console.log);
          }}
          variant="contained"
          size="small"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
};

export default AddNewProduct;
