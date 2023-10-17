import React from "react";
import { Chart } from "./Chart";

const Home = () => {
  return (
    <div className="my-3">
      <div>
        <h5 style={{ fontWeight: "700" }}>Client Management</h5>
        <div className="my-4">
          <span
            style={{
              fontWeight: "500",
              borderBottom: "2px solid green",
              paddingBottom: "10px",
            }}
          >
            Dashboard
          </span>
          <span className="mx-4">Client Details</span>
        </div>

        <div style={{ display: "flex" }}>
          <div  style={{ marginLeft: "10px", marginTop: "18px" }}>
            <p
              style={{
                fontWeight: "600",
                fontSize: "14px",
                color: "var(--grey-800, #212B36)",
                marginBottom: "10px",
              }}
            >
              Key Performance Indicator
            </p>
            <div className="p-2" style={{ display: "flex",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
              <div
                style={{ borderLeft: "3px solid #091A7A", paddingLeft: "10px" }}
              >
                <span style={{ fontSize: "15px" }}>Client Retention Rate</span>
                <h5 style={{ color: "#091A7A", fontWeight: "600" }}>55%</h5>
              </div>
              <div
                className="mx-4"
                style={{ borderLeft: "3px solid #006C9C", paddingLeft: "10px" }}
              >
                <span style={{ fontSize: "15px" }}>Client Satisfaction</span>
                <h5 style={{ color: "#006C9C", fontWeight: "600" }}>55%</h5>
              </div>
              <div
                style={{ borderLeft: "3px solid #006124", paddingLeft: "10px" }}
              >
                <span style={{ fontSize: "15px" }}>Revenue Generated</span>
                <h5 style={{ color: "#006124", fontWeight: "600" }}>55%</h5>
              </div>
            </div>
          </div>

          <div  style={{ marginLeft: "30px", marginTop: "18px" }}>
            <p
              style={{
                fontWeight: "600",
                fontSize: "14px",
                color: "var(--grey-800, #212B36)",
                marginBottom: "10px",
              }}
            >
              Companies Status
            </p>
            <div className="p-2" style={{ display: "flex",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
              <div
                style={{ borderLeft: "3px solid #091A7A", paddingLeft: "10px" }}
              >
                <span style={{ fontSize: "15px" }}>Total</span>
                <h5 style={{ color: "#091A7A", fontWeight: "600" }}>20</h5>
              </div>
              <div
                className="mx-5"
                style={{ borderLeft: "3px solid #006124", paddingLeft: "10px" }}
              >
                <span style={{ fontSize: "15px" }}>Active</span>
                <h5 style={{ color: "#006124", fontWeight: "600" }}>15</h5>
              </div>
              <div
                style={{ borderLeft: "3px solid #006C9C", paddingLeft: "10px" }}
              >
                <span style={{ fontSize: "15px" }}>New</span>
                <h5 style={{ color: "#006C9C", fontWeight: "600" }}>3</h5>
              </div>
            </div>
          </div>

          <div className="px-2 py-2" style={{ marginLeft: "30px", marginTop: "18px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
            <p
              style={{
                fontWeight: "600",
                fontSize: "14px",
                color: "var(--grey-800, #212B36)",
                marginBottom: "10px",
              }}
            >
              Active User Base
            </p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    backgroundColor: " #1939B7",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                ></div>
                <div
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  89% App User
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    backgroundColor: " #36B37E",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                ></div>
                <div
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  11% Web User
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  width: "198px",
                  height: "19px",
                  background: "#1939B7",
                  borderRadius: "9px",
                  marginTop: "25px",
                  marginRight: "10px",
                }}
              ></div>
              <div
                style={{
                  width: "62px",
                  height: "19px",
                  background: "#36B37E",
                  borderRadius: "9px",
                  marginTop: "25px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <h5
                style={{ borderBottom: "2px solid #e3e8e5", padding: "10px" ,fontSize:"16px"}}
              >
                Onboarded Companies
              </h5>
              <div className="col-md-2 py-2">
                <select
                  style={{
                    padding: "5px 45px 5px 7px",
                    border: "1px solid #919EAB",
                    borderRadius: "5px",
                  }}
                  className="py-2"
                >
                  <option value="all">All</option>
                </select>
              </div>
              <div className="col-md-2 py-2">
                <img
                  src="ic_search.svg"
                  alt="search icon"
                  className="py-2"
                  style={{ position: "absolute", top: "48%", left: "35%" }}
                />
                <input
                  type="search"
                  className="py-2"
                  placeholder="Search client or invoice number..."
                  style={{
                    width: "600px",
                    paddingLeft: "32px",
                    border: "1px solid #919EAB",
                    borderRadius: "5px",
                    alignItems: "center",
                  }}
                />
              </div>
            </div>
            <table
              style={{ borderBottom: "2px solid #e3e8e5", marginTop: "10px" }}
            >
              <tr style={{ backgroundColor: "var(--grey-100, #F9FAFB)" }}>
                <th className="py-3">Company Name</th>
                <th className="py-3">Onboarding date</th>
                <th className="py-3">Go-Live Date</th>
                <th className="py-3">Total User base</th>
                <th className="py-3">Last Billing</th>
                <th className="py-3">Status</th>
              </tr>
              <tr>
                <td>
                  <div
                    className="row"
                    style={{
                      background:
                        "var(--transparent-secondary-08, rgba(51, 102, 255, 0.08))",
                    }}
                  >
                    <div className="col-md-3 py-1">
                      <img
                        src="TC.png"
                        alt="TC logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div className="col-md-8 py-1">
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Texlaculture
                      </span>
                      <br />
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "var(--text-light-secondary, #637381)",
                        }}
                      >
                        INV-17048
                      </span>
                    </div>
                  </div>
                </td>
                <td>12 Jan 2022</td>
                <td>07 Aug 2022</td>
                <td>244</td>
                <td>07 Aug 2022</td>
                <td style={{ color: "#006124" }}>Active</td>
              </tr>
              <tr>
                <td>
                  <div
                    className="row"
                    style={{
                      background:
                        "var(--transparent-secondary-08, rgba(51, 102, 255, 0.08))",
                    }}
                  >
                    <div className="col-md-3 py-1">
                      <img
                        src="TC.png"
                        alt="TC logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div className="col-md-8 py-1">
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Texlaculture
                      </span>
                      <br />
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "var(--text-light-secondary, #637381)",
                        }}
                      >
                        INV-17049
                      </span>
                    </div>
                  </div>
                </td>
                <td>11 Feb 2022</td>
                <td>06 May 2022</td>
                <td>1000</td>
                <td>07 Aug 2022</td>
                <td style={{ color: "#006124", borderRadius: "6px" }}>
                  Active
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    className="row"
                    style={{
                      background:
                        "var(--transparent-secondary-08, rgba(255, 171, 0, 0.08))",
                    }}
                  >
                    <div className="col-md-3 py-1">
                      <img
                        src="TC.png"
                        alt="TC logo"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div className="col-md-8 py-1">
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Texlaculture
                      </span>
                      <br />
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "var(--text-light-secondary, #637381)",
                        }}
                      >
                        INV-13042
                      </span>
                    </div>
                  </div>
                </td>
                <td>10 Sep 2022</td>
                <td>05 Oct 2022</td>
                <td>150</td>
                <td>207 Aug 2022</td>
                <td style={{ color: "#212B36" }}>Draft</td>
              </tr>
            </table>
            <div className="d-flex justify-content-between py-2">
              <div>
                <img
                  src="toggle.png"
                  alt="toggle"
                  width={40}
                  className="mx-3"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                />
                <span>Dense</span>
              </div>
              <div>
                <span>Rows per page:</span>
                <span className="mx-3">5</span>
                <img src="ic_chevron_down.svg" alt="down arrow" />
                <span className="mx-3">6-10 of 11</span>
                <img src="ic_chevron_right.svg" alt="right arrow" />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3" style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
            <div className="row my-4" >
              <h5 style={{fontSize:"16px"}}>Regional Metrics</h5>
              <div className="col-12 my-3 mx-2">
                <span >East <img src="Ellipse 397.svg" alt="yellow ellipse"/></span>
                <span className="mx-4">North <img src="Ellipse 395.svg" alt="green ellipse"/></span>
                <span >South <img src="Ellipse 398.svg" alt="red ellipse"/></span>
                <span className="mx-4">West <img src="Ellipse 396.svg" alt="blue ellipse"/></span>
              </div>
              <Chart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
