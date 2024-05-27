import React from 'react'

export default function Card({img,title,category,price,delprice,colors}) {
  return (
    <>
      <div className="card-item col-3">
            <div className="card-img">
                <img src={img} alt="img"/>

            </div>
            <div className="card-content container d-flex flex-column gap-1">
                        <h5 className='fw-bold' >{title}</h5>
                        <a href="">{category}</a>
                        <div className="prices d-flex justify-content-center gap-3">
                            <h5 className='text-secondry'><del>₹{delprice}</del></h5>
                            <h5 className='text-dark'>₹{price}</h5>
                        </div>
                        <div className="colors d-flex gap-3 justify-content-center">

                        {
                            colors.map((color,index)=>{
                                return(

                                   
                                    <div className="rounded-circle" 
                                     style={{backgroundColor:color}}>
                                      
                                    </div>
                    
                                )
                            })
                        }
                        </div>
                       
                    </div>
                </div>
    </>

  )
}
