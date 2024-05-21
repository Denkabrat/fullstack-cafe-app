import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { registration } from "../services/userAPI";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    secondPassword: "",
  });
  const navigate = useNavigate();
  
  const changeUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      if (!userData) return null;

      if (userData.password !== userData.secondPassword) {
        alert("Пароли не совпадают");
        return;
      }

      await registration({ email: userData.email, name: userData.name, password: userData.password });
      alert("Вы зарегистрировались!");
      setUserData({
        name: "",
        email: "",
        password: "",
        secondPassword: "",
      });
      navigate("/");
    } catch (error) {
      alert(`Ошибка регистрации: ${error}`);
      console.error(error);
    }
  };


  return (
    <main style={{display:'flex',justifyContent:'center', alignItems:"center"}}>
      <form onSubmit={registerUser} style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:"center",marginTop:20,marginBottom:20}}>
      <Typography
          variant="h4"
          padding={3}
          fontFamily="Playfair Display"
          textAlign="center"
        >
          Регистрация
        </Typography>
        <TextField
          onChange={changeUserData}
          fullWidth={true}
          margin="normal"
          name="name"
          label="Имя"
          variant="standard"
          placeholder="Введите ваше Имя"
        />
        <TextField
          onChange={changeUserData}
          fullWidth={true}
          margin="normal"
          name="email"
          label="E-mail"
          variant="standard"
          placeholder="Введите ваш E-mail"
        />
        <TextField
          onChange={changeUserData}
          type="password"
          fullWidth={true}
          margin="normal"
          name="password"
          label="Пароль"
          variant="standard"
          placeholder="Введите ваш Пароль"
        />
        <TextField
          onChange={changeUserData}
          type="password"
          fullWidth={true}
          margin="normal"
          name="secondPassword"
          label="Подтвердите пароль"
          variant="standard"
          placeholder="Повторите ваш пароль"
        />
        <Button
          type="submit"
          sx={{
            fontFamily: "Playfair Display",
            marginTop: 2,
            marginBottom: 2,
            width: "50%",
          }}
          variant="contained"
        >
          Регистрация
        </Button>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Playfair Display",
          }}
        >
          У вас есть аккаунта ?
          <a href="/login" style={{color:"#e17396",textDecoration:"none"}} className="incitingText"> Авторизация </a>
        </Typography>
      </form>
    </main>
  );
};

export default RegisterPage;
