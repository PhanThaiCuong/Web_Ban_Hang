import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { xoaSP, xoaGH, suaSL } from "./cartSlice";
import { Link } from "react-router-dom";

function ShowCart(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.listSP);
  const calculateTotalPrice = (sp) => {
    return sp.gia * sp.so_luong;
  };

  return (
    <div className="container">
      <div id="giohang">
        <h2>Giỏ hàng của bạn</h2>
        {cart.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Anh</th>
                <th>Số lượng</th>
                <th>Giá</th>
                <th>Thành tiền</th>
                <th>Chuc nang</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((sp, index) => (
                <tr key={index}>
                  <td>{sp.ten_sp}</td>
                  <td>
                    <img src={sp["hinh"]} alt="{sp['ten_sp']}" width={100} />
                  </td>
                  <td>
                    <input
                      type="number"
                      defaultValue={sp.so_luong}
                      onClick={(e) =>
                        dispatch(suaSL({ id: sp.id, sl: e.target.value }))
                      }
                    />
                  </td>
                  <td>{Number(sp.gia).toLocaleString("vi")} VNĐ</td>
                  <td>{calculateTotalPrice(sp).toLocaleString("vi")} VNĐ</td>
                  <td>
                    <button>
                      <a href="#/" onClick={() => dispatch(xoaSP(sp.id))}>
                        Xóa
                      </a>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Giỏ hàng trống!</p>
        )}
        <div className="giohang-buttons">
          <button onClick={() => dispatch(xoaGH())}>Xóa tất cả</button>
          <button>
            <Link to={cart.length > 0 ? "/thanhtoan" : "#/"}>Thanh toán</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowCart;
