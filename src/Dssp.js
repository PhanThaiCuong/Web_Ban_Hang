import React from "react";
import SanPhamXemNhieu from "./SanPhamXemNhieu";
import { useState, useEffect } from "react";
import DealSPMoi from "./DealSPMoi";
import Spcungloai from "./Spcungloai";
function Dssp() {
    const [listdm, setListDM] = useState([]);
    const [catclick, setCatClick] = useState(null);
    const [selectedLoai, setSelectedLoai] = useState(null);
    const [showDealSPMoi, setShowDealSPMoi] = useState(true);

    // const [listsp, setListSP] = useState([]);

    //   let count = 0;

    //     listdm.forEach((loai) => {
    //       if (sp.id_loai === loai.id ) {
    //         count ++;
    //       }
    //     });

    //  console.log(count);
    function clickCategory(id, e) {
        e.preventDefault();
        setCatClick(id);
        setSelectedLoai(listdm.find((loai) => loai.id === id));
        setShowDealSPMoi(false);
        // alert(id)
    }
    useEffect(() => {
        fetch("http://localhost:3000/loai")
            .then((res) => res.json())
            .then((data) => setListDM(data));
    }, []);


    return (
        <div className="dssp">
            <section className="hot-product">
                <div className="container">
                    <div className="title-dm">
                        <p>
                            Trang chu <span>Danh sach loai</span>{" "}
                        </p>
                    </div>
                    <div className="banner-img">
                        <img
                            width="100%"
                            src="https://www.tncstore.vn/media/banner/05_06-2da9e44c6a2c6dd28a2d1fa6bc67a7b8.jpg"
                            alt=""
                        />
                    </div>
                    <div className="hot-product-mains">
                        <div className="hot-product-listdm-sp-hot">
                            <div className="hot-product-title-dm">
                                <h2>Bộ lọc sản phẩm</h2>
                            </div>
                            <div className="hot-product-menu">
                                <h3>HÃNG SẢN XUẤT</h3>
                                <ul className="checkbox-list">
                                    {listdm.slice(0, 12).map((sp, i) => (
                                        <li key={i}>
                                            <div className="checkbox">
                                                <div className="checkbox-inner"></div>
                                            </div>
                                            <span> <a href="#/" onClick={(e) => clickCategory(sp.id, e)} key={sp.id} > {sp.ten_loai} </a> </span>
                                            <span className="total">7</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <SanPhamXemNhieu />
                        </div>
                        <div className="hotproduct-listsp">
                            <div className="hot-product-title row-gird">
                                <div className="product-title">
                                <h2>Tất cả sản phẩm: {selectedLoai?.ten_loai}</h2>
                                </div>
                                <div className="total-product">735 san pham</div>
                                <div id="frmtim">
                                    <h3>Hiển thị theo:</h3>
                                    <select>
                                        <option>Sắp xếp sản phẩm </option>
                                        <option>Mới nhất </option>
                                        <option>Giá tăng dần </option>
                                        <option>Giá giảm dần </option>
                                        <option>Đánh giá </option>
                                        <option>Tên A-Z </option>
                                    </select>
                                </div>
                            </div>
                            <div className="hot-product-main row-girds">
                            {showDealSPMoi && <DealSPMoi />}
                                {catclick && <Spcungloai id_loai={catclick} />}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
export default Dssp;
