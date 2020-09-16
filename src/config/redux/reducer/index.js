// INISIALISASI DATA YANG INGIN DIGUNAKAN DI PROPS
// UNTUK DI KIRIM KAN KE STORE

const initialState = {
  //membuat nilai state/ props data
  isTitlePage: "Dashboard Page",
  popUp: "PopUp",
  isLoading: false,
  isLogin: false,
  isUser: {},
};

// data yang sudah di ubah dikirim kembali ke state global
const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE_ISTITLEPAGE") {
    return {
      ...state,
      isUser: action.value,
    };
  }
  if (action.type === "CHANGE_POPUP") {
    return {
      ...state,
      popUp: action.value,
    };
  }
  if (action.type === "CHANGE_ISLOADING") {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  if (action.type === "CHANGE_ISLOGIN") {
    return {
      ...state,
      isLogin: action.value,
    };
  }
  if (action.type === "CHANGE_ISUSER") {
    return {
      ...state,
      isUser: action.value,
    };
  }
  return state;
};

//menggunakan default karena tidak menggunakan kurung kurawal
export default reducer;
