import React from "react";
import "./style.scss";
import users from "../../resource/user.json";
import DashboardItem from "../../components/DashboardItem";
import briefcase from "../../resource/briefcase.svg";
import decision from "../../resource/decision.svg";
import loan from "../../resource/loan.svg";
import savings from "../../resource/savings.svg";
import karma from "../../resource/karma.svg";
import white from "../../resource/white.svg";
import request from "../../resource/request.svg";
import guarantor from "../../resource/guarantor.svg";
import dashboard from "../../resource/dashboard.svg";
import savings1 from "../../resource/savings-1.svg";
import coins from "../../resource/coins.svg";
import transactions from "../../resource/transactions.svg";
import service from "../../resource/service.svg";
import services from "../../resource/services.svg";
import scroll from "../../resource/scroll.svg";
import report from "../../resource/report.svg";
import clipboard from "../../resource/clipboard.svg";
import badge from "../../resource/badge.svg";
import slider from "../../resource/slider.svg";
import FilterItem from "../../components/FilterItem/Index";
import FilterRow from "../../components/FilterRow";
import Card from "../../components/Card";
import userStatus from "../../resource/active-status.svg";
import activeStatus from "../../resource/card-active.svg";
import loanCard from "../../resource/card-load.svg";
import savingCard from "../../resource/card-saving.svg";

export default function User() {
  const customer = [
    { title: "Users", img: briefcase },
    { title: "Guarantors", img: guarantor },
    { title: "Loans", img: loan },
    { title: "Decision Models", img: decision },
    { title: "Savings", img: savings },
    { title: "Loan Requests", img: request },
    { title: "Whitelist", img: white },
    { title: "Karma", img: karma },
  ];
  const business = [
    { title: "Organization", img: briefcase },
    { title: "Loan Products", img: request },
    { title: "Saving Products", img: savings1 },
    { title: "Fee and Charges", img: coins },
    { title: "Transactions", img: transactions },
    { title: "Service Account", img: service },
    { title: "Services", img: services },
    { title: "Settlements ", img: scroll },
    { title: "Reports", img: report },
  ];
  const settings = [
    { title: "Preferences", img: slider },
    { title: "Fees and Prices", img: badge },
    { title: "Audit Logs", img: clipboard },
  ];
  const filterDetail = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
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

  return (
    <div className="dashboard">
      <div className="dashboard-control">
        <DashboardItem
          item={{ title: "Switch Organization", img: briefcase }}
        />
        <div className="customer">
          <DashboardItem item={{ title: "Dashboard", img: dashboard }} />

          <p>CUSTOMERS</p>
          {customer.map((item) => (
            <DashboardItem item={item} />
          ))}
        </div>
        <div className="business">
          <p>BUSINESS</p>
          {business.map((item) => (
            <DashboardItem item={item} />
          ))}
        </div>
        <div className="setting">
          <p>SETTINGS</p>
          {settings.map((item) => (
            <DashboardItem item={item} />
          ))}
        </div>
      </div>
      <div className="dashboard-info">
        <h2>Users</h2>
        <div className="card-holder">
          {cardHolderData.map((item) => {
            return <Card item={item} />;
          })}
        </div>

        <div className="table">
          <div className="new">
            {filterDetail.map((item) => (
              <FilterItem title={item} />
            ))}
          </div>
          <div className="second">
            {users.map((item) => (
              <FilterRow item={item} />
            ))}
          </div>
        </div>
        <div className="range"></div>
      </div>
    </div>
  );
}
