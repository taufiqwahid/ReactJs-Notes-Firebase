import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import thunk from "redux-thunk";

//MEMBUAT STORE DATA DARI STATE YANG DI INISIALISASI DARI REDUCER
export const store = createStore(reducer, applyMiddleware(thunk));

// ALUR DARI REDUCER KE PEMBUATAN STORE TERUS KE APLIKASI PENGIMPLEMENTASIAN NYA (DI LOGIN)

// REDUCER
// VCREATE STORE(REDUCER)
// CONNECT (STATE, DISPATCH)

// SETELAH ITU LALU MENGGUNAKAN
