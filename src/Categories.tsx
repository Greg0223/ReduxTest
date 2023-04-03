import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useState, useEffect } from "react";
import {
  ButtonBase,
  FormControl,
  FormLabel,
  styled,
  Typography,
} from "@mui/material";
export type TypeResults = {};
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";

const myNewObject: Record<string, string> = {
  smartphones:
    "https://www.greycoder.com/wp-content/uploads/2013/05/phone-android-smartphone.jpg",
  laptops:
    "https://www.technonutty.com/wp-content/uploads/2016/10/lenovo-laptops.jpg",
  fragrances:
    "https://i1.wp.com/seryhumano.com/web/wp-content/uploads/2014/07/Fragancias-copy.jpg",
  skincare:
    "http://ww1.prweb.com/prfiles/2015/04/15/12656329/Face_Care_Range_HR.jpg",
  groceries:
    "https://pcdn.columbian.com/wp-content/uploads/2015/09/426266_Natural_Grocers_47_1.jpg",
  "home-decoration":
    "https://tse4.mm.bing.net/th?id=OIP.yNcBOi0F6LnpZtTkQgHr1AHaHa&pid=Api&P=0",
  furniture:
    "https://i5.walmartimages.com/asr/bc782d49-6632-46fc-ae71-1d598791ad73.d11197b29d48a3035c74056dd0e5ca9b.jpeg",
  tops: "https://tse3.mm.bing.net/th?id=OIP.5rnmc_6oYHx1tVH6tcvjlQHaJ4&pid=Api&P=0",
  "womens-dresses":
    "https://i.pinimg.com/originals/8c/28/60/8c286026c9446dcfe7bcc1a8c7b67075.jpg",
  "womens-shoes":
    "https://tse1.explicit.bing.net/th?id=OIP.JJ558z7rRn0tnbqq-6hwBQHaHa&pid=Api&P=0",
  "mens-shirts":
    "https://tse3.mm.bing.net/th?id=OIP.AEOtpJ2r0RopfjF3WfWpwgHaIg&pid=Api&P=0",
  "mens-shoes":
    "https://tse2.mm.bing.net/th?id=OIP.4Xv_eI6NtXzMxW6dInXuaQHaHa&pid=Api&P=0",
  "mens-watches":
    "https://tse1.mm.bing.net/th?id=OIP.mMftfnIiZ5skxGM-emCegQHaHa&pid=Api&P=0",
  "womens-watches":
    "https://tse1.mm.bing.net/th?id=OIP.PsYE7_HSW9_mzzqNHr1yVwHaHa&pid=Api&P=0",
  "womens-bags":
    "https://tse2.mm.bing.net/th?id=OIP.2c9ws5b74RJlcqKsWvIE7wHaHa&pid=Api&P=0",
  "womens-jewellery":
    "https://tse3.mm.bing.net/th?id=OIP.X9K8u_R1TuPqDo-eu-Q0vwHaHa&pid=Api&P=0",
  sunglasses:
    "https://tse2.mm.bing.net/th?id=OIP.bhMIsk9FrPzKdjEC4YML5AHaJd&pid=Api&P=0",
  automotive:
    "https://tse3.mm.bing.net/th?id=OIP.8kfFaW_ucPriUQs_pyDAwAHaEi&pid=Api&P=0",
  motorcycle:
    "https://tse4.mm.bing.net/th?id=OIP._2hnrO4ZzyOPX8Al4TG4awHaEK&pid=Api&P=0",
  lighting:
    "https://tse4.mm.bing.net/th?id=OIP.fGnu-esz9up3lS6ejH7CtwHaHa&pid=Api&P=0",
};

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const MyCategories = () => {
  const [myCategories, setMyCategories] = useState<string[]>();
  const navigate = useNavigate();
  const [myCategory, setMyCategory] =useState('')

  useEffect(() => {
    const callCategories = async () => {
      try {
        const myResp = await fetch("https://dummyjson.com/products/Categories");
        const myData = await myResp.json();
        console.log(myResp);
        console.log(myData);
        setMyCategories(myData);
      } catch (myError) {
        console.log(myError);
      }
    };
    callCategories();
  }, []);

  return (
    <div>
      {myCategories?.map((item, index) => (
        <ImageButton
          focusRipple
          key={item}
          style={{
            width: "200px",
          }}
          onClick={() => {
            navigate("/Categories/ProductList/"+item);
            setMyCategory(myCategories[0]);
            <ProductList/>
            

          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${myNewObject[item]})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {item}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </div>
  );
};

export default MyCategories;
