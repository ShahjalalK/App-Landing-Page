import React, { useState } from 'react'
import {data} from './Data'
import './According.css'

const According = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
      if (clicked === index) {
        //if clicked question is already active, then close it
        return setClicked(null);
      }
  
      setClicked(index);
    };
    return (
        <>
    
          {data.map((item, index) => {
            return (
              <>
              <section className="card">
                <div className={clicked === index ? "card-header active" : "card-header" }  onClick={() => toggle(index)} key={index}>
                  <h3>{item.question}</h3>
                  <span>{clicked === index ? <i className="fas fa-minus" ></i> : <i className="fas fa-plus" ></i>}</span>
                </div>
                {clicked === index ? (
                  <div className={ clicked === index ? 'card-body active' : 'card-body' }>
                    <p>{item.answer}</p>
                  </div>
                ) : null}
                </section >
              </>
            );
          })}
      
        </>
    )
}

export default According
