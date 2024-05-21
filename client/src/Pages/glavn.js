import React, { Component, createRef } from 'react';
import forestImg1 from '../img/главная2.png';
import desert from '../img/1.png';
import desert1 from '../img/2.png';
import desert2 from '../img/3.png';
import desert3 from '../img/4.png';
import desert4 from '../img/5.png';
import desert5 from '../img/6.png';
import desert6 from '../img/7.png';
import desert7 from '../img/8.png';
import Fox from './Fox';



export default class Glavn extends Component {
    constructor(props) {
        super(props);
        this.imageContainerRef = createRef(null);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (this.imageContainerRef.current) {
            this.imageContainerRef.current.scrollLeft = scrollTop * 2;
        }
    };
    render() {
        return (
            <>
                <Fox />
                <div style={{ width: "100%", clear: 'both', textAlign: 'center', backgroundSize: 'cover', backgroundImage: `url(${forestImg1})` }}>
                    <div style={{ width: '52%', color: 'white', fontSize: '54px', fontFamily: 'Playfair Display', margin: 'auto' }}>Свежая и здоровая еда в любое время суток</div>
                    <div style={{ width: '71%', color: 'black', fontSize: '28px', fontFamily: 'Playfair Display', margin: 'auto' }}>
                        Добро пожаловать в Macaroni Fantasy. Загляните в очаровательное кондитерское заведение, где вы сможете попробовать наши восхитительные угощения. Наше меню - это удивительное путешествие по вкусам, в нем есть все: от сочного эспрессо до неотразимой выпечки. Ищете ли вы быструю порцию кофеина или уютное местечко для приятного времяпрепровождения с друзьями? Macaroni Fantasy - это ваш рай для расслабления и восстановления сил. Приходите выпить кофе и отведать наши десерты, оставайтесь ради атмосферы.
                    </div>
                    <div className="image-container" ref={this.imageContainerRef}>

                        <img
                            className="desert"
                            src={desert}
                            alt="desert"
                        />
                        <img
                            className="desert1"
                            src={desert1}
                            alt="desert"
                        />
                        <img
                            className="desert2"
                            src={desert2}
                            alt="desert"
                        />
                        <img
                            className="desert3"
                            src={desert3}
                            alt="desert"
                        />
                    </div>
                    <div className="image-container" ref={this.imageContainerRef}>
                        <img
                            className="desert4"
                            src={desert4}
                            alt="desert"
                        />
                        <img
                            className="desert5"
                            src={desert5}
                            alt="desert"
                        />
                        <img
                            className="desert6"
                            src={desert6}
                            alt="desert"
                        />
                        <img
                            className="desert7"
                            src={desert7}
                            alt="desert"
                        />

                    </div>
                </div>

            </>
        );
    }
}