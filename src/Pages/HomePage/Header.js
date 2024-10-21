import React from 'react';
import styles from "./header.module.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value); // Change the language based on the selected option
  };

  return (
    <section className={styles.bannerSection}>
      <header className={styles.headers}>
        <ul>
          <li>
            <div className={styles.logo}>....</div>
          </li>
          <li>{t('header.home')}</li>
          <li>{t('header.category')}</li>
          <li>{t('header.contact')}</li>
        </ul>

        <ul>
          <li>
            <button className={styles.community}>
              <Link to='/login'>
                {t('header.joinCommunity')}
              </Link>
            </button>
          </li>
          <div className={styles.languageSelection}>
            <div className={styles.languageFlag}></div>
            <div className={styles.selectedLanguage}>{i18n.language}</div>
            <select onChange={handleLanguageChange} value={i18n.language}>
              <option value="ka">ქართული</option>
              <option value="en">English</option>
            </select>
          </div>
        </ul>
      </header>
    </section>
  );
};
