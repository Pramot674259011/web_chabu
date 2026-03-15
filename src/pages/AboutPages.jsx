import React from 'react'

function AboutPages() {
  return (
    <div className="bg-white min-vh-100 py-5">
      <div className="container" style={{ maxWidth: 1100, marginTop: 60 }}>
        <h2 className="h2 fw-bold text-dark mb-4 text-center">เกี่ยวกับร้าน</h2>

        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-8">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow">
              <img
                src="https://v0-shabu-restaurant-website.vercel.app/restaurant-interior.jpg"
                alt="บรรยากาศร้านชาบูเจ๊จันทร์"
                className="object-fit-cover"
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-10 col-lg-8">
            <p className="text-muted fs-5 lh-base text-center">
              ร้านชาบูเจ๊จันทร์ เปิดให้บริการมาตั้งแต่ปี 2558 ด้วยความตั้งใจที่จะให้บริการชาบูหม้อไฟคุณภาพดี
              ราคาเข้าถึงได้ในบรรยากาศอบอุ่น เราคัดสรรวัตถุดิบสดใหม่ทุกวัน น้ำซุปต้มสูตรเด็ดจากเจ๊จันทร์เอง
              ไม่ว่าจะมาคนเดียวหรือมาเป็นกลุ่ม รับรองอิ่มอร่อยทุกคน
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="text-center p-4 bg-light rounded-4 border">
              <div className="fs-1 fw-bold text-danger">10+</div>
              <div className="text-muted">ปีประสบการณ์</div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="text-center p-4 bg-light rounded-4 border">
              <div className="fs-1 fw-bold text-danger">20+</div>
              <div className="text-muted">เมนูให้เลือก</div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="text-center p-4 bg-light rounded-4 border">
              <div className="fs-1 fw-bold text-danger">12</div>
              <div className="text-muted">โต๊ะนั่งรับรอง</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPages