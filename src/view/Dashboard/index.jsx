import React, { useState } from "react";
import "./style.scss";
import Card from "../../components/Card";
import Header from "../../components/Header";
import userStatus from "../../resource/active-status.svg";
import activeStatus from "../../resource/card-active.svg";
import loanCard from "../../resource/card-load.svg";
import savingCard from "../../resource/card-saving.svg";
import Example from "../ShowPagination";
import DashboardControl from "../../components/DashboardControl";

export default function Dashboard() {
  var users = JSON.parse(localStorage.getItem("users"));
  const [control, setControl] = useState(true);
  const showDash = () => {
    setControl(false);
    control.log("erg");
  };
  const hideDash = () => {
    setControl(true);
  };
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
  const allUsers = userFilter().length;
  const activeUsers = userFilter({ status: "active" }).length;
  const loanUsers = userFilter({ accountType: "loan" }).length;
  const savingUsers = userFilter({ accountType: "savings" }).length;

  const cardHolderData = [
    { title: "Users", img: userStatus, number: allUsers, key: 1 },
    { title: "Active Users", img: activeStatus, number: activeUsers, key: 2 },
    { title: "Users with Loans", img: loanCard, number: loanUsers, key: 3 },
    {
      title: "Users with Savings",
      img: savingCard,
      number: savingUsers,
      key: 4,
    },
  ];

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
              return <Card item={item} key={item.key} />;
            })}
          </div>

          <div className="table">
            <div className="second">
              <Example data={userFilter()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
