import {connect} from 'react-redux' 
import {Provider} from 'react-redux'
import {createStore} from 'redux'

// menginisialisasikan data apa yang akan dapt digunakan sebagai data state global management
const initialisasiState = {
  data1: "data1",
  data2: "data2",
};

//membuat reducer untuk sekiranya akan ada state yang akan diubah kelak
const reducer = (state = initialisasiState, action) => { //membuat parameter yang nantinya akan dikirim ke store sebagai state
  if (action.type === "CHANGE_DATA1") { //jika distore nanti mendeteksi adanya action type dengn nilai yang sama maka data state akan di ubah
    return {
      ...state, //separator sebagai mengisi state awal yang sudah ada
      data1: "data1 yang telah diubah", //mengganti nilai data state dengan properti dan value yang sama
    };
  }

  if (action.type === "CHANGE_DATA2") {
    return {
      ...state,
      data2: "data 2 yang telah diubah",
    };
  }
};

const store = createStore(reducer); //menampung semua state yang dibuat kedalam store untuk disimpan ke store provider untuk digunakan sebagai state global


//komponen pembungkus komponen anak yang akan memiliki state yang sama
<Provider store={store}> // menyimpan data state global ke dalam store sebagai penampung state
   <semuakomponent>Komponen disini</semuakomponent> //komponen yang akan di gunakan 
</Provider>;




//komponent yang akan digunakan
function semuakomponent() { 
  <p>
    {this.props.data1Props} // menampilkan data global state management yang didapatkan dari connect 
  </p>
  <button onClick={changeData1}></button> // memanggil fungsi click dari data dispatch reducer untuk mengubah state yang ada pada store
}

//mengambil data state global dari penampung store untuk dijadikan data baru 
const reduxState = (state)=>{  //menggunakan parameter state untuk menginisialisasi data yang didapat pada connect
    return{
        data1Props : state.data1, //membuat data baru dengan nilai data dari state global
        data2Props: state.data2 //membuat data baru dengan mengambil data yang sudah ada di store untuk di tampilkan
    }
}
//fungsi yang digunakan click button yang berguna untuk mengubah reduncer dispatch global state 
const changeData1 = ()=>{
    this.props.changedata1Props // memnggil data yang sudah di ubah
}

//fungsi mengubah data global pada store
const dispatchState = (dispatch)=>{ // membuat parameter untuk digunakan sebagai penampung pada reducer yang akan berfungsi sebafai dispatch
    return { //mengembalikan nilai
        changedata1Props : ()=> dispatch({type:"CHANGE_DATA1",value:"GANTI DATA 1 MENGGUNAKAN DISPATCH"}) // membuat objek baru yang berisikan data dispatch untuk mengganti data pada store/reducer sesuai type dan value yang dikirim
    }
}

export connect(reduxState, dispatchState) (semuakomponent); //mengekspor connect yang berisikan data pada komponen ini ( mengambil state global, mengubah state global ) dan mengeksportnya kembali
