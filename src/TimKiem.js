import React from "react";

function TimKiem() {
  return (
    <div className="header-top-search row-gird">
      <form action="" method="post" className="header-top-form" role="search">
        <input type="text" placeholder="Tiếm kiếm sản phẩm" />
        <button type="submit">
          <a href="#/">Tim kiem<i className="fa-solid fa-magnifying-glass"></i></a>
        </button>
      </form>
    </div>
  );
}

export default TimKiem;