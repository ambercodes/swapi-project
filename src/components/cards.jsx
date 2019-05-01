import React from 'react';
import lukeSkywalker from '/Users/work/Desktop/swapi-project/swapi-project/src/images/lukeSkywalker.png';
import darthVader from '/Users/work/Desktop/swapi-project/swapi-project/src/images/darthVader.png';
import princessLeia from '/Users/work/Desktop/swapi-project/swapi-project/src/images/princessLeia.png';
import yoda from '/Users/work/Desktop/swapi-project/swapi-project/src/images/yoda.png';
import c3p0 from '/Users/work/Desktop/swapi-project/swapi-project/src/images/c3p0.png';
import Card from 'react-bootstrap/Card';

function Cards() {
 return(
    <div className="cards-container">

      <div className="card-container">
        <div className="card">
          <div className="front">
    <img src={lukeSkywalker}/>
          </div>
          <div className="back">
    <img src={lukeSkywalker}/>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="front">
    <img src={darthVader}/>
          </div>
          <div className="back">
    <img src={darthVader}/>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="front">
    <img src={yoda}/>
          </div>
          <div className="back">
    <img src={yoda}/>
          </div>
        </div>
      </div>


      <div className="card-container">
        <div className="card">
          <div className="front">
    <img src={princessLeia}/>
          </div>
          <div className="back">
    <img src={princessLeia}/>
          </div>
        </div>
      </div>


      <div className="card-container">
        <div className="card">
          <div className="front">
    <img src={c3p0}/>
          </div>
          <div class="back">
    <img src={c3p0}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
