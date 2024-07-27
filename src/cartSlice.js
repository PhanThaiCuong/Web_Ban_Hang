import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: "cart",
    initialState: {listSP: []},
    reducers: {// start reducers
        themSP: (state, param) => {      
            let sp = param.payload; //tham so la sp = {'id': 1, 'so_luong': 1}
            let index = state.listSP.findIndex((s) => s.id === sp.id);  
            if (index === -1) { // sp ko cos trong gio hang
                sp["so_luong"] = 1;
                state.listSP.push(sp);
            } else {
                state.listSP[index]["so_luong"]++;  // Increment the quantity
            } 
        },
        
        suaSL: (state, action) => {
            const { id, sl } = action.payload;
            const index = state.listSP.findIndex((s) => s.id === id);
            if (index !== -1) {
                state.listSP[index].so_luong = parseInt(sl, 10); // Chuyển đổi sl từ chuỗi sang số nguyên
                console.log("Sửa thành công", action.payload);
            }
        },
        
        xoaSP: (state, action) => {
            let id = action.payload;
            const index = state.listSP.findIndex(s => s.id === id);
            if (index !== -1) {
                state.listSP.splice(index, 1);  
                console.log("xoa thanh cong", action)
            }
        },
        xoaGH: state => {
            state.listSP = [];
        }
    },// end reducers
});
export const { themSP, suaSL, xoaSP, xoaGH } = cartSlice.actions;
export default cartSlice.reducer;