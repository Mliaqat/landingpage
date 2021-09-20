import React from 'react'
import Contenttext from '../../Component/Contenttext';
import img from '../../Assest/body-img1.jpg'


function Content() {
    return (
        <>
        <div className="container">
        <div className="row my-5">
            <div className="col-lg-6 col-sm-12">
                <img src={img} className="img-fluid p-5" alt="" srcset=""/>
            </div>
            <div className="col-lg-6 col-sm-12">
             <Contenttext/>
            </div>
        </div>
    </div>
     <div className="container">
     <div className="row my-5">
         <div className="col-lg-6 col-sm-12 my-5 ">
         <Contenttext/>
              
         </div>
         <div className="col-lg-6 col-sm-12 my-5 order-md-1">
             <img src={img} className="img-fluid p-5  " alt="" srcset=""/>
         </div>
     </div>
 </div>
 </>
    )
}

export default Content;
