import React from 'react';
import { Carddata } from '../../Carddata';
import Cardscomponent from '../../Component/Cardscomponent';

import './Cards.scss';

function Cards() {
    return (
        <div className="countainer">
            <div className="row">
                <div className="col">
                    <h1 className="earining-heading">Unlock a Better ROI & <br/>
                        Make Dreams Come True</h1>

                </div>
            </div>
        <div className="row justify-content-center text-center g-4">
                
                {
                    Carddata.map((val,indx)=>{

                 return       <Cardscomponent key={indx} h1={val.heading} text={val.text} />  

                    })

                }
                      
                                 

               
                              
            </div>
            </div>
    )
}

export default Cards;
