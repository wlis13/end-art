import React, { useEffect } from "react";
import '../style/First.css';
import arrImages from "../data/arrData";
import Header from "./header";

function FirstPage() {

  function orderImages() {
    const secondElement = document.querySelectorAll('.images-firtspage');
    for (let index = 0; index < secondElement.length; index += 1) {
      if (index % 2 === 0) {
        secondElement[index].classList.add('order-first');
      }       
    }
  }

  useEffect(() => {
    orderImages();
  }, []);

  return (
    <div className="main-firstpage">
      <Header />
      <div className="main-cards">
        {arrImages.map((iten, index) => (
          <div key={ index } className="container-images">
            <img className="images-firtspage" src={ iten.image } alt={`bolsa ${ index }`} />
            <div>
              <h3>{iten.name}</h3>
              <h1>{`R$${iten.price}`}</h1>
              <p>{iten.description}</p>
              <button type="button">Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default FirstPage;