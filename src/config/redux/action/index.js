import firebase from "../../firebase";

export const changeTitlePage = (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: "CHANGE_ISTITLEPAGE",
      value: "asdaasdasd",
    });
  }, 3000);
};

export const registerUserAPI = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_ISLOADING", value: true });
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log("Create = ", res);
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        alert("Sukses Menambahkan Data ke Firebase");
        resolve(true);
      })
      .catch((error) => {
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("errorCode = ", errorCode);
        console.log("errorMessage = ", errorMessage);

        if (errorMessage) {
          alert("Ada kesalahan dalam mengimput Email ataupun Password");
        }
        reject(false);
      });
  });
};

export const loginUserAPI = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_ISLOADING", value: true });
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        const dataUser = {
          uid: res.user.uid,
          email: res.user.email,
          verication: res.user.emailVerified,
        };

        console.log("SignIn = ", res);
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        dispatch({ type: "CHANGE_ISUSER", value: dataUser });
        alert("Sukses Login Menggunakan Firebase");
        resolve(true);
      })
      .catch((error) => {
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: false });
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("errorCode = ", errorCode);
        console.log("errorMessage = ", errorMessage);

        if (errorMessage) {
          alert("Ada kesalahan dalam mengimput Email ataupun Password");
        }
        reject(false);
      });
  });
};
