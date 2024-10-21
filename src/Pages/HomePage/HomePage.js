import React, { useEffect, useState } from 'react';import styles from "./HomePage.module.css"
import Footer from './Footer'
import { Header } from './Header'
import { Link } from 'react-router-dom'


export default function HomePage() {
    const [petsData, setPetsData] = useState([]);


  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setPetsData(data))
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);


  return (
    <>
    <div className={styles.mainBanner}>
    <Header /> 
    </div>
    <div className={styles.container}>  
    
     
      <section className={styles.petsSection}>
        <header>
          <div className={styles.petsInfo}>
          <div className={styles.text}>
          Whats new?
                <h3>Take A Look Atasdas Some Of Our Pets</h3>
          </div>
          <div className={styles.petsViewMore}>
          <Link to="/filter">
          
                  View more 
                
          
            </Link>    
            </div>
         
          </div>      
      
        </header>
        
        <div className={styles.petsCards}>
  {petsData.slice(0, 8).map((pet, index) => (
    <div className={styles.petsCard} key={index}>
      <div className={styles.petsImg}>
        <img src={pet.img} alt={pet.breed} />
      </div>
      <div className={styles.petsCardInfo}>
        <p>{pet.identcode} - {pet.breed}</p>
        <p>Gene: {pet.gender} * Age: {pet.age}</p>
        <p>{pet.price.toLocaleString()}</p> 
      </div>
    </div>
  ))}
</div>

      </section>


      <section className={styles.banner}></section>



      <section className={styles.productsSection}>
      <header>
          <div className={styles.petsInfo}>
          <div className={styles.text}>
          Whats new?
          <h3>Take A Look At Some Of Our Petss</h3>
          </div>
          </div>      
           <div className={styles.petsViewMore}>
            
              
               
           
           </div>

        </header>
        
        <div className={styles.petsCards}>
    <div className={styles.petsCard}>
        <div className={styles.petsImg}></div>
        <div className={styles.petsCardInfo}>
          <p>asdas</p>
          <p>dasdas</p>
          <p>dasda</p>
        </div>
    </div>
    <div className={styles.petsCard}>
        <div className={styles.petsImg}></div>
        <div className={styles.petsCardInfo}></div>
    </div>
    <div className={styles.petsCard}> 
        <div className={styles.petsImg}></div>
        <div className={styles.petsCardInfo}></div>
    </div>
    <div className={styles.petsCard}>
        <div className={styles.petsImg}></div>
        <div className={styles.petsCardInfo}>dasdasd</div>
    </div>
    <div className={styles.petsCard}>
        <div className={styles.petsImg}></div>
        <div className={styles.petsCardInfo}></div>
    </div>
</div>
      </section>

      <section className={styles.commericalSection}>  
      <header>
          <div className={styles.petsInfo}>
          <div className={styles.text}>
          Whats new? <span> A Look At Some Of Our Pets</span>
          </div>
          </div>  
            <div className={styles.sellersViewMore}>
                 View more 
            </div>

        </header>


        <div className={styles.commericalCards}>
    <div className={styles.commericalCard}>
        <div className={styles.commericalImg}></div>
    </div>
    <div className={styles.commericalCard}>
        <div className={styles.commericalImg}></div>
    </div>
    <div className={styles.commericalCard}>
        <div className={styles.commericalImg}></div>
    </div>
    <div className={styles.commericalCard}>
        <div className={styles.commericalImg}></div>
    </div>
    <div className={styles.commericalCard}>
        <div className={styles.commericalImg}></div>
    </div>

    <div className={styles.commericalCard}>
        <div className={styles.commericalImg}></div>
    </div>
   
</div>
      </section>


      <section className={styles.adoptionSection}>      </section>



      <section className={styles.blogSection}>  
      <header>
          <div className={styles.petsInfo}>
          <div className={styles.text}>
          Whats new?
          <h3>Take A Look At Some Of Our Pets</h3>
          </div>
          </div>      
           <div className={styles.petsViewMore}>
            View more 
           </div>

        </header>

        <div className={styles.blogCards}>
    <div className={styles.blogCard}>
        <div className={styles.blogImg}></div>
    </div>
    <div className={styles.blogCard}>
        <div className={styles.blogImg}></div>
        <div className={styles.blogCardInfo}>dasdasd</div>

    </div>
    <div className={styles.blogCard}>
        <div className={styles.blogImg}></div>
        <div className={styles.blogCardInfo}>dasdasd</div>
    </div>
    
   
</div>
      </section>

      <section className={styles.timerSection}>
 <header>
          <div className={styles.timerInfo}>
          <div className={styles.text}>
              <h3>Take A Look At Some Of Our Pets</h3>
          </div>
          </div>      
          
        </header>


        <div className={styles.timerCards}>
    <div className={styles.timerCard}>
       
    </div>
    <div className={styles.timerCard}>
       
    </div>
    <div className={styles.timerCard}>
      
    </div>
    <div className={styles.timerCard}>
      
    </div>
   
</div>

      </section>

      <Footer />
    </div>
    </>
  )
}
