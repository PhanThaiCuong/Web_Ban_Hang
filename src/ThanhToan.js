import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { xoaSP } from "./cartSlice";

function ThanhToan () {
  let htRef =  React.createRef();
  let emRef =  React.createRef();
  const cart = useSelector((state) => state.cart.listSP);
  const dispatch = useDispatch();
  const submitDuLieu = () =>{
    let ht = htRef.current.value;
    let em = emRef.current.value
    if ( ht ==="" || em ==="") 
    { alert("Điền đầy đủ dữ liệu"); return; }
    if(cart.length === 0) { alert("Ban chua chon san pham nao"); return; }
    if (!em.includes("@")) {
      alert("Email không hợp lệ");
      return;
    }
    let url = "http://localhost:3000/luudonhang";
    let tt = {ho_ten:htRef.current.value, email:emRef.current.value};
    var opt = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tt),
        
    }
    fetch(url, opt).then (res => res.json()
    ).then ( data => {
        if (data.id_dh < 0) console.log("Loi luu don hang", data)
        else {
            let id_dh = data.id_dh;
            alert("Đã lưu đơn hàng: " + id_dh);
            luuchitietdonhang(id_dh, cart);
            window.location.reload();
        }
    });
  }
  const luuchitietdonhang = (id_dh, cart) => {
    let url = "http://localhost:3000/luugiohang";
    cart.forEach((sp) => {
        let t = {id_dh:id_dh, id_sp:sp.id, so_luong:sp.so_luong};
        let opt = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(t)}               
        fetch(url, opt).then (res => res.json() 
        ).then ( data => luuxongsp(data))
        .catch (err => console.log('loi luu san pham', err));
    });
  }
  const luuxongsp = (data) => {
    console.log(data);
    dispatch( xoaSP(data.id_sp) ) ;
  }


  return (
    <div className="container">
    <form id="frmthanhtoan" > <h2>Thanh toán đơn hàng</h2> 
     <div><label>Họ tên</label> <input ref={htRef} type="text"/> </div>     
     <div> <label>Email</label> <input ref={emRef} type="email"/> </div>
     <div><button onClick={()=>submitDuLieu()} type="button">Lưu đơn hàng</button></div>
    </form>
    </div>
);
}



export default ThanhToan;
