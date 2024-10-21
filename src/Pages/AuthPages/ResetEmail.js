import React, { useState } from 'react';
import { Header } from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import styles from './login.page.module.css';

const ResetEmail = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    // Email validation
    if (!emailRegex.test(email)) {
      setMessage('Invalid email format!');
      return;
    }

    // Simulate sending the reset link (replace with actual backend API call)
    try {
      const response = await fetch('https://your-backend.com/api/send-reset-link', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Simulate a success message after sending the email
        setMessage('A reset link has been sent to your email.');
      } else {
        // Handle error if backend returns an error response
        setMessage('Error sending reset link. Please try again.');
      }
    } catch (error) {
      console.error('Error sending reset link:', error);
      setMessage('Error sending reset link. Please try again.');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Header />

        <section className={styles.formSection} style={{ height: '550px' }}>
          <div className={styles.googleAuth}></div>
          <form onSubmit={handleResetPassword}>
            <label>
              <p>
                Please enter the email address associated with your account. We'll promptly send you a link to reset your password.
              </p>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <button type="submit" className={styles.btn} style={{ marginBottom: '250px', minHeight: '50px' }}>
              Send reset link
            </button>
          </form>

          {message && <p>{message}</p>}
        </section>

        <Footer />
      </div>
      <footer></footer>
    </>
  );
};

export default ResetEmail;
