import React, { useState } from 'react';
import { Header } from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.page.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate for redirection

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    // Email validation
    if (!emailRegex.test(email)) {
      setError('Invalid email format!');
      return;
    }

    // Check if user exists in local storage
    const userData = JSON.parse(localStorage.getItem('user'));
    
    if (userData && userData.email === email && userData.password === password) {
      // Successful login
      navigate('/home'); // Redirect to home page or desired page after login
    } else {
      // Failed login
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Header />
        <section className={styles.formSection}>
          <div className={styles.googleAuth}>
            <div className={styles.google}>
              Continue with Google
            </div>
            <div className={styles.orSect}>
              <hr className={styles.leftLine} />Or<hr className={styles.rightLine} />
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <label>
              Email
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </label>
            <label>
              Password
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </label>
            {error && <p className={styles.error}>{error}</p>} {/* Display error message */}

            <div className={styles.forgotPswrd}>
              <Link to="/resetEmail">Forgot Password?</Link>
            </div>

            <button type="submit" className={styles.btn}>
              Login
            </button>
            <div className={styles.signUp}>
              <Link to='/register'>Don't have an account? Sign up</Link>
            </div>
          </form>
        </section>

        <Footer />
      </div>
      
      <footer></footer>
    </>
  );
};

export default LoginPage;
