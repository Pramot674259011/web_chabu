function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        
        {/* Logo */}
        <a className="navbar-brand fw-bold text-danger" href="#">
          🍲 ชาบูจันทร์
        </a>

        {/* Toggle mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          
          {/* Center menu */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">หน้าแรก</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">เมนู</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">โปรโมชั่น</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">เกี่ยวกับร้าน</a>
            </li>
          </ul>

          {/* Right buttons */}
          <div className="d-flex gap-2">
            <button className="btn btn-outline-danger rounded-pill px-4">
              เข้าสู่ระบบ
            </button>
            <button className="btn btn-danger rounded-pill px-4">
              พนักงาน
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar