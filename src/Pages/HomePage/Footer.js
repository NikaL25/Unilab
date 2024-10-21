import React from 'react'
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <form>
            <label>Register Now So You Don't Miss 
                Our Programs
            </label>
            <div className={styles.input}>        
            <input 
            placeholder='Enter your Name'
             />
             <button>Subscribe Now</button>
             </div>
        </form>
    </footer>
  )
}
