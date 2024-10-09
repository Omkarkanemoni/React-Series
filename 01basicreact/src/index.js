import React from 'react'; //core foundational library
import ReactDOM from 'react-dom/client';// ye 2 library ko use karke web ke dom ko manipulate karsakte hai and 
//react dom iska implementation hai web pe and react native react ka implentation hai mobile apps pe 
//react creates its own virtual dom and uske baad ye real dom se compare kartha hai ki kitna difference hai uske baad sirf vohi vohi element change karta jinki zarurat ho, dusra nahi karte hai
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />  {/*jsx - javascript ke through html element render karte hai  */}
  </React.StrictMode>
);



