import React ,{useState}from "react";
import "./style.scss";
import arrow from "../../resource/arrow.svg";
import avatar from "../../resource/avatar.svg";
import { Link, useParams } from "react-router-dom";
import Personal from "../../components/Personal";
import DashboardControl from "../../components/DashboardControl";
import Header from "../../components/Header";


export default function UserDetail() {
  var users = JSON.parse(localStorage.getItem("users"));
  const [control, setControl] = useState(true);
  const showDash = () => {
    setControl(false);
    control.log("erg");
  };
  const hideDash = () => {
    setControl(true);
  };
  let { id } = useParams();
  const currentUser = users.filter((item) => item._id == id);
  const { fullname } = currentUser[0];

  return (
    <>
      <Header control={showDash} />
      <div className="dashboard">
        <div className="desktop">
          <DashboardControl logged={true} />
        </div>
        {control ? null : (
          <DashboardControl hideDash={hideDash} logged={true} />
        )}
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
              <div>
                <h3>{fullname}</h3>
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
              <p
                style={{
                  borderBottom: " 1px solid rgba(57, 205, 204, 1)",
                  color: "rgba(57, 205, 204, 1)",
                }}
              >
                General Details
              </p>
              <p>Documents</p>
              <p>Bank Details</p>
              <p>Loans</p>
              <p>Savings</p>
              <p>App and System</p>
            </div>
          </div>
          <div className="personal-info">
            <Personal currentUser={currentUser} />
          </div>
        </div>
      </div>
    </>
  );
}
