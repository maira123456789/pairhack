import React, { useContext, useEffect, useState } from "react";
import { perfumesContext } from "../../context/perfumesContext";
import ProductsCard from "./ProductsCard";
import ErrorIcon from "@mui/icons-material/Error";
import "./ProductList.css";
import { useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Filters from "../Filters/Filters";
import { Pagination } from "antd";
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

  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );


  const [search, setSearch] = useState(
    searchParams.get("q")  ? searchParams.get("q"): ''
  );

  const [brand, setBrand] = useState([])

  // useEffect(() => {
  //   setSearchParams({
  //     q: search,
  //     _page: page,
  //     _limit: limit,
  //     brand: brand
  //   });
  // }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      brand: brand
    });
  }, [ search, page, limit, brand]);

  useEffect(() => {
    getPerfumes();
  }, [searchParams]);
  // useEffect(() => {
  //   setSearchParams({
  //     q: search,
  //     _page: page,
  //     _limit: limit,
  //     brand: brand
  //   });
  //   getPerfumes();
  // }, []);

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
        
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          total={+perfumesTotalCount} 
        />
      </div>
    </div>
  );
};

export default ProductsList;
