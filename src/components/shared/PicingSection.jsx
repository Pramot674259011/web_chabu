function PricingSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">

        {/* Title */}
        <h2 className="fw-bold mb-2">เมนูแนะนำ</h2>
        <p className="text-muted mb-5">
          วัตถุดิบคัดสรรคุณภาพ สดใหม่ทุกวัน
        </p>

        <div className="row g-4">

          {/* STANDARD */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 pricing-card">
              <div className="card-body py-5">
                <h6 className="text-muted fw-bold">STANDARD</h6>
                <h1 className="fw-bold text-danger my-3">
                  499 <span className="fs-5 text-muted">.-/ท่าน</span>
                </h1>
                <p className="text-muted">
                  เน้นหมูคุณภาพสูง รสชาติดีเกินคาด
                </p>
              </div>
            </div>
          </div>

          {/* PREMIUM */}
          <div className="col-md-4">
            <div className="card h-100 border-danger border-2 shadow-sm rounded-4 position-relative pricing-card">

              {/* Best Value Badge */}
              <span
                className="badge bg-warning text-dark px-3 py-2 position-absolute"
                style={{
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "20px",
                }}
              >
                Best Value
              </span>

              <div className="card-body py-5">
                <h6 className="fw-bold text-muted">PREMIUM</h6>
                <h1 className="fw-bold text-danger my-3">
                  799 <span className="fs-5 text-muted">.-/ท่าน</span>
                </h1>
                <p className="text-muted">
                  เนื้อพรีเมียม + ซีฟู้ดอันดับทะเล
                </p>
              </div>
            </div>
          </div>

          {/* LUXURY */}
          <div className="col-md-4">
            <div className="card h-100 border-warning border-2 shadow-sm rounded-4 pricing-card">
              <div className="card-body py-5">
                <h6 className="fw-bold text-warning">LUXURY</h6>
                <h1 className="fw-bold text-danger my-3">
                  1,299 <span className="fs-5 text-muted">.-/ท่าน</span>
                </h1>
                <p className="text-muted">
                  วากิว A5 ไม่อั้น + ทุกเมนูในร้าน
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <p className="mt-5 text-muted">
          เด็กสูงไม่เกิน 110 ซม. ทานฟรี / 111-130 ซม. ครึ่งราคา |
          จำกัดเวลา 1 ชั่วโมง 45 นาที
        </p>

      </div>
    </section>
  )
}

export default PricingSection