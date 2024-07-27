import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [, setListDM] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/loai")
      .then((res) => res.json())
      .then((data) => setListDM(data));
  }, []);

  return (
    <ul className="row-flex">
      <li>
        <Link to={"/"}>Trang chủ</Link>
      </li>
      <li>
      <Link to={"/dsanpham"}> Danh sách sản phẩm </Link>
      </li>
      <li>
      <Link to={"/dsanpham"}> Giới thiệu </Link>
      </li>
      <li>
      <Link to={"/dsanpham"}> Về chúng tôi </Link>
      </li>
    </ul>
  );
};

export default Menu;
