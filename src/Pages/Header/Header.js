import React from 'react'
import img from '../../Assest/body-img.png'
import Button from '../../Component/Button';
import './Header.scss'

function Header() {
    return (

        <div className="row">
            <div className="col-10 text-margin">
                <div className="row justify-content-around align-items-center header ">
                    <div className="col-lg-8 col-sm-12">
                        <article>
                            <h1 className="heading my-5">Do a good DEED Staking <br />
                                + earn a 10% APY</h1>
                            <p className="text">Stiff Money offers Depositors a 10% APY on deposited funds, plus helps others
                                become homeowners</p>
                            <article className="d-flex justify-content-center mb-5">

                                <span className="marginbtn"> <Button /> </span>
                                <span className="ml-5 "> <Button /> </span>
                            </article>
                            <p className="text ">Stiff Money offers Depositors a 10% APY on deposited funds, plus helps others
                                become homeowners</p>
                        </article>
                    </div>
                    <div className="col-lg-4 col-sm-12 ">
                        <picture>
                            <img className="header-img" src={img} alt="Image" srcset="" />
                        </picture>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;
