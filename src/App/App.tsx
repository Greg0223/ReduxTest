import { useState } from "react";
import "./App.css";
import { Grid, Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyBanner from "../MyBanner";
import MyBar from "../MyBar";
import ProductList from "../ProductList";
import AddNewProduct from "../AddNewProduct";
import MyCategories from "../Categories";
import MyCar from "../Car/Car";

function App() {
  const [showMyCar, setShowMyCar] = useState<number>(0);

  return (
    <BrowserRouter>
      <MyBanner />
      <MyBar setShowMyCar={setShowMyCar} />

    
        <Box sx={{ display: "flex", position: "relative", justifyContent:"center" }}>
          <Routes>
            <Route path="/ProductList" element={<ProductList />} />
            <Route path="/Categories" element={<MyCategories />} />
            <Route path="/AddNewProduct" element={<AddNewProduct />} />
            <Route path="/MyCar" element={<MyCar />} />
            <Route
              path="/Categories/ProductList/:category"
              element={<ProductList />}
            />
          </Routes>
          {showMyCar === 1 ? (
            <Box
              sx={{
                right:"0",
                position: "absolute",
                
              }}
            >
              <MyCar />
            </Box>
          ) : (
            <></>
          )}
          
        </Box>
      
    </BrowserRouter>
  );
}

export default App;
