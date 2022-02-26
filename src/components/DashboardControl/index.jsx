import React from "react";
import "./style.scss";
import DashboardItem from "../DashboardItem";
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
import logout from "../../resource/logout.svg";

export default function DashboardControl(props) {
  const {logged} = props
  const customer = [
    { title: "Users", img: briefcase ,key:1},
    { title: "Guarantors", img: guarantor ,key:2},
    { title: "Loans", img: loan ,key:3},
    { title: "Decision Models", img: decision ,key:4},
    { title: "Savings", img: savings,key:5 },
    { title: "Loan Requests", img: request ,key:6},
    { title: "Whitelist", img: white ,key:7},
    { title: "Karma", img: karma,key:8 },
  ];
  const business = [
    { title: "Organization", img: briefcase ,key:1 },
    { title: "Loan Products", img: request ,key:2},
    { title: "Saving Products", img: savings1 ,key:3},
    { title: "Fee and Charges", img: coins ,key:4},
    { title: "Transactions", img: transactions ,key:5},
    { title: "Service Account", img: service ,key:6},
    { title: "Services", img: services,key:7 },
    { title: "Settlements ", img: scroll ,key:8},
    { title: "Reports", img: report ,key:9},
  ];
  const settings = [
    { title: "Preferences", img: slider },
    { title: "Fees and Prices", img: badge },
    { title: "Audit Logs", img: clipboard },
  ];
  return (
      <div className="dashboard-control">
        <DashboardItem
          item={{ title: "Switch Organization", img: briefcase }}
        />
        <div className="customer">
          <DashboardItem item={{ title: "Dashboard", img: dashboard }} />
          <p>CUSTOMERS</p>
          {customer.map((item) => (
            <DashboardItem item={item} key ={item.key} />
          ))}
        </div>
        <div className="business">
          <p>BUSINESS</p>
          {business.map((item) => (
            <DashboardItem item={item} key ={item.key} />
          ))}
        </div>
        <div className="setting">
          <p>SETTINGS</p>
          {settings.map((item) => (
            <DashboardItem item={item} key ={item.key} />
          ))}
        </div>
        {logged?<div className="logout">
          <DashboardItem item={{ title: "", img: logout }} />
          <p>Logout</p>
        </div>:null}
        
      </div>
 
  );
}
