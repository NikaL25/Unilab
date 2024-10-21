import React from 'react'
import styles from './map.page.module.css'
import Footer from '../HomePage/Footer'
import { Header } from '../HomePage/Header'


const MapPage = () => {
  return (
    <>
        <div className={styles.container}>
        <Header />
            <section className={styles.mapSection}>
                <div className={styles.form}>
                    <h1>Get in <span>Touch</span></h1>
                    <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>

                    <form>
                    <label>
                        <input placeholder='Name *' /> 

                        <input  placeholder='Email'/>          

                        <input  placeholder='Phone number *'/>                                      
                            
                        <select>
                            <option>How did you find us?</option>
                        </select>

                        <button type="submit" className={styles.btn} style={{ marginBottom: '250px', minHeight: '50px'  }} >
                            SEND
                     </button>       
                </label>                    
                </form>

                        <div className={styles.contactDetails}>
                           
                            <div className={styles.phone}>
                                <div className={styles.phoneIcon}></div>
                                    <p>Phone    
                                    <span>    03 5432 1234</span>
                                    </p>
                            </div>

                            
                            <div className={styles.phone}>
                                 <div className={styles.faxIcon}></div>
                                    <p>Fax    
                                    <span>03 5432 1234</span>
                                    </p>
                            </div>

                            <div className={styles.phone}>
                                <div className={styles.emailIcon}></div>
                                    <p>Phone    
                                    <span>info@marcc.com.au</span>
                                    </p>
                            </div>
                        </div>
                </div>

                <div className={styles.map}>
                    
                </div>
            </section>
        <Footer />
        </div>

<footer></footer>
    </>
  )
}

export default MapPage