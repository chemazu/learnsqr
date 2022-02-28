import React, { useState, useMemo } from "react";
import Pagination from "../../components/Pagination/Pagination";
import "./style.scss";
import FilterRow from "../../components/FilterRow";
import FilterItem from "../../components/FilterItem/Index";

export default function Example(props) {
  const filterDetail = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
  ];
  const { data, openFilter } = props;
  const [PageSize, setPageSize] = useState(25);
  const handleChange = (e) => {
    setPageSize(e.target.value);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, PageSize]);
  return (
    <>
      <div className="row-wrapper">
        <div className="new">
          {filterDetail.map((item) => (
            <FilterItem openFilter={openFilter} title={item} />
          ))}
        </div>
        {currentTableData.map((item) => (
          <FilterRow item={item} />
        ))}
      </div>

      <div className="pagination-holder">
        <div className="showing">
          <p>Showing</p>
          <select name="pageSize" id="pagesize" onChange={handleChange}>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <p>out of {data.length}</p>
        </div>
        <div className="pagination-display-holder">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
}
