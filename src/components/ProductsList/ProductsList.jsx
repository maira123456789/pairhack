import React, { useContext, useEffect, useState } from "react";
import { perfumesContext } from "../../context/perfumesContext";
import ProductsCard from "./ProductsCard";
import ErrorIcon from "@mui/icons-material/Error";
import "./ProductList.css";
import { useSearchParams } from "react-router-dom";
import { Pagination, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Filters from "../Filters/Filters";
const ProductsList = () => {
  const { perfumes, getPerfumes, perfumesTotalCount } =
    useContext(perfumesContext);
  useEffect(() => {
    getPerfumes();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );

  const [limit, setLimit] = useState(4);

  const pageCount = Math.ceil(perfumesTotalCount / limit);
  console.log(searchParams.get("_limit"));

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [brand,setBrand] = useState([])

  useEffect(() => {
    setSearchParams({
      _page: page,
      _limit: limit,
      q: search,
      brand: brand
      
    });
  }, []);
//   console.log(brand);
  useEffect(() => {
    setSearchParams({
      _page: page,
      _limit: limit,
      q: search,
      brand: brand
    });
  }, [page, limit, search, brand]);
  useEffect(() => {
    getPerfumes();
  }, [searchParams]);

  return (
    <div className="DIV">
        {/* search */}
      <div style={{display:"flex",alignItems:"center"}}>
        <SearchIcon />
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
      {/* filtration */}
      <div>
          <Filters
          brand={brand}
          setBrand={setBrand}
          />
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {perfumes.length > 0 ? (
          perfumes.map((item) => <ProductsCard key={item.id} item={item} />)
        ) : (
          <ErrorIcon />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(event, page) => {
            setPage(page);
          }}
          page={+page}
          pageSize={+limit}
          defaultPage={1}
          count={+pageCount}
          color="warning"
          //   variant="outlined"
        />
      </div>
    </div>
  );
};

export default ProductsList;
