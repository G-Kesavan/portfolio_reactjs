import React,{useState} from 'react'
import './Contact.css'
import {db} from '../../API/ContactAPI.jsx'
import { collection,addDoc } from 'firebase/firestore'
import { IoLogoWhatsapp,IoLocation,IoCopyOutline} from "react-icons/io5";
import { FaPhone} from "react-icons/fa6";
import { SiGmail} from "react-icons/si";
import { FaUserEdit} from "react-icons/fa";
import { IoMdCall } from 'react-icons/io';
import { PiLinkedinLogo,  PiTelegramLogo} from 'react-icons/pi';

const Contact = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  
  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      await addDoc(collection(db,"contacts"),{
      name,
      email,
      message,  
    });

    alert('message has been submitted');
    setname('');
    setemail('');
    setmessage('');
    }
    catch(error){
      alert(error.message);
    }
  };

  const copyFun = (x)=>{

    const selectorMap={
      Name:'copyName',
      Mail:'copyMail',
      Number:'copyPhone',
      Location:'copyLocation',
    }

    const copyText =document.querySelector(`.${selectorMap[x]}`)
    const textToCopy= copyText.textContent;
    navigator.clipboard.writeText(textToCopy);
  }
  return (
    <section className='ContactPage'>
      <form className='contactForm' onSubmit={handleSubmit}>
        <h2>Contact Me</h2>

        <div className='inputcon name'>
          <label className='label' htmlFor='name'>Name :</label>
          <input autoComplete='name' id='name' type='text'  required  value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter the name'></input>
        </div>

        <div className='inputcon email'>
          <label className='label' htmlFor='mail'>From :</label>
          <input autoComplete='name' id='mail' type='email' required  value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter the email'></input>
        </div>
        <div className='message'>
          <label className='label' htmlFor='message'>Message :</label>
          <textarea autoComplete='name' id='message' value={message} onChange={(e)=>setmessage(e.target.value)} placeholder='Enter the message'></textarea>
        </div>

        <button className='formBtn'>Submit</button>
      </form>
      <div className='link'>
        <div className='contact-details'>
          <strong>Get in touch with us for inquiries, support, or feedback.We're here to hel you every step of the way....</strong>
          <ul className='show-link'>
            <li><FaUserEdit/><p className='copyName'>Kesava Perumal G</p><IoCopyOutline className='iconHover' onClick={()=>copyFun('Name')}/></li>
            <li><SiGmail/><p className='copyMail'>mr.kesavaperumal@gmail.com</p><IoCopyOutline className='iconHover' onClick={()=>copyFun('Mail')}/></li>
            <li><FaPhone /><p className='copyPhone'>+91 63 74 79 02 92</p><IoCopyOutline className='iconHover' onClick={()=>copyFun('Number')}/></li>
            <li><IoLocation/><p className='copyLocation'>8/277, Velikunan Kurichi, Virudhachalam TK, Cuddaloar, Tamil nadu - 607 804 ...</p><IoCopyOutline className='iconHover' onClick={()=>copyFun('Location')}/></li>
          </ul>
        </div>
        <ul className='touch-link'>
          <li ><a href='https://wa.me/6374790292'><IoLogoWhatsapp fontSize='40px'/></a></li>
          <li><a href='tel:+916374790292'><IoMdCall fontSize='40px'/></a></li>
          <li><a href='https://www.linkedin.com/in/kesavan-bca?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><PiLinkedinLogo fontSize='40px'/></a></li>
          <li><a href='https://t.me/KESAVAN420BOY'><PiTelegramLogo fontSize='40px'/></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact