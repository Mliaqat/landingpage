import React from 'react'
import Button from '../../Component/Button';
import img from '../../Assest/nav-img.png'

function Navbar() {
    return (
        <div className="container-fluid">

            <div className="row pt-4 ">

                <div className="col-8 mx-auto d-flex align-items-center">
                    <div><img src={img}></img>
                    </div>
                    <div className="ml-auto">
                        <Button />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Navbar
