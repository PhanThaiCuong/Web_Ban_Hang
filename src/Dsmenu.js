/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";


const Dsmenu = () => {
  const [listdm, setListDM] = useState([]);
  // const [catclick, setCatClick] = useState(null);
  // const [listsp, setListSP] = useState([]);

  //   let count = 0;

  //     listdm.forEach((loai) => {
  //       if (sp.id_loai === loai.id ) {
  //         count ++;
  //       }
  //     });
   
//  console.log(count);
function clickCategory(id,e) {
    e.preventDefault();
    alert(id)

  }
  
  useEffect(() => {
    fetch("http://localhost:3000/loai")
      .then((res) => res.json())
      .then((data) => setListDM(data));
    },[]);

  return (
    <ul className="checkbox-list">
      {listdm.slice(0, 12).map((sp, i) => (
        <li key={i}>
            <div className="checkbox">
                <div className="checkbox-inner"></div>
            </div>
            <span> <a href="#/" onClick={(e) => clickCategory(sp.id,e)} key={sp.id} > {sp.ten_loai} </a> </span>
            <span className="total">7</span> 
        </li> 
      ))}
    </ul>
  );
};

export default Dsmenu;
