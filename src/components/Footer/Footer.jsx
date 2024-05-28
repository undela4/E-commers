import React from 'react';
import './footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";  
import { FaTwitter } from "react-icons/fa6"; 
import {Bandage} from  'D:/Projects/E-commers/E-commers/src/assets/img.js';
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";


export default function Footer() {
  return (
    <>
    <div className="footer containe">

        <div className="head d-flex justify-content-around">
            <div className="logo">
                <img src={Bandage} />
            </div>
            <div className="d-flex gap-5">
                <a href="#"><FaFacebook  className='icon' /></a>
                <a href="#"><FaInstagram className='icon'/></a>
                <a href="#"><FaTwitter   className='icon'/></a>

            </div>
        </div>

        <div className="body row mt-5">
        
                <Items title="Company Info" linkes={['About Us',"Carrier","We are hiring","Blog"]}/>
                <Items title="Customer Service" linkes={['Delivery Information',"Returns Policy","Pricacy Policy","Cookie Policy","Secure Shopping"]}/>
                <Items title="Order & Purchase" linkes={['Check Order Status',"Shipping,Delivery & Pickup"," Returns & Exchange","Gift Cards"]}/>
                <Items title="Payment Methods" linkes={[<FaCcVisa  style={{fontSize:"30px"}}/>,<FaCcMastercard style={{fontSize:"30px"}}/>,<FaGooglePay style={{fontSize:"30px"}}/>,<FaAmazonPay style={{fontSize:"30px"}} />,]}/>
              
            <div className="col-4">
            <h4>Get In Touch</h4>
                
            <div class="input-group mb-3">
            <input type="text" className="form-control" style={{height:"50px"}} placeholder="Your Email" 
            aria-label="Recipient's username" aria-describedby="basic-addon2"/>

            <span className="input-group-text btn btn-primary text-center pt-2" id="basic-addon2">subscribe</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>

            </div>

        </div>

        <div className="tail">
        Made With Love By Undela All Right Reserved 

        </div>
    </div>
      
    </>
  )
}


function Items({title,linkes})
{
    return(
        <div className="col-2">
        <h5 className='fw-bold'>{title}</h5>

      
               {
                linkes.map((link)=>{
                    return(
                        <div className="mt-3 ">
                        <a href="#" className="text-dark text-decoration-none" >{link}</a>

                        </div>
                    )
                })
               }
         
    </div>
    )
}