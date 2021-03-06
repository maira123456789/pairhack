import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { brandsContext } from "../../context/brandsContext";
import "./BrandsList.css";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const BrandsList = () => {
  const {
    user: { email },
  } = useAuth();
  const { getBrands, brands, deleteBrand } = useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div className="brands">
      {brands.map((item) => (
        <Card
          sx={{
            margin: 1,
            width: 200,
            height: 200,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardActionArea>
            <CardMedia
            className="card"
              component="img"
              height="140"
              image={item.logo}
              alt="green iguana"
            />
            <CardContent></CardContent>
          </CardActionArea>
          {email === "tarieltairov1@gmail.com" || email === "maira@gmail.com" ? (
            <Button
              style={{ backgroundColor: "peachpuff", color: "black" }}
              onClick={() => deleteBrand(item.id)}
              size="small"
              color="primary"
            >
              <DeleteOutlinedIcon/>
            </Button>
          ) : null}
        </Card>
      ))}
    </div>
  );
};

export default BrandsList;
