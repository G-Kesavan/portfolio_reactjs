import React from 'react';
import './Biodata.css';
import Photo from '/Images/MyPhotos/MyPhoto.png';

const Biodata = () => {
  return (
    <section className='BiodataPage'>
      <div className='personal-details'>
        <div className='image'>
          <img src={Photo} alt='Profile' />
        </div>

        <div className='self-details'>
          <p><label>Name</label>:&nbsp;Kesavan</p>
          <p><label>Age</label>:&nbsp;22</p>
          <p><label>DOB</label>:&nbsp;09/03/2003</p>
          <p><label>Gender</label>:&nbsp;Male</p>
          <p><label>Quals</label>:&nbsp;BCA</p>
          <p><label>Batch</label>:&nbsp;2025</p>
        </div>

        <ul className='my-location'>
          <li><strong>Address :</strong><p>8/277, Velikunan Kurichi, Virudhachalam TK, Cuddalore, Tamil Nadu - 607804</p></li>
          <li><label>Marital Status</label>:&nbsp;<p>Single</p></li>
          <li><label>Nation</label>:&nbsp;<p>India</p></li>
          <li><label>State</label>:&nbsp;<p>Tamil Nadu</p></li>
          <li><label>(MT)</label>:&nbsp;<p>Tamil</p></li>
        </ul>
      </div>

      <div className='education-details'>
        <ul className='education-ul'>
          <li>
            <div className='edu-detail'>
              <h3>SSLC</h3>
              <h4>State Board of Tamil Nadu</h4>
              <p>(NLC Her Sec Re School, Mandarakuppam)</p>
              <p>2017 to 2018</p>
            </div>
          </li>
          <li>
            <div className='edu-detail'>
              <h3>HSS</h3>
              <h4>State Board of Tamil Nadu</h4>
              <p>(NLC Her Sec Re School, Mandarakuppam)</p>
              <p>2018 to 2020</p>
            </div>
          </li>
          <li>
            <div className='edu-detail'>
              <h3>Apprenticeship</h3>
              <h4>Ministry of Skill Development</h4>
              <p>NLC (Neyveli Lignite Corporation)</p>
              <p>2020 to 2022</p>
            </div>
          </li>
          <li>
            <div className='edu-detail'>
              <h3>BCA</h3>
              <h4>Annamalai University</h4>
              <p>(Jawaher Science College, Neyveli-2)</p>
              <p>2022 to 2025</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Biodata;
