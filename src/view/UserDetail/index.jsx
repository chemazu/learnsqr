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
 
import userStatus from "../../resource/active-status.svg";
import activeStatus from "../../resource/card-active.svg";
import loanCard from "../../resource/card-load.svg";
import savingCard from "../../resource/card-saving.svg";
import arrow from "../../resource/arrow.svg";
import avatar from "../../resource/avatar.svg";
import logout from "../../resource/logout.svg"

import { Link } from "react-router-dom";
import Personal from "../../components/Personal";

export default function UserDetail() {
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
        <div className="logout">
        <DashboardItem
          item={{ title: "", img: logout }}
        />
        <p>Logout</p>
        </div>
      </div>
      <div className="userdetail-info">
      <Link to="/user">
      <div className="back">
          <img src={arrow} />
          <p>Back to Users</p>
        </div>
      </Link>
        <div className="user-detail">
          <h2>User Detail</h2>
          <div className="button-wrapper">
            <button className="first">BLACKLIST USER</button>
            <button className="second"> ACTIVATE USER</button>
          </div>
        </div>
        <div className="user-block">
          <div className="top">
            <img src={avatar} alt="avatar" />
            <div style={{ borderRight: " 1px solid rgba(84, 95, 125,0.7)" }}>
              <h3>Grace Effiom</h3>
              <p>LSQFf587g90</p>
            </div>
            <div style={{ borderRight: " 1px solid rgba(84, 95, 125,0.7)" }}>
              <p>User's Tier</p>
              <p>&#9734; &#9733;</p>
            </div>
            <div>
              <h3>₦200,000.00</h3>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>

          <div className="bottom">
            <p style={{ borderBottom: " 1px solid rgba(57, 205, 204, 1)",color:"rgba(57, 205, 204, 1)" }}>General Details</p>
            <p>Documents</p>
            <p>Bank Details</p>
            <p>Loans</p>
            <p>Savings</p>
            <p>App and System</p>
          </div>
        </div>
        <div className="personal-info">
          <Personal/>
        </div>
      </div>
    </div>
  );
}
