import React, { useEffect, useState } from 'react';
import styles from './detal.page.module.css';
import { Header } from '../HomePage/Header';
import { Link, useParams, Navigate } from 'react-router-dom';
import Footer from '../HomePage/Footer';


const DetailPage = () => {
  const { id } = useParams(); // Получаем id из URL
  const [pet, setPet] = useState(null); // Состояние для питомца
  const [loading, setLoading] = useState(true); // Состояние для загрузки
  const [error, setError] = useState(null); // Состояние для ошибок

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const response = await fetch('/data.json'); // Путь к вашему файлу data.json
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();
        const foundPet = data.find((pet) => pet.id === parseInt(id)); // Поиск питомца по id
        setPet(foundPet);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Завершение загрузки
      }
    };

    fetchPetData(); // Вызов функции загрузки данных
  }, [id]);

  // Обработка состояния загрузки
  if (loading) {
    return <div>Загрузка...</div>;
  }

  // Обработка ошибки
  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  // Проверка на наличие питомца
  if (!pet) {
    return <Navigate to="/" />; // Перенаправление, если питомец не найден
  }


  return (
    <>
      <div className={styles.container}>
        <header>
          <Header />
        </header>
        
        <section className={styles.dogCardDetails}>
        <div className={styles.dogCardImg}>
          <img src={pet.img} alt={pet.breed} className={styles.img} />
          <div className={styles.guarantee}></div>
          <div className={styles.socialLinks}></div>
        </div>

        <div className={styles.dogCardDetail}>
          <h2>{pet.sky}</h2>
          <p>Breed: {pet.breed}</p>
          <p>Price: {pet.price.toLocaleString()}</p>
          <div>Contact us</div>
          <div>Chat with Monito</div>
          <p>Gene: {pet.gender}</p>
          <p>Age: {pet.age}</p>
          <p>Size: {pet.size}</p>
          <p>Color: {pet.color}</p>
          <p>Vaccinated: {pet.vaccinated ? 'Yes' : 'No'}</p>
          <p>Dewormed: {pet.dewormed ? 'Yes' : 'No'}</p>
          <p>Cert: {pet.Cert}</p>
          <p>Microchip: {pet.Microchip}</p>
          <p>Location: {pet.Location}</p>
          <p>Published Date: {pet.PublishedDate}</p>
          <p>Additional Info: {pet.AdditionalInfo}</p>
        </div>
      </section>

        <section className={styles.carouselCard}>
          <p>Our lovely customer</p>
          <div className={styles.cards}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>
        </section>

        <section className={styles.seeMoreSection}>
          <header>
            <div className={styles.petsInfo}>
              <div className={styles.text}>
                Whats new?
                <h3>Take A Look At Some Of Our Pets</h3>
              </div>
              <div className={styles.petsViewMore}>
                <Link to="/filter">
                  View more 
                </Link>    
              </div>
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
            {/* More cards can be added here */}
          </div>
        </section>
        
        <Footer/> 
      </div>
      
      <footer></footer>
    </>
  );
};

export default DetailPage;
