import React from "react";
import GroupIcon from "@mui/icons-material/Group";

const Nav = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap:"wrap",
          position: "relative",
          marginTop: "25px",
        }}
      >
        <div className="col-md-1">
          <img src="ic_search.svg" />
        </div>

        <div style={{ marginRight: "30px" }}>
          <div
            style={{
              width: "15px",
              background: "var(--error-main, #FF5630)",
              height: "15px",
              borderRadius: "50%",
              color: "white",
              fontWeight: "bold",
              fontSize: "10px",
              textAlign: "center",
              position: "absolute",
              top: 6,
              right: 111,
            }}
          >
            8
          </div>
          <img
            src="GB.svg"
            className="mx-3"
            style={{ border: "1px dashed gray", padding: "8px" }}
          />
          <img src="ic_notifications.svg" />
          <GroupIcon className="mx-3" />
          <img src="profile.png" width={30} />
        </div>
      </div>
      
    </div>
  );
};

export default Nav;
