
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
 
 const firebaseConfig = {
   apiKey: "AIzaSyDiJwd_I2hypDU9dflNPsL1SF9cab7hh0c",
   authDomain: "primeiro-projeto-4bca8.firebaseapp.com",
   projectId: "primeiro-projeto-4bca8",
   storageBucket: "primeiro-projeto-4bca8.appspot.com",
   messagingSenderId: "785956678971",
   appId: "1:785956678971:web:61a7b03b6cf6f2b1e69b1e"
 };

 const app = initializeApp(firebaseConfig);












function verificar(){
  let nome = document.getElementById('nome').value;
  let convidadoPor = document.getElementById('convite').value;
  
  let convidadosCristine = ['Danilo','Rodrigo','Daniel'];
  if(convidadosCristine.includes(nome)){
    document.getElementById('permissao').innerText = 'Voc� pode entrar!';
  }
  else{
    document.getElementById('permissao').innerText = 'Voc� N�O pode entrar!';
  }
  
};