import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import Product from "./Product";

export default function MyPagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const items = props.data;

  const handleChange = (event, page) => {
    setCurrentPage(page);
  };

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = items.slice(firstIndex, lastIndex);
  const npage = Math.ceil(items.length / recordsPerPage);
  const numbers = [...Array(npage).keys()].map((n) => n + 1);

  return (
    <Stack spacing={2}>
      <Product items={records} />
      <Pagination
        className="custom-pagination"
        count={npage}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
