
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { themSP } from "./cartSlice";
function Splienquan({ id_loai }) {
  const [list_sp, ganListSP] = useState([]);
  const [loai, ganLoai] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`http://localhost:3000/sptrongloai/${id_loai}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          ganListSP(data);
        }
      }
      );

    fetch(`http://localhost:3000/sp/${id_loai}`)
      .then((res) => res.json())
      .then((data) => ganLoai(data));
  }, [id_loai]);

  return (
    <section className="hot-product">
      <div className="container">
        <div className="hot-product-title row-gird">
          <p>Sản phẩm lien quan {loai["ten_loai"]}</p>
        </div>
        <div className="girds-product">
          <div className="hot-product-main row-girds">
            <div className="hot-product-main-items row-gird">
              {list_sp.slice(0, 4).map((sp, index) => {
                return (

                  <div className="hot-product-main-item" key={index}>
                    <img width={"100%"} src={sp['hinh']} alt="{sp['ten_sp']}" />
                    <div className="hot-product-main-item-content">
                      <h1><Link to={"/sp/" + sp.id} > {sp['ten_sp']} </Link></h1>
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
                )
              }
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}




export default Splienquan;
