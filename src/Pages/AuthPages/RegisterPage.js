import React, { useState } from 'react';
import styles from './register.page.module.css';
import { Header } from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // At least 8 chars, 1 letter, 1 number

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    // Simple validation
    if (!name || !email || !password) {
      setError('All fields are required!');
      return;
    }

    // Email validation
    if (!emailRegex.test(email)) {
      setError('Invalid email format!');
      return;
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain at least one letter and one number.');
      return;
    }

    // Simulate registration (e.g., saving to local storage)
    const userData = { name, email, password };
    localStorage.setItem('user', JSON.stringify(userData));

    // Clear the form
    setName('');
    setEmail('');
    setPassword('');
    
    setSuccess('Registration successful! You can now log in.');

    // Optionally, redirect the user or perform other actions
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <>
      <div className={styles.container}>
        <Header />

        <section className={styles.formRegisterSection}>
          <div className={styles.googleAuth}>
            <div className={styles.google}>Continue with Google</div>
            <div className={styles.orSect}>
              <hr className={styles.leftLine} />Or<hr className={styles.rightLine} />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </label>
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

            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}

            <div className={styles.forgotPswrd}>
              <p>By creating an account you agree with our Terms of Service, Privacy Policy.</p>
            </div>
            <button type='submit' className={styles.btn}>Register</button>
            <div className={styles.signUp}>
              <Link to='/login'>Already have an account? Log in</Link>
            </div>
          </form>
        </section>

        <Footer/> 
      </div>

      <footer></footer>
    </>
  );
};

export default RegisterPage;
