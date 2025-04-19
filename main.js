const qrinput = document.getElementById('qr-input');
const qrbutton = document.getElementById('qr-button');
const qrimg = document.getElementById('qr-img'); 

console.log(qrinput,qrbutton,qrimg);

qrbutton.addEventListener('click',() =>{
  
  const inputvalue =qrinput.value;
  console.log(inputvalue)
  
  if (!inputvalue ){
   alert('please inter something')
   return;
  } else {
   qrimg.src= `http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
   qrimg.alt= `qr code for ${inputvalue}`; 
   
  }
 
})