import React from "react";
import "./style.scss";

export default function Personal(props) {
  const item = {
    id: 1,
    status: "inactive",
    date: "May 15, 2020 10:00 AM",
    organization: "Lendsqr",
    accountType: "loan",
    level: "B.Sc",
    employ: "Employed",
    sector: "Fintech",
    duration: "2 years",
    office: "grace@lendsqr.com",
    income: "₦200,000.00- ₦400,000.00",
    repay: "40,000",
    gname: "Debby Ogana",
    gphone: "07060780922",
    gemail: "debby@gmail.com",
    grelate: "Sister",
  };
  const {
    fullname,
    username,
    phone,
    email,
    gender,
    residence,
    marital,
    kid,
    level,
    employ,
    sector,
    duration,
    office,
    income,
    repay,
  } = props.currentUser[0];
  return (
    <div className="personal">
      <div className="info-wrapper">
        <h4>Personal Information</h4>
        <div className="info">
          <div>
            <p>FULL NAME</p>
            <h4>{fullname}</h4>
          </div>
          <div>
            <p>PHONE NUMBER</p>
            <h4>{phone}</h4>
          </div>
          <div>
            <p>EMAIL ADDRESS</p>
            <h4>{email}</h4>
          </div>
          <div>
            <p>BVN</p>
            <h4>{phone}</h4>
          </div>
          <div>
            <p>GENDER</p>
            <h4>{gender}</h4>
          </div>
          <div>
            <p>MARITAL STATUS</p>
            <h4>{marital}</h4>
          </div>
          <div>
            <p>CHILDREN</p>
            <h4>{kid}</h4>
          </div>
          <div>
            <p>TYPE OF RESEIDENCE</p>
            <h4>{residence}</h4>
          </div>
        </div>
      </div>
      <div className="info-wrapper ">
        <h4>Education and Employment</h4>
        <div className="info education">
          <div>
            <p>Level of Education</p>
            <h4>{level}</h4>
          </div>
          <div>
            <p>Employment Status</p>
            <h4>{employ}</h4>
          </div>
          <div>
            <p>sector of employment</p>
            <h4>{sector}</h4>
          </div>
          <div>
            <p>Duration of employment</p>
            <h4>{duration}</h4>
          </div>
          <div>
            <p>office email</p>
            <h4>{office}</h4>
          </div>
          <div>
            <p>Monthly income</p>
            <h4>{income}</h4>
          </div>
          <div>
            <p>loan repayment</p>
            <h4>{repay}</h4>
          </div>
        </div>
      </div>
      <div className="info-wrapper">
        <h4>Socials</h4>
        <div className="info">
          <div>
            <p>Twitter</p>
            <h4>{username}</h4>
          </div>
          <div>
            <p>Facebook</p>
            <h4>{fullname}</h4>
          </div>
          <div>
            <p>Instagram</p>
            <h4>{username}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
