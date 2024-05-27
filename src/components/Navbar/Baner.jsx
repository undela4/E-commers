import React,{useRef} from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";  
import { FaTwitter } from "react-icons/fa6"; 


export default function Baner() {

  const r=useRef(null);
  
  return (
    <div className='banner containe text-light' ref={r} style={{display:"block"}} >

      <div className="content">

        <div className="d-flex gap-5">
       <div className="">
       <IoCallOutline /><span> +91 8688569070  </span>

       </div>
       <div className="">
       <MdAttachEmail /><span> muraliundela143@gmail.com</span>

       </div>
   
        </div>

        <div className="">
          <h6>Follow Us  and get a chance to win 80% off</h6>
        </div>

        <div className="d-flex gap-3 align-items-center">
          <h6>Follow Us :  </h6>
          <FaYoutube   className='fs-5'/>
          <FaFacebook  className='fs-5'/>
          <FaInstagram className='fs-5'/>
          <FaTwitter   className='fs-5'/>
          <button type="button" onClick={()=>{r.current.style.display="none" }} class="ms-5 btn-close btn-close-white" aria-label="Close"></button>

        </div>

      </div>

    </div>
  )
}
