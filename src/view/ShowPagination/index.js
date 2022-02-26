import React, { useState, useMemo } from "react";
import Pagination from "../../components/Pagination/Pagination";
import "./style.scss";
import FilterRow from "../../components/FilterRow";

export default function Example(props) {
  const data = props.data
  console.log(data)
  const [PageSize, setPageSize] = useState(25);
  const handleChange = (e) => {
    setPageSize(e.target.value);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
console.log(currentTableData)
  return (
    <>
      {currentTableData.map((item) => (
        <FilterRow item={item} />
      ))}
      <div className="pagination-holder">
        <div className="showing">
          <p>Showing</p>
          <select name="pageSize" id="pagesize" onChange={handleChange}>
            <option value={100}>100</option>
            <option value={50}>50</option>
            <option value={25}>25</option>
            <option value={10}>10</option>
          </select>
          <p>out of {data.length}</p>
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
}
