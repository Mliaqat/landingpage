import React from 'react';
import './Moneycounter.scss'

function Moneycounter() {
    return (
        <div class="container-fluid bg">
        <div class="row justify-content-center justify-content-md-center">
            <div class="col-lg-6 col-sm-12 about">
                <h2>What Makes Stiff.Money Different</h2>
                <p>Depositors earn 10% APY on funds they deposit to Stiff.Money. To compare the most common interest
                    rate on savings accounts is .01%, though some credit unions and online bank accounts may offer
                    higher rates around 1.00% Annualized Percentage Yield (APY). Stiff.Money’s 10% APY offers
                    Depositors
                    on average 100X better ROI on deposited funds when compared to AVG savings account. And as an
                    added
                    benefit depositors are opening up homeownership to more people</p>
                <article class="counter">
                    <p><span class="counter-text">10%</span><br/> Deposit APY</p>
                    <p><span class="counter-text">20%</span><br/> Home Buyer APY</p>
                </article>
            </div>
        </div>

    </div>
    )
}

export default Moneycounter;
