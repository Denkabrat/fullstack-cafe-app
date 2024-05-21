import React, { Component } from 'react';
import Img from '../img/nor.png';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Routes, Route  } from "react-router-dom";
import Contact1 from '../Pages/Contact1';
import Phone from '../img/phone.png';
import Email from '../img/email.png';
import Time from '../img/time.png';
import VK from '../img/vk.png';
import teleg from '../img/telegram.png';
import Pinterest from '../img/pinterest.png'

const Contact = () => {
    return (
        <>
            <div style={{ width: "100%", color:'white', background: '#E17396'}}>
            <div style={{fontSize:'56px',fontFamily: 'Playfair Display', textAlign: 'center'}}>Наши контакты</div>
                <div style={{fontSize:'24px', marginTop:'5%', marginLeft: '12%', fontFamily: 'Playfair Display', textAlign: 'left'}}> <img 
                    src={Img}
                    alt="Img"/>Адрес
            <div style={{ textAlign: '-webkit-center', marginTop:'-3%',}}>Владимир, ул Дворянская, д. 27а</div></div>
            <div style={{ overflow:'hidden'}}>
                    <iframe src="https://yandex.ru/map-widget/v1/?display-text=%D1%80%D1%8B%D0%BD%D0%BE%D0%BA%20%D0%BD%D0%B0%20%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D0%BE%D0%B9&ll=40.386086%2C56.125039&mode=search&oid=107601582226&ol=biz&sctx=ZAAAAAgBEAAaKAoSCd8Vwf9WLERAETOJesGnDUxAEhIJEvjDz38Ptj8RHLPsSWBznj8iBgABAgMEBSgKOABA56INSAFqAnJ1nQHNzEw9oAEAqAEAvQFHt4FOwgEGkrG37JADggIg0YDRi9C90L7QuiDQvdCwINGB0YLRg9C00LXQvdC%2B0LmKAgCSAgMxOTKaAgxkZXNrdG9wLW1hcHM%3D&sll=40.386086%2C56.125039&sspn=0.043087%2C0.014862&text=%D1%80%D1%8B%D0%BD%D0%BE%D0%BA%20%D0%BD%D0%B0%20%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D0%BE%D0%B9&z=15" width="100%" height="592" frameborder="1" allowfullscreen="true"></iframe></div>
            </div>
        </>
    )
}

export default Contact;