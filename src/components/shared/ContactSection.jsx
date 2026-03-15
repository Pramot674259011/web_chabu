import React from "react";

function ContactSection() {
  return (
    <section className="py-5" style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif" }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <div className="row g-5">
          {/* About Section - Left Side */}
          <div className="col-12 col-lg-6">
            <div className="p-4 rounded-4 bg-light border">
              <h2 className="fw-bold mb-4 text-dark">เกี่ยวกับร้าน</h2>

              <div className="mb-4 rounded-4 overflow-hidden" style={{ height: '240px' }}>
                <img
                  src="https://v0-shabu-restaurant-website.vercel.app/restaurant-interior.jpg"
                  alt="บรรยากาศร้านชาบูเจ๊จันทร์"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <p className="text-muted mb-4 lh-base">
                ร้านชาบูเจ๊จันทร์ เปิดให้บริการมาตั้งแต่ปี 2558 ด้วยความตั้งใจที่จะให้บริการชาบูหม้อไฟคุณภาพดี
                ราคาเข้าถึงได้ในบรรยากาศอบอุ่น เราคัดสรรวัตถุดิบสดใหม่ทุกวัน น้ำซุปต้มสูตรเด็ดจากเจ๊จันทร์เอง
                ไม่ว่าจะมาคนเดียวหรือมาเป็นกลุ่ม รับรองอิ่มอร่อยทุกคน
              </p>

              <div className="row g-3">
                <div className="col-4">
                  <div className="text-center p-3 bg-white rounded-3 border">
                    <div className="fs-4 fw-bold text-danger">10+</div>
                    <div className="small text-muted">ปีประสบการณ์</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-3 bg-white rounded-3 border">
                    <div className="fs-4 fw-bold text-danger">20+</div>
                    <div className="small text-muted">เมนูให้เลือก</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-3 bg-white rounded-3 border">
                    <div className="fs-4 fw-bold text-danger">12</div>
                    <div className="small text-muted">โต๊ะนั่งรับรอง</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section - Right Side */}
          <div className="col-12 col-lg-6">
            <div className="p-4 rounded-4 border" style={{ borderColor: "#cd2026" }}>
              <h2 className="fw-bold mb-3" style={{ color: "#a00f1c" }}>
                ที่ตั้ง & ติดต่อ
              </h2>

              {/* Google Maps */}
              <div className="mb-4 rounded-3 overflow-hidden" style={{ boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.12)" }}>
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9285974608865!2d100.55329527533735!3d13.71976299031227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fa021a32cf9%3A0xb4f34022a22275c5!2sSiam%20Paragon!5e0!3m2!1sth!2sth!4v1718429220991!5m2!1sth!2sth"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="row g-3">
                <div className="col-12">
                  <div className="p-3 rounded-3" style={{ backgroundColor: "#f5f5f5" }}>
                    <div className="d-flex align-items-start gap-3">
                      <span style={{ fontSize: 20 }}>📍</span>
                      <div>
                        <div className="fw-bold">ที่อยู่</div>
                        <div>123/4 ถนนสุขุมวิท เขตคลองเตย กรุงเทพมหานคร 10110</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="p-3 rounded-3" style={{ backgroundColor: "#f5f5f5" }}>
                    <div className="d-flex align-items-start gap-3">
                      <span style={{ fontSize: 20 }}>🕒</span>
                      <div>
                        <div className="fw-bold">เวลาเปิด-ปิด</div>
                        <div>ทุกวัน 11:00 - 22:00</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="p-3 rounded-3" style={{ backgroundColor: "#f5f5f5" }}>
                    <div className="d-flex align-items-start gap-3">
                      <span style={{ fontSize: 20 }}>📞</span>
                      <div>
                        <div className="fw-bold">โทรศัพท์</div>
                        <div>02-123-4567</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="p-3 rounded-3" style={{ backgroundColor: "#f5f5f5" }}>
                    <div className="d-flex align-items-start gap-3">
                      <span style={{ fontSize: 20 }}>✉️</span>
                      <div>
                        <div className="fw-bold">อีเมล</div>
                        <div>contact@shabujechan.com</div>
                      </div>

                      
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="p-3 rounded-3" style={{ backgroundColor: "#f5f5f5" }}>
                    <div className="d-flex align-items-start gap-3">
                      <span style={{ fontSize: 20 }}>📘</span>
                      <div>
                        <div className="fw-bold">Facebook</div>
                        <div><a href="https://www.facebook.com/shabujechan" target="_blank" rel="noopener noreferrer" className="text-decoration-none">ชาบูเจ๊จันทร์</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
