import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { themSP } from "./cartSlice";
function DealSPMoi() {
   const [listsp, ganListSP] = useState( [] );
   const dispatch = useDispatch();
   useEffect ( () => {
      fetch("http://localhost:3000/spmoi/8")
      .then(res=>res.json()).then(data => ganListSP(data));
   } , []);

    return (
        <div className="hot-product-main-items row-gird">
            {listsp.slice(0, 9).map((sp,i) => 

            <div className="hot-product-main-item" key={i}>
                <img width={"100%"} src={sp['hinh']} alt="{sp['ten_sp']}"/>
                <div className="hot-product-main-item-content">
                <h1><Link to={ "/sp/" + sp.id } > {sp['ten_sp']} </Link></h1>
                    <div className="hot-product-item-review">
                        <div className="hot-product-item-review-star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p><span>0</span>danh gia</p>
                    </div>
                    <div className="hot-product-item-price">
                    <p className="price">{Number(sp['gia']).toLocaleString('vi')} VND</p>
                        <p className="sale-price">{Number(sp['gia_km']).toLocaleString('vi')} VND <span>10%</span></p>
                    </div>
                    <div className="hot-product-item-add">
                        <button><a href="#/" onClick={() => dispatch(themSP(sp))}>Thêm vào giỏ hàng </a></button>
                    </div>
                </div>
                <div className="hot-product-main-item-tag">
                    <span>Khuyến mãi</span>
                </div>
            </div> 

            )}
        </div>
    )
}

export default DealSPMoi