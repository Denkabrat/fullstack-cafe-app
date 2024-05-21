import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { login } from '../services/userAPI';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from '../redux/reducers/authSlice';


const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      if (!userData) return null;

      await login({ email: userData.email, password: userData.password });
      alert("Вы вошли!");
      setUserData({
        email: "",
        password: "",
      });
      dispatch(setAuth(true));
      navigate("/");
    } catch (error) {
      alert(`Ошибка входа: ${error}`);
      console.error(error);
    }
  };

  return (
    <main style={{display:'flex',justifyContent:'center', alignItems:"center"}}>
      <form onSubmit={loginUser} style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:"center",marginTop:20,marginBottom:20}}>
        <Typography variant="h4" padding={3} fontFamily='Playfair Display' textAlign='center'>Форма входа</Typography>
        <TextField name='email' onChange={changeUserData} fullWidth margin='normal' label="E-mail" variant="standard" placeholder='Введите ваш E-mail'  />
        <TextField name='password' onChange={changeUserData} type='password' fullWidth margin='normal' label="Пароль" variant="standard" placeholder='Введите ваш Пароль' />
        <Button type='submit' sx={{ fontFamily: 'Playfair Display', marginTop: 2, marginBottom: 2, width: '30%' }} variant="contained">Войти</Button>
        <Typography variant="body2" sx={{ fontFamily: 'Playfair Display'}}>У вас нет учетной записи?<a style={{color:'#e17396',textDecoration:'none'}} href='/register' className='incitingText'>Зарегистрироваться</a></Typography>
      </form>
    </main>
  );
};

export default LoginPage;

