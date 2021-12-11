import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { brandsContext } from "../../context/brandsContext";

const BrandsList = () => {
  const { getBrands, brands } = useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);
  return (
      <>
    <div style={{width:"100%", height:"100px"}}></div>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {brands.map((item) => (
          <Card sx={{ maxWidth: 205, margin: 3, flexWrap: "wrap" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.logo}
                alt="green iguana"
              />
              <CardContent></CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      </>
  );
};

export default BrandsList;
