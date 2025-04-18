
import styles from './App.module.css'
import { About } from './components/About/About'
import { Certificates } from './components/Certificates/Certificates'
import { Contacts } from './components/Contacts/Contacts'
import { CV } from './components/CV/CV'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'
import { University } from './components/University/University'
function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <University/>
      <Experience/>
      <CV/>
      <Projects/>
      <Certificates/>
      <Contacts/>
    </div>
  )
}

export default App
 