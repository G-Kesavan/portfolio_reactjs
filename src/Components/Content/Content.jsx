import React from 'react'
import './Content.css'
import Heading from './Heading'
import HomePage from '../../Pages/Home/HomePage.jsx'
import AboutPage from '../../Pages/About/AboutPage.jsx'
import ContactPage from '../../Pages/Contact/ContactPage.jsx'
import BiodataPage from '../../Pages/Biodata/BiodataPage.jsx'
import ProjectPage from '../../Pages/Project/ProjectPage.jsx'
import SkillPage from '../../Pages/Skill/SkillPage.jsx'
import ExperiencePage from '../../Pages/Experience/ExperiencePage.jsx'
import CertificatePage from '../../Pages/Certificate/CertificatePage.jsx'
import { Route,Routes} from 'react-router-dom'


const Content = ({scrollTop,setPageName}) => {

  return (
    <article className='Content'>
        <Heading/>
          <Routes >
            <Route index element={<HomePage setPageName={setPageName}/>} />
            <Route path='about' element={<AboutPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='biodata' element={<BiodataPage/>}/>
            <Route path='project' element={<ProjectPage/>}/>
            <Route path='skill' element={<SkillPage scrollTop={scrollTop}/>}/>
            <Route path='experience' element={<ExperiencePage/>}/>
            <Route path='certificate' element={<CertificatePage/>}/>
          </Routes>
    </article>
  )
}

export default Content