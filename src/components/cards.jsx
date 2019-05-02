import React from 'react';
import lukeSkywalker from './images/lukeSkywalker.png';
import darthVader from './images/darthVader.png';
import princessLeia from './images/princessLeia.png';
import yoda from './images/yoda.png';
import c3p0 from './images/c3p0.png';

function Cards() {
 return(
    <div className="cards-container">

      <div className="card-container">
        <div className="card">
          <div className="front">
    <img src={lukeSkywalker} alt="Symbol icon of Luke SkyWalker"/>
          </div>
          <div className="back">
    <img src={lukeSkywalker} alt="Symbol icon of Luke SkyWalker"/>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="front">
    <img src={darthVader} alt="Symbol icon of Darth Vader"/>
          </div>
          <div className="back">
    <img src={darthVader} alt="Symbol icon of Darth Vader"/>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="front">
    <img src={yoda} alt="Symbol icon of Yoda"/>
          </div>
          <div className="back">
    <img src={yoda} alt="Symbol icon of Yoda"/>
          </div>
        </div>
      </div>


      <div className="card-container">
        <div className="card">
          <div className="front">
    <img src={princessLeia} alt="Symbol icon of Pricess Leia"/>
          </div>
          <div className="back">
    <img src={princessLeia} alt="Symbol icon of Pricess Leia"/>
          </div>
        </div>
      </div>


      <div className="card-container">
        <div className="card">
          <div className="front">
    <img src={c3p0} alt="Symbol icon of c3p0"/>
          </div>
          <div className="back">
    <img src={c3p0} alt="Symbol icon of c3p0"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
