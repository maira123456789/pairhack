import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { brandsContext } from "../../context/brandsContext";

const Filters = ({ brand, setBrand }) => {
  const { getBrands, brands } = useContext(brandsContext);

  useEffect(() => {
    getBrands();
  }, []);


  return (
    <div style={{ marginTop: "20px" }}>
      <FormControl style={{width: '200px',backgroundColor:"lightyellow"}}>
        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brand}
           label="Brands"
          onChange={(e) => setBrand(e.target.value)}
        >
          {brands ? (
            brands.map((item) => (
              <MenuItem value={item.brand} key={item.id}>
                {item.brand}
              </MenuItem>
            ))
          ) : (
            <h1>Loading</h1>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;
