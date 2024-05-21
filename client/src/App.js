import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Table from "./Pages/Table";
import Header from "./Components/Header";
import Glavn2 from "./Pages/Glavn2";
import LoginPage from "./Pages/LoginForm";
import RegisterPage from "./Pages/RegisterPage";
import { checkAuthorization } from "./services/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./redux/reducers/authSlice";
import { getAllGoods } from "./services/goodAPI";
import { setGoods,setLoading,setError } from "./redux/reducers/goodSlise";
import "./App.css";
import Basket from "./Components/basket/Basket";


const App = () => {
  
  
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);


  useEffect(() => {
    try {
      checkAuthorization()
        .then(() => dispatch(setAuth(true)))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  }, [isAuth]);

    useEffect(() => {
      const fetchData = async () => {
        dispatch(setLoading(true)); // Установка флага загрузки в true
        try {
          const goods = await getAllGoods();
          dispatch(setGoods(goods)); // Установка загруженных товаров в состояние
        } catch (error) {
          dispatch(setError(error.message)); // Установка ошибки загрузки
        } finally {
          dispatch(setLoading(false)); // Установка флага загрузки в false при завершении
        }
      };
  
      fetchData();
    }, [dispatch]);

  return (
    <main>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Glavn2 />} />
          <Route path="/table" element={<Table />} />
          <Route path="/menu" element={<Menu items={{}} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={!isAuth ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!isAuth ? <RegisterPage /> : <Navigate to="/" />}
          />
        </Routes>
        <Footer />
        <Basket/>
      </BrowserRouter>
    </main>
  );
};

// deleteOrder(id) {
//     this.setState({
//         orders: this.state.orders.filter(el => el.id !== id)
//     });
// }

// addToOrder(item){
//     let isInArray = false
//     this.state.orders.forEach(el => {
//        if(el.id === item.id)
//         isInArray = true
//     })
//     if(!isInArray)

//     this.setState({orders: [...this.state.orders, item] } );
// }

export default App;
