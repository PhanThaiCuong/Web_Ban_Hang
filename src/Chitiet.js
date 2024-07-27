import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Splienquan from "./Splienquan";
function Chitiet() {
    let { id } = useParams();
    const [sp, ganSP] = useState([]);
    useEffect(() => {
        let url = `http://localhost:3000/sp/${id}`;
        fetch(url).then(res=>res.json()).then(data => ganSP(data));
    }, [id]);

    return ( 
    <div className="detail">
                <div className="container">
            <h1>Chi tiet san pham</h1>
            <div className="chitietSanpham" style={{ marginBottom: '100px' }}>
                    <h1>{sp['ten_sp']}</h1>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span> đánh giá</span>
                    </div>
                    <div className="rowdetail group">
                        <div className="picture">
                        <img src={sp['hinh']} alt={sp['ten_sp']} />
                        </div>
                        <div className="price_sale">
                            <div className="area_price">
                                <strong>{Number(sp['gia']).toLocaleString("vi")} VNĐ</strong>
                            </div>
                            <div className="ship" style={{ display: 'none' }}>
                                <img src="img/chitietsanpham/clock-152067_960_720.png" alt="Giao hàng nhanh"/>
                                <div>NHẬN HÀNG TRONG 1 GIỜ</div>
                            </div>
                            <div className="area_promo">
                                <strong>Khuyến mãi</strong>
                                <div className="promo">
                                    <img src="img/chitietsanpham/icon-tick.png" alt="Khuyến mãi" />
                                    <div id="detailPromo">
                                        Khách hàng sẽ được giảm {Number(sp['gia_km']).toLocaleString("vi")} VNĐ khi tới mua trực tiếp tại cửa hàng 
                                    </div>
                                </div>
                            </div>
                        <div className="policy">
                            <strong>Quà tang uu dai</strong>
                            <div>
                                <img src="img/chitietsanpham/box.png" alt ="Quà tang uu dai" />
                                <p>Trong hộp có: Sạc, Tai nghe, Sách hướng dẫn, Balo</p>
                            </div>
                            <div>
                                <img src="img/chitietsanpham/icon-baohanh.png" alt="Bảo hành chính hãng" />
                                <p>Bảo hành chính hãng 12 tháng.</p>
                            </div>
                            <div className="last">
                                <img src="img/chitietsanpham/1-1.jpg" alt="1 đồi 1 trong 1 tháng" />
                                <p>1 đổi 1 trong 1 tháng nếu lỗi, đổi sản phẩm tại nhà trong 1 ngày.</p>
                            </div>
                        </div>
                        <div className="area_order">
                        <button> <a href="#/" className="buy_now">
                                <b><i className="fa fa-cart-plus"></i> Thêm vào giỏ hàng</b>
                                <p>Giao trong 1 giờ hoặc nhận tại cửa hàng</p>
                            </a>
                        </button>
                        </div>
                    </div>
                    <div className="info_product">
                        <h2>Thông số kỹ thuật</h2>
                        <table className="info">
                            <thead>
                                <tr>
                                    <th>Thông số</th>
                                    <th>Chi tiết</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CPU</td>
                                    <td>{sp['cpu']}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{sp['ram']}</td>
                                </tr>
                                <tr>
                                    <td>Ổ lưu trữ</td>
                                    <td>{sp['dia_cung']}</td>
                                </tr>
                                <tr>
                                    <td>Màu sắc</td>
                                    <td>{sp['mau_sac']}</td>
                                </tr>
                                <tr>
                                    <td>Trọng lượng</td>
                                    <td>{sp['can_nang']}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Splienquan id_loai={sp.id_loai} />
                    
                </div>
            </div>
        </div>
    </div>

     );
};
export default Chitiet;
