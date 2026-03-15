import Card from "../components/shared/Card"
import HeroSection from "../components/shared/HeroSection"
import PricingSection from "../components/shared/PicingSection"
import Promotion from "../components/shared/Promotion"
import AboutPages from "../pages/AboutPages"
import ContactSection from "../components/shared/ContactSection"

function HomePage() {
  return (
    <div>

<div className="carousel-container d-flex justify-content-center " style={{marginTop:"50px"}}>
    <HeroSection />
</div>


    <div style={{marginTop:"50px"}}>
<PricingSection/>
    </div>
<div className="category-buttons">
    <div className="flex flex-wrap justify-center gap-2 mb-10">
<button className="pill active">เนื้อพรีเมียม</button>
  <button className="pill">หมูนุ่ม</button>
  <button className="pill">อาหารทะเล</button>
  <button className="pill">ซุป</button>
        </div>
        </div>

        <div className="card-list d-flex px-lg-5 flex-wrap gap-3  justify-content-center">

        <Card /><Card /><Card /><Card />
    </div>

     <div className="container" style={{ maxWidth: "1100px" }}> {/* 1. จำกัดความกว้างกลุ่มการ์ดเพื่อลดระยะห่าง */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ marginTop: "60px" }}>
      โปรโมชั่น
    </h2>
    <p className="text-muted-foreground mt-3 text-lg">
      ดีลลับฉบับตัวแม่ ข้อเสนอพิเศษที่ไม่ควรพลาด
    </p>
  </div>

  {/* 2. ใช้ justify-content-start เพื่อให้ใบที่เหลือชิดซ้ายเสมอ */}
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-start">
    {/* 3. ครอบแต่ละชิ้นด้วย col เพื่อให้ระบบ Bootstrap Grid คุมระยะห่าง g-4 ได้ถูกต้อง */}
    <div className="col d-flex justify-content-center">
      <Promotion />
    </div>
    <div className="col d-flex justify-content-center">
      <Promotion />
    </div>
    <div className="col d-flex justify-content-center">
      <Promotion />
    </div>
    <div className="col d-flex justify-content-center">
      <Promotion />
    </div>
    <div className="col d-flex justify-content-center">
      <Promotion />
    </div>
  </div>
</div>

    <ContactSection />
    </div>
  )
}

export default HomePage