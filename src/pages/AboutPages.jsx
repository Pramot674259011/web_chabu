import React from 'react'

function AboutPages() {
  return (
    <div>
        <div className="px-4 md:px-8 rounded-4" style={{ marginTop: 60 }}>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">เกี่ยวกับร้าน</h2>

        <div className="relative h-64 rounded-lg overflow-hidden mb-6">
        <img alt="https://v0-shabu-restaurant-website.vercel.app/restaurant-interior.jpg" 
        loading="lazy" decoding="async" data-nimg="fill" className="object-cover"
        style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,color:"transparent"}} src="https://v0-shabu-restaurant-website.vercel.app/restaurant-interior.jpg" />
        </div>

        <p className="text-muted-foreground leading-relaxed text-lg">
          ร้านชาบูเจ๊จันทร์ เปิดให้บริการมาตั้งแต่ปี 2558 ด้วยความตั้งใจที่จะให้บริการชาบูหม้อไฟคุณภาพดี
          ราคาเข้าถึงได้ในบรรยากาศอบอุ่น เราคัดสรรวัตถุดิบสดใหม่ทุกวัน น้ำซุปต้มสูตรเด็ดจากเจ๊จันทร์เอง
          ไม่ว่าจะมาคนเดียวหรือมาเป็นกลุ่ม รับรองอิ่มอร่อยทุกคน
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8 " style={{ maxWidth: 750, margin: "0 50px" }}>
          <div className="text-center p-4 bg-light rounded-lg ">
            <div className="text-2xl font-bold text-danger">10+</div>
            <div className="text-sm text-muted-foreground mt-1">ปีประสบการณ์</div>
          </div>

          <div className="text-center p-16 bg-light rounded-lg ">
            <div className="text-2xl font-bold text-danger">20+</div>
            <div className="text-sm text-muted-foreground mt-1">เมนูให้เลือก</div>
          </div>

          <div className="text-center p-4 bg-light rounded-lg">
            <div className="text-2xl font-bold text-danger">12</div>
            <div className="text-sm text-muted-foreground mt-1">โต๊ะนั่ง</div>
          </div>
        </div>
      </div>
                                </div>
  )
}

export default AboutPages