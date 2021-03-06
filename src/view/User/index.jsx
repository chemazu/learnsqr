import React, { useState } from "react";
import "./style.scss";
import Card from "../../components/Card";
import userStatus from "../../resource/active-status.svg";
import activeStatus from "../../resource/card-active.svg";
import loanCard from "../../resource/card-load.svg";
import savingCard from "../../resource/card-saving.svg";
import UserFilterItem from "../../components/UserFilterItem";
import Example from "../ShowPagination";
import DashboardControl from "../../components/DashboardControl";
import Header from "../../components/Header";

export default function User() {
  var users = JSON.parse(localStorage.getItem("users"));
  const [control, setControl] = useState(true);
  const showDash = () => {
    setControl(false);
    control.log("erg");
  };
  const hideDash = () => {
    setControl(true);
  };

  const filterItemDetail = [
    { id: 1, Title: "Organization", slug: "organization" },
    { id: 2, Title: "Username", slug: "username" },
    { id: 3, Title: "Email", slug: "email" },
    { id: 4, Title: "Phone Number", slug: "phone" },
    { id: 5, Title: "Date Joined", slug: "date" },
    { id: 6, Title: "Status", slug: "status" },
  ];

  const userFilter = (a) => {
    return users.filter((item) => {
      for (let i in a) {
        if (item[i] === undefined || item[i] != a[i]) {
          return false;
        }
      }
      return true;
    });
  };

  const [filterObject, setFilterObject] = useState({});
  const [changeObject, setChangeObject] = useState({});
  const [showFilter, setShowFilter] = useState(true);

  const allUsers = userFilter().length;
  const activeUsers = userFilter({ status: "active" }).length;
  const loanUsers = userFilter({ accountType: "loan" }).length;
  const savingUsers = userFilter({ accountType: "savings" }).length;

  const cardHolderData = [
    { title: "Users", img: userStatus, number: allUsers },
    { title: "Active Users", img: activeStatus, number: activeUsers },
    { title: "Users with Loans", img: loanCard, number: loanUsers },
    { title: "Users with Savings", img: savingCard, number: savingUsers },
  ];

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value == "") {
      setChangeObject(delete changeObject[name]);
    } else {
      setChangeObject({ ...changeObject, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterObject(changeObject);
  };

  const handleReset = (e) => {
    window.location.reload(false);
  };
  const closeFilter = () => {
    setShowFilter(false);
  };
  const openFilter = () => {
    setShowFilter(true);
  };

  return (
    <>
      <Header control={showDash} />
      <div className="dashboard">
        <div className="desktop">
          <DashboardControl />
        </div>
        {control ? null : <DashboardControl hideDash={hideDash} />}
        <div className="dashboard-info">
          <h2>Users</h2>
          <div className="card-holder">
            {cardHolderData.map((item) => {
              return <Card item={item} />;
            })}
          </div>
          <div className="filter-holder">
            {showFilter ? (
              <div className="showfilter">
                <p onClick={closeFilter}>Close Filter</p>
                <form onSubmit={handleSubmit}>
                  {filterItemDetail.map((item) => (
                    <UserFilterItem
                      handleChange={handleChange}
                      users={userFilter(filterObject)}
                      onlyUnique={onlyUnique}
                      item={item}
                    />
                  ))}
                  <div className="button-wrapper">
                    <button type="submit" className="white-button">
                      Filter
                    </button>
                    <button onClick={handleReset} className="blue-button">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            ) : null}
          </div>
          <div className="table">
            <div className="second">
              <Example
                data={userFilter(filterObject)}
                openFilter={openFilter}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
