
import React from "react";

function Card() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden group border-border rounded-4 hover-card"
        style={{ width: "22rem" }}
      >
        {/* รูป */}
        <img
          src="https://v0-shabu-restaurant-website.vercel.app/hero-shabu.jpg"
          className="card-img-top"
          alt="wagyu"
          style={{
            height: "230px",
            objectFit: "cover",
            width: "100%",
            borderRadius: "0.5rem"
          }}
        />

        {/* เนื้อหา */}
        <div className="card-body bg-light p-4">
          <h5 className="fw-bold mb-2 font-semibold text-foreground">วากิวจันทร์กระจ่าง</h5>
          <p className="text-sm text-muted-foreground mt-1">
            วากิว A5 ลายหินอ่อนละลายในปาก
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
