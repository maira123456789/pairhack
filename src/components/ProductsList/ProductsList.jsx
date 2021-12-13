import React, { useContext, useEffect, useState } from "react";
import { perfumesContext } from "../../context/perfumesContext";
import ProductsCard from "./ProductsCard";
import ErrorIcon from "@mui/icons-material/Error";
import "./ProductList.css";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";
const ProductsList = () => {
  const { perfumes, getPerfumes, perfumesTotalCount } = useContext(perfumesContext);
  useEffect(() => {
    getPerfumes();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );

  const [limit, setLimit] = useState(
    4
  );

  const pageCount = Math.ceil(perfumesTotalCount/limit)
  console.log(searchParams.get('_limit'))

  useEffect(() => {
    setSearchParams({
      _page: page,
      _limit: limit,
    });
  }, []);

  useEffect(() => {
    setSearchParams({
      _page: page,
      _limit: limit,
    });
  }, [page, limit]);
  useEffect(() => {
    getPerfumes();
  }, [searchParams]);

  return (
    <div className="DIV">
      <div style={{ width: "100%", height: "100px" }}></div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {perfumes.length > 0 ? (
          perfumes.map((item) => <ProductsCard key={item.id} item={item} />)
        ) : (
          <ErrorIcon />
        )}
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
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
