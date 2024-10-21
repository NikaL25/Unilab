import React, { useEffect, useState } from 'react';
import { Header } from '../HomePage/Header';
import styles from "./filter.page.module.css";
import Footer from '../HomePage/Footer';
import { Link } from 'react-router-dom';

export default function FilterPage() {
  const [petsData, setPetsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // State to store selected filters
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedSizes, setSelectedSizes] = useState([]); // Updated state name to selectedSizes

  useEffect(() => {
    // Fetch the data from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setPetsData(data))
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);

  // Handle gender filter change
  const handleGenderChange = (e) => {
    const { value, checked } = e.target;
    setSelectedGender((prev) => 
      checked ? [...prev, value] : prev.filter((g) => g !== value)
    );
  };

  // Handle color filter change
  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    setSelectedColors((prev) => 
      checked ? [...prev, value] : prev.filter((c) => c !== value)
    );
  };

  // Handle breed filter change
  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    setSelectedSizes((prev) => 
      checked ? [...prev, value] : prev.filter((s) => s !== value)
    );
  };


  // Handle price range change
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter petsData based on selected filters
  const filteredPets = petsData.filter((pet) => {
    const matchesGender = selectedGender.length === 0 || selectedGender.includes(pet.gender);
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(pet.color);
    const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(pet.size); 
    const matchesPrice =
      (priceRange.min === '' || pet.price >= Number(priceRange.min)) &&
      (priceRange.max === '' || pet.price <= Number(priceRange.max));

    return matchesGender && matchesColor && matchesSize && matchesPrice;
  });

  // Pagination logic
  const indexOfLastPet = currentPage * itemsPerPage;
  const indexOfFirstPet = indexOfLastPet - itemsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);
  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <header>
          <Header />
        </header>

        <section className={styles.dogBanner}></section>

        <h3>Filter</h3>
        <section className={styles.filterPage}>
          <aside>
            <form className={styles.filterForm}>
              <p>Gender</p>
              <label>
                <input
                  type="checkbox"
                  name="gender"
                  value="Female"
                  onChange={handleGenderChange}
                />
                Female
              </label>
              <label>
                <input
                  type="checkbox"
                  name="gender"
                  value="Male"
                  onChange={handleGenderChange}
                />
                Male
              </label>
              <hr />

             
              <p>Color</p>
<label className={styles.colors}>
  <input
    type="checkbox"
    name="color"
    value="Red"
    onChange={handleColorChange}
  />
  Red
</label>
<label className={styles.colors}>
  <input
    type="checkbox"
    name="color"
    value="Apricot"
    onChange={handleColorChange}
  />
  Apricot
</label>
<label className={styles.colors}>
  <input
    type="checkbox"
    name="color"
    value="Black"
    onChange={handleColorChange}
  />
  Black
</label>
<label className={styles.colors}>
  <input
    type="checkbox"
    name="color"
    value="Silver"
    onChange={handleColorChange}
  />
  Silver
</label>
<label className={styles.colors}>
  <input
    type="checkbox"
    name="color"
    value="Tan"  // New Color
    onChange={handleColorChange}
  />
  Tan
</label>
<label className={styles.colors}>
  <input
    type="checkbox"
    name="color"
    value="Black & White"  // New Color
    onChange={handleColorChange}
  />
  Black & White
</label>
<hr />
              

              <p>Price</p>
              <label className={styles.price}>
                <input
                  type="number"
                  name="min"
                  placeholder="Min"
                  min="0"
                  value={priceRange.min}
                  onChange={handlePriceChange}
                />
                <input
                  type="number"
                  name="max"
                  placeholder="Max"
                  min="0"
                  value={priceRange.max}
                  onChange={handlePriceChange}
                />
              </label>
              <hr />

              <p>Breed</p>
              <label>
                <input
                  type="checkbox"
                  name="size"
                  value="Small"  // Updated to size
                  onChange={handleSizeChange} // Updated to size
                />
                Small
              </label>
              <label>
                <input
                  type="checkbox"
                  name="size"
                  value="Medium"  // Updated to size
                  onChange={handleSizeChange} // Updated to size
                />
                Medium
              </label>
              <label>
                <input
                  type="checkbox"
                  name="size"
                  value="Large"  
                  onChange={handleSizeChange} 
                />
                Large
              </label>
            </form>
          </aside>

          <div className={styles.dogsList}>
            {currentPets.map((pet) => (
              <Link
                to={`/details/${pet.id}`}
                key={pet.id}
              >
                <div className={styles.petsCard}>
                  <div className={styles.petsImg}>
                    <img src={pet.img} alt={pet.breed} />
                  </div>
                  <div className={styles.petsCardInfo}>
                    <p>{pet.identcode} - {pet.breed}</p>
                    <p>Gene: {pet.gender} * Age: {pet.age}</p>
                    <p>{pet.price.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
            ))}

            {/* Pagination Controls */}
            <div className={styles.pagination}>
              <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      <footer></footer>
    </>
  );
}
