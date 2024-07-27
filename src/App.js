// import logo from './logo.svg';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Menu from './Menu.js';
import Dssp from "./Dssp.js";
// import TimKiem from "./Timkiem.js";
import SPTrongLoai from "./SPTrongLoai.js";
import GioiThieu from "./GioiThieu.js";
import ChiTiet from "./Chitiet.js";
import ShowCart from "./ShowCart.js";
import ThanhToan from "./ThanhToan.js";
import { Link } from "react-router-dom";
import TimKiem from "./TimKiem.js";



// var sotin = 10;
function App() {
  return (
    <BrowserRouter>
       <section className="page-top">
        <div className="container">
            <div className="row row-gird">
                <div className="page top-contact">
                    <ul className="row-flex">
                        <li>
                            <i className="fa-solid fa-phone-volume"></i><a href="#/">039999999</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i><a href="#/">0gqFP@example.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <header>
        <div className="header-top">
            <div className="container">
                <div className="row row-gird">
                    <div className="header-top-logo">
                        <img src="image/logo1.png" alt="" />
                    </div>
                    <TimKiem/>
                    <div className="header-top-user_cart">
                        <ul className="row-flex">
                            <li><i className="fa-solid fa-user"></i><a href="dangki.html">Tai khoan</a></li>
                            <li>
                                <i className="fa-solid fa-cart-shopping"></i><span> <Link to= "/showcart" > Giỏ hàng </Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="container">
                <div className="row row-gird">
                    <div className="header-bottom-menubar">
                        <i className="fa-solid fa-bars"></i>
                        <span>DANH MỤC SAN PHAM</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="header-bottom-menulist">
                        < Menu/>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
      <div className="container2">
      <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/loai/:id_loai" element={<SPTrongLoai/>} />
            <Route path="/gioithieu" element={<GioiThieu/>} />
            <Route path="/sp/:id" element={<ChiTiet/>} />
            <Route path="/showcart/" element={<ShowCart/>} />
            <Route path="/thanhtoan/" element={<ThanhToan/>} />
            <Route path="/dsanpham/" element={<Dssp/>} />
          </Routes>
        </div>
    </main>
    <section className="banner">
            <div className="container">
                <div className="row-content">
                    <p>THƯƠNG HIỆU ĐỒNG HÀNH</p>
                </div>
                <div className="row-banner">
                    <div className="banner-items">
                        <a href="#/">
                            <img src="image/brand-1.png" alt="" />
                        </a>
                    </div>
                    <div className="banner-items">
                        <a href="#/">
                            <img src="image/brand-2.png" alt="" />
                        </a>
                    </div>
                    <div className="banner-items">
                        <a href="#/">
                            <img src="image/brand-3.png" alt="" />
                        </a>
                    </div>
                    <div className="banner-items">
                        <a href="#/">
                            <img src="image/brand-4.png" alt="" />
                        </a>
                    </div>
                    <div className="banner-items">
                        <a href="#/">
                            <img src="image/brand-5.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <img className="zalo" src="image/zalo-icon (1).png" alt="" width="50px" />
            <img className="mess" src="image/facebook-messenger-new-2020-seeklogo.com-1.svg" alt="" width="50px" />
            <section>
                <div>
                    <h1>LIÊN HỆ</h1>
                    <hr />
                    <p>Phương Tân Chánh Hiệp, Q.12, TP.HCM</p>
                    <p>Email: dulichviet@gmail.com</p>
                    <p>Điện Thoại: 0123456789 - 0987654321</p>
                    <p>Mã số thuế: 0311854004</p>
                    <p>GPKD lữ hành quốc tế số 79-400/2015/TCDL</p>
                </div>
                <div>
                    <h1>BẢN ĐỒ</h1>
                    <hr />
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.888126970113!2d106.62451623275184!3d10.853790432170053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1684896694765!5m2!1svi!2s"
                        style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
                <div>
                    <h1>KẾT NỐI</h1>
                    <hr />
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-youtube"></i>
                    <p>Đăng ký nhận tin khuyến mãi</p>
                    <input type="text" placeholder="Nhập email nhận khuyến mãi" style={{ width: '90%' }} />
                    <button className="btn">ĐĂNG KÝ</button>
                </div>
            </section>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row-footer-bottom">
                        <div className="right-footer-bottom">
                            <div className="copyright text-left">
                                <p>Copyright &copy;2024 <a href="#/"> Phan Thái Cường</a>. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="left-footer-bottom">
                            <div className="footer-logo text-right">
                                <a href="index.html"><img src="image/logo1.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

 
    </BrowserRouter>
  );
}

export default App;
