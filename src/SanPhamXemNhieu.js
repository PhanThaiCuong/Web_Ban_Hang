import React from "react";
import { useState, useEffect } from "react";

const SanPhamXemNhieu= (props) => {
    const [listspxn, setListXN] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/spxn")
      .then((res) => res.json())
      .then((data) => setListXN(data));
  }, []);
  return (
    <div className="hot-product-spxn">
      <h3> Sản phẩm hot nhất</h3>
    {listspxn.slice(0, props.sotin).map((sp, i) =>
        <div className="sp" key={i}> {sp['ten_sp']} </div>)}
    </div>
  )
    

}

export default SanPhamXemNhieu;