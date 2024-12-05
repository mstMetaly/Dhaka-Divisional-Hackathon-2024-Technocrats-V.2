import React, { useState } from 'react';

const DietChart = () =>{
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    age: '',
    duration: '',
  });

  const [nutrition, setNutrition] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/calculate-nutrition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setNutrition(data);
    } catch (error) {
      console.error('Error calculating nutrition:', error);
    }
  };
  

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Pregnancy Nutrition Calculator</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Height (cm):
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              style={{ marginLeft: '10px' }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            Weight (kg):
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              style={{ marginLeft: '10px' }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            Age (years):
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={{ marginLeft: '10px' }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            Pregnancy Duration (weeks):
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              style={{ marginLeft: '10px' }}
              required
            />
          </label>
        </div>

        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
          Calculate
        </button>
      </form>

      {nutrition && (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
          <h2>Nutrition Requirements</h2>
          <p>Carbohydrate: {nutrition.carbohydrate}</p>
          <p>Protein: {nutrition.protein}</p>
          <p>Fat: {nutrition.fat}</p>
          <p>Minerals: {nutrition.minerals}</p>
        </div>
      )}
    </div>
  );
};

export {DietChart};