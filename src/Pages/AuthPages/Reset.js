import React, { useState } from 'react';
import { Header } from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import styles from './login.page.module.css';

const Reset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { t } = useTranslation();

  // Regular expression for password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/; // At least 8 characters, one uppercase letter, one number

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return; // Exit if passwords do not match
    }

    // Check if password meets criteria
    if (!passwordRegex.test(newPassword)) {
      setError('Password must be at least 8 characters long and include at least one uppercase letter and one number.');
      return; // Exit if password does not meet criteria
    }

    // Perform password reset (you can integrate with a backend API here)
    setSuccess('Password reset successfully!');
    // Optionally clear the inputs
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <div className={styles.container}>
        <Header />

        <section className={styles.formSection} style={{ height: '550px' }}>
          <div className={styles.googleAuth}>
            {/* Optionally, include GoogleAuth or other content */}
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              New Password
              <input 
                type="password" 
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)} 
                required 
              />
            </label>
            <label>
              Confirm Password
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </label>

            {/* Display error or success messages */}
            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}

            <button 
              type="submit" 
              className={styles.btn} 
              style={{ marginBottom: '250px', minHeight: '50px' }}
            >
              Reset Password
            </button>                    
          </form>
        </section>

        <Footer /> 
      </div>

      <footer></footer>
    </>
  );
}

export default Reset;
