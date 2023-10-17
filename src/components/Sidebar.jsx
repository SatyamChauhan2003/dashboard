import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import { Chart } from "./Chart";

const Sidebar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-3  p-4"
            style={{ height: "100vh", borderRight: "1px dashed #919EAB" }}
          >
            <div style={{ marginBottom: "30px", marginTop: "20px" }}>
              <span
                style={{
                  color: "var(--secondary-dark, #1939B7",
                  fontSize: "32px",
                  fontWeight: "600",
                  border: "2px solid blue",
                }}
              >
                TEXLA
              </span>{" "}
              <span
                style={{
                  color: "var(--secondary-dark, #1939B7",
                  fontSize: "32px",
                  fontWeight: "600",
                }}
              >
                CULTURE
              </span>
            </div>
            <div style={{ paddingLeft: "15px", marginTop: "65px" }}>
              <div className="row">
                <p className="text-secondary" style={{ fontSize: "13px" }}>
                  GENERAL
                </p>
              </div>
              <div
                className="row"
                style={{
                  background:
                    "var(--transparent-secondary-08, rgba(51, 102, 255, 0.08))",
                  borderRadius: "9px",
                  alignItems: "center",
                }}
              >
                <div className="col-md-2">
                  <img src="ic_dashboard.svg" />
                </div>
                <div className="col-md-7 ">
                  <p
                    className="m-3"
                    style={{ color: "#1939B7", fontWeight: "bold" }}
                  >
                    Dashboard
                  </p>
                </div>
                <div className="col-md-2">
                  <img src="ic_chevron_down.svg" />
                </div>
              </div>

              <div
                className="row"
                style={{
                  borderRadius: "9px",
                  alignItems: "center",
                }}
              >
                <div className="col-md-2">
                  <img src="ic_banking.svg" />
                </div>
                <div className="col-md-7 ">
                  <p className="m-3">Companies</p>
                </div>
                <div className="col-md-2">
                  <img src="ic_chevron_right.svg" />
                </div>
              </div>

              <div
                className="row"
                style={{
                  borderRadius: "9px",
                  alignItems: "center",
                }}
              >
                <div className="col-md-2">
                  <img src="ic_banking.svg" />
                </div>
                <div className="col-md-7 ">
                  <p className="m-3">Support & Tickets</p>
                </div>
                <div className="col-md-1">
                  <img src="ic_chevron_right.svg" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderRadius: "9px",
                  alignItems: "center",
                }}
              >
                <div className="col-md-2">
                  <img src="ic_banking.svg" />
                </div>
                <div className="col-md-7 ">
                  <p className="m-3">User Admins</p>
                </div>
                <div className="col-md-1">
                  <img src="ic_chevron_right.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Nav />
            <Home />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
