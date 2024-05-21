import React, { useState } from 'react';
import { createBook } from '../services/bookAPI';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    persons: '1',
    phoneNumber: '',
    wishes: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const createBookOnline = async (event) => {
    event.preventDefault();
    try {
      await createBook(formData);
      alert('Столик был забронирован!');
      setFormData({
        name: '',
        date: '',
        time: '',
        persons: '1',
        phoneNumber: '',
        wishes: '',
      });
    } catch (error) {
      console.error(error);
      alert('Ошибка при бронировании');
    }
  };

  return  (
    <form onSubmit={createBookOnline}>
      <h2>Забронировать столик</h2>
      <label htmlFor="name">Имя:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="date">Дата:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

      <label htmlFor="time">Время:</label>
      <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />

      <label htmlFor="persons">Количество гостей:</label>
      <select id="persons" name="persons" value={formData.persons} onChange={handleChange} required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <label htmlFor="phoneNumber">Номер телефона:</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />

      <label htmlFor="wishes">Дополнительные пожелания:</label>
      <textarea id="wishes" name="wishes" value={formData.wishes} onChange={handleChange} />

      <button type="submit">Забронировать</button>
    </form>
  );
}


export default BookingForm;
