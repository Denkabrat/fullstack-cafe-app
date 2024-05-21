import React, { useState } from 'react';
import {
    Button,
    Form,
    Nav,
    Navbar
} from 'react-bootstrap';
import logo from '../img/Macaroni Fantasy.jpg';
import regis from '../img/reg.png';
import { CiShoppingBasket } from "react-icons/ci";
import Order from './Order';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCartOpen } from '../redux/reducers/modalSlice';

const showNothing = () => {
    return (<div className='empty' style={{fontFamily: 'Playfair Display'}}>
        <h5>Товаров нет</h5>
    </div>)
}

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (<div>{props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
    </div>)
}

export default function Header() {

    const isAuth = useSelector((state) => state.auth.isAuth);
    const isOpen = useSelector((state) => state.modal.cartIsOpen);
    const dispatch = useDispatch();
    
    const showLogin = !isAuth ? <a href="./login"><img className="regis"src={regis}alt="Regis"/></a> : null;
    const changeModalStatus = () => dispatch(setCartOpen(!isOpen));
   

    return (
            <>
                <Navbar collapseOnSelect expand="md" bg="white" variant="white" style={{ margin: '2% 2% 0% 2%',  height: '12%', background: 'white', border: '1px solid #898989', width: "96%" }}>
                    <Navbar.Brand href="/" style={{ marginBottom: '0px', width: '67%' }}>
                        <img
                            src={logo}
                            height="40"
                            width="250"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/menu">Меню</Nav.Link>
                            <Nav.Link href="/about">О нас</Nav.Link>
                            <Nav.Link href="/contact">Контакты</Nav.Link>
                            {showLogin}
                            <CiShoppingBasket onClick={changeModalStatus} className={`shop ${isOpen && 'active'}`}/>
                            
                        </Nav>
                        <Form inline>
                            <Button variant="outline-secondary" href="/table"  style={{ backgroundColor: '#C17079' }}>Бронирование</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>
    );
}
