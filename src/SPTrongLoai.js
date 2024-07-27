import { useParams } from "react-router-dom";
//import { listloai, listsp } from "./data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { useDispatch } from "react-redux";
import { themSP } from "./cartSlice";
function SPTrongLoai() {
  let { id_loai } = useParams();
  const [list_sp, ganListSP] = useState( [] );
  const [loai, ganLoai] = useState ("");
  useEffect( () => {
    fetch(`http://localhost:3000/sptrongloai/${id_loai}`)
    .then( res => res.json()).then( data => ganListSP(data) );
    fetch(`http://localhost:3000/loai/${id_loai}`)
    .then( res => res.json()).then( data => ganLoai(data) );
  } , [id_loai] );

  return (
    <section className="hot-product">
    <div className="container">
        <div className="hot-product-title row-gird">
            <p>Sản phẩm trong loai {loai['ten_loai']}</p>
        </div>
        <PhanTrang listSP={list_sp} pageSize={4} /> 
    </div>
    </section>

  );
}
function HienSPTrongMotTrang({ spTrongTrang }) {
  const dispatch = useDispatch();
  return (        
  <div className="girds-product">
    <div className="hot-product-main row-girds">
    <div className="hot-product-main-items row-gird">
    { spTrongTrang.map( (sp, index)=>{ return (

        <div className="hot-product-main-item" key={index}>
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
        )}
    </div>
    </div>
    
    </div>);
} //HienSPTrongMotTrang


function PhanTrang({ listSP, pageSize }) {
  const [fromIndex, setfromIndex] = useState(0);
  const toIndex = fromIndex + pageSize;
  const spTrong1Trang = Array.isArray(listSP) ? listSP.slice(fromIndex, toIndex) : [];
  const tongSoTrang = Math.ceil(listSP.length / pageSize);
  const chuyenTrang = (event) => {
    const newIndex = (event.selected * pageSize) % listSP.length;
    setfromIndex(newIndex);
  };
  return (
   <div> <HienSPTrongMotTrang spTrongTrang={spTrong1Trang} />
         <ReactPaginate nextLabel=">" previousLabel="<" pageCount={tongSoTrang} 
           pageRangeDisplayed={5} onPageChange={chuyenTrang} className="thanhphantrang" 
         />
   </div>);
}//PhanTrang

export default SPTrongLoai;
