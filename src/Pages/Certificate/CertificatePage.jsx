import React from 'react'
import certificate_1 from '/Images/Certificates/Web Development.jpg'
import certificate_3 from '/Images/Certificates/AI Foundations Associate-1.jpg'
import certificate_4 from '/Images/Certificates/Foundations Associate-1.jpg'
import certificate_5 from '/Images/Certificates/Software Testing-1.jpg'
import certificate_2 from '/Images/Certificates/WORKSHOP PARTICIPATION CERTIFICATE-1.jpg'
import './Certificate.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Certificate = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  
  const certificates=[
    {
      key:1,
      name:'CodSoft Intership Web Development',
      image:certificate_1,
      detail:'Completed virtual web development internship at CodSoft, gaining hands-on experience in ReactJS, HTML, CSS, JavaScript, and real-world frontend development.'
    },
    {
      key:2,
      name:'WORKSHOP PARTICIPATION',
      image:certificate_2,
      detail:'Attended AI-enhanced web development workshop by Guha Industrial Solutions, learning to integrate AI, Web3, blockchain, and emerging technologies to build modern, intelligent, and decentralized websites.'
    },
    {
      key:3,
      name:'AI Foundations Associate',
      image:certificate_3,
      detail:'Achieved AI Foundations Associate certification from Oracle, gaining foundational knowledge in artificial intelligence concepts, machine learning algorithms, and real-world AI applications for modern business solutions.'
    },
    {
      key:4,
      name:'Foundations Associate',
      image:certificate_4,
      detail:'Achieved Oracle Foundations Associate certification, gaining a comprehensive understanding of core concepts, tools, and practices essential for building a strong foundation in technology and business solutions.'
    },
    {
      key:5,
      name:'Software Testing',
      image:certificate_5,
      detail:'Completed a basic software testing course through Naan Mudhalvan by OpenMentor, gaining introductory knowledge of software quality concepts and fundamental testing principles used in development.'
    }
  ];
  const openImage = (key) => {
    const container = document.getElementById(key);
    if (!container) return; 
  
    const img = container.querySelector('img');
    const details = container.getElementsByClassName('datials')[0];
    const closeBtn = container.getElementsByClassName('closeBtn')[0];
  
    if (img) {
      img.style.height = '100%';
      img.style.width = 'auto';
    }
  
    if (details) {
      details.style.display = 'none';
    }

    if (closeBtn) {
      closeBtn.style.display = 'block';
    }
  };
  const closeImage = (key) => {
    const container = document.getElementById(key);
    if (!container) return;
  
    const img = container.querySelector('img');
    const details = container.getElementsByClassName('datials')[0];
    const closeBtn = container.getElementsByClassName('closeBtn')[0];
  
    if (img) {
      img.style.height = '50%';
      img.style.width = '100%';
    }
  
    if (details) {
      details.style.display = 'flex';
    }
    if (closeBtn) {
      closeBtn.style.display = 'none';
    }
  };

  return (
    <section className="CertificatePage embla" ref={emblaRef}>
    <div className="certificates">
      {certificates.map((certificate)=>(
        <div className="certificate" key={certificate.key} id={certificate.key}>
          <button className='closeBtn'onClick={()=>closeImage(certificate.key)}>X</button>
          <img src={certificate.image} alt='certificate' onClick={()=>openImage(certificate.key)}/>
          <div className='datials'>
            <h3>{certificate.name}</h3>
            <p>{certificate.detail}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default Certificate