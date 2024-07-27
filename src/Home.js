import React from "react";
import DealSPMoi from "./DealSPMoi";
import SpMoi from "./SpMoi";import slider1  from "./assets/image/slider-1.webp";
import slider2  from "./assets/image/slider-2.webp";
import slider3 from "./assets/image/slider-3.webp";
import slider4 from "./assets/image/slider-4.webp";
import SliderComponent from "./SliderComponent";


function Home() {
    return (
        <div className="home">
            <div className="container">
                 <SliderComponent arrImages={[slider1,slider2,slider3,slider4]}/>
            </div>
{/* <!-- Deal gio vang --> */}
<section className="hot-product">
<div className="container">
    <div className="hot-product-title row-gird">
        <p>DEAL GIỜ VÀNG</p>
    </div>
    <div className="girds-product">
    <div className="hot-product-main row-girds">
        <DealSPMoi />
    </div>
    
    </div>
</div>
</section>
   <div className="banners">
            <div className="container">
                <div className="row-banner-p">
                    <div className="banner-items-p">
                        <a href="#/">
                            <img src="https://images.fpt.shop/unsafe/fit-in/1190x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/1/3/638398868618527308_H6%20-%201190x300.png" alt="" />
                        </a>
                    </div>
                    <div className="banner-items-p">
                        <a href="#/">
                            <img src="https://images.fpt.shop/unsafe/fit-in/1190x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/1/8/638403060204333680_H6%20-%201190x300.png" alt="" />
                        </a>
                    </div>
                    <div className="banner-items-p">
                        <a href="#/">
                            <img src="https://images.fpt.shop/unsafe/fit-in/1190x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/1/10/638405250663224354_H6%20-%201190x300.png" alt="" />
                        </a>
                    </div>
                    <div className="banner-items-p">
                        <a href="#/">
                            <img src="https://images.fpt.shop/unsafe/fit-in/1190x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/1/4/638399841018889791_H6%20-%201190x300.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* List category */}
        <div className="List-catalorie-container">
    <div className="container">
        <h2>DANH MỤC NỔI BẬT</h2>
        <div className="List-catalorie">
            <a href="#/">
                <div className="txt">
                    <div className="title-catalorie"> XIAOMI</div>
                    <span><p>Điện thoại Xiaomi</p></span>
                </div>
                <div className="img"><img src="https://www.tncstore.vn/static/assets/default/images/cat_banghe_gaming_v2.png" alt=""/></div>
            </a>
            <a href="#/">
                <div className="txt">
                    <div className="title-catalorie"> IPHONE</div>
                    <span><p>Điện thoại Xiaomi</p></span>
                </div>
                <div className="img"><img src="https://www.tncstore.vn/static/assets/default/images/cat_laptop_v2.png" alt=""/></div>
            </a>
            <a href="#/">
                <div className="txt">
                    <div className="title-catalorie"> SAMSUNG</div>
                    <span><p>Điện thoại Xiaomi</p></span>
                </div>
                <div className="img"><img src="https://www.tncstore.vn/static/assets/default/images/cat_laptop_v2.png" alt=""/></div>
            </a>
            <a href="#/">
                <div className="txt">
                    <span><p>Điện thoại Xiaomi</p></span>
                </div>
                <div className="img"><img src="https://www.tncstore.vn/static/assets/default/images/cat_laptop_v2.png" alt=""/></div>
            </a>
            <a href="#/">
                <div className="txt">
                    <div className="title-catalorie"> OPPO</div>
                    <span><p>Điện thoại Xiaomi</p></span>
                </div>
                <div className="img"><img src="https://www.tncstore.vn/static/assets/default/images/cat_laptop_v2.png" alt=""/></div>
            </a>
            <a href="#/">
                <div className="txt">
                    <div className="title-catalorie"> VIVO</div>
                    <span><p>Điện thoại Xiaomi</p></span>
                </div>
                <div className="img"><img src="https://www.tncstore.vn/static/assets/default/images/cat_laptop_v2.png" alt=""/></div>
            </a>
            <a href="#/">
                <div className="txt">
                    <div className="title-catalorie"> REDMI</div>
                    <span><p>Điện thoại Xiaomi</p></span>
                </div>
                <div className="img"><img src="https://www.tncstore.vn/static/assets/default/images/cat_laptop_v2.png" alt=""/></div>
            </a>
            <a href="#/">
                <div className="txt">
                    <div className="title-catalorie"> NOKIA</div>
                    <span><p>Điện thoại Xiaomi</p></span>
                </div>
                <div className="img"><img src="https://www.tncstore.vn/static/assets/default/images/cat_laptop_v2.png" alt=""/></div>
            </a>
        </div>
    </div>
        </div>
        {/* Hot product */}
        <section className="hot-products">
        <div className="container">
            <div className="hot-product-title row-gird">
                <p>SẢN PHẨM NỔI BẬT</p>
            </div>
            <SpMoi />
        </div>
        </section>
        </div>
    )
}

export default Home