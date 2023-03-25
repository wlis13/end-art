import React from "react";
import '../style/First.css';
import arrImages from "../data/arrData";

function FirstPage() {

  return (
    <div>
      <div className="main-cards">
        {arrImages.map((iten, index) => (
          <div className="container-images">
            <img src={ iten.image } alt={`bolsa ${ index }`} />
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