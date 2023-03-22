import React from "react";

function FormDa() {
  return (
    <div className="form">
      <div className="upbutton">
        <div>
          <button style={{ background: "#0096FF", borderRradius: "1000px" }}>
            1
          </button>
          <span style={{ display: "grid", fontSize: "12px" }}>Sign Up</span>
        </div>
        <div>
          <button style={{ background: "#0096FF", borderRadius: "1000px" }}>
            2
          </button>
          <span style={{ display: "grid", fontSize: "12px" }}>subscribe</span>
        </div>
      </div>
      <h4 style={{ textAlign: "center", color: "#3C4852" }}>
        Select your subcription plan
      </h4>
      <div className="check">
        <div className="check-select">
          <input type="radio" />
          <p>12 months subscription</p>
          <p style={{ marginLeft: "197px" }}> ₹ Total 179</p>
        </div>
        <div className="check-select" style={{ border: "1px solid #47BA68" }}>
          <div>
          <span
            style={{
              backgroundColor: "#47BA68",
              height: "16px",
              fontSize: "12px",
              marginLeft: "10px",
              padding: "0px 15px",
              color: "white",
            }}
          >
            Recomended
          </span>
          <input type="radio" />
          <p>12 months subscription</p>
          </div>
         
          <p style={{ marginLeft: "197px", backgroundColor: "#47BA68" }}>
            {" "}
            ₹Total 179
          </p>
        </div>
        <div className="check-select">
          <input type="radio" />
          <p>6 months subscription</p>
          <p style={{ marginLeft: "197px" }}>₹ Total 179</p>
        </div>
        <div className="check-select">
          <input type="radio" />
          <p>3 months subscription</p>
          <p style={{ marginLeft: "197px" }}>₹ Total 179</p>
        </div>
        <div className="subcri">
          <div className="checkselect">
            <p>subscription fee</p>
            <p>$ 18000</p>
          </div>
          <div className="check-select">
            <p>subscription fee</p>
            <p>$ 18000</p>
          </div>
        </div>
        <div className="check-button">
          <button className="button">CANCEL</button>
          <button style={{ borderRadius: 50, background: "#47BA68" }}>
            PROCEED TO PAY
          </button>
        </div>
        <i>roj</i>
      </div>
    </div>
  );
}

export default FormDa;
