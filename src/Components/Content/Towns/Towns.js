import React from "react";
import Carousel from "./Carousel/Carousel";

import './towns.css';
import Yaroslavl from './Image/Yaroslavl.png';
import GavrilovYam from './Image/GavrilovYam.png';
import Rybinsk from './Image/Rybinsk.png';
import PereslavlZalessky from './Image/PereslavlZalessky.png';
import RostovGreat from './Image/RostovGreat.png';
import Uglich from './Image/Uglich.png';
import Myshkin from './Image/Myshkin.png';
import Tutaev from './Image/Tutaev.png';
import Poshekhonye from './Image/Poshekhonye.png';
import Danilov from './Image/Danilov.png';
import Lubim from './Image/Lubim.png';


const Towns = () => {
    return (
        <div className='carousel'>
            <Carousel
                show={5}
                infiniteLoop
            >
            <div className='town_item'>
                <div>
                    <img src={Lubim} alt="Lubim" />
                    <h3>Любим</h3>
                </div>
            </div>
                <div  className='town_item'>
                    <div>
                        <img src={Yaroslavl} alt="Yaroslavl" />
                        <h3>Ярославль</h3>
                    </div>
                </div>
                <div  className='town_item'>
                    <div>
                        <img src={GavrilovYam} alt="GavrilovYam" />
                        <h3>Гаврилов Ям</h3>
                    </div>
                </div>
                <div  className='town_item'>
                    <div>
                        <img src={Rybinsk} alt="Rybinsk" />
                        <h3>Рыбинск</h3>
                    </div>
                </div>
                <div  className='town_item'>
                    <div>
                        <img src={PereslavlZalessky} alt="PereslavlZalessky" />
                        <h3>Переславль-Залесский</h3>
                    </div>
                </div>
                <div  className='town_item'>
                    <div>
                        <img src={RostovGreat} alt="RostovGreat" />
                        <h3>Ростов Великий</h3>
                    </div>
                </div>
                <div  className='town_item'>
                    <div>
                        <img src={Uglich} alt="Uglich" />
                        <h3>Углич</h3>
                    </div>
                </div>
                <div  className='town_item'>
                    <div>
                        <img src={Myshkin} alt="Myshkin" />
                        <h3>Мышкин</h3>
                    </div>
                </div>

                <div  className='town_item'>
                    <div>
                        <img src={Tutaev} alt="Tutaev" />
                        <h3>Тутаев</h3>
                    </div>
                </div>
                <div  className='town_item'>
                    <div>
                        <img src={Poshekhonye} alt="Poshekhonye" />
                        <h3>Пошехонье</h3>
                    </div>
                </div>
                <div  className='town_item'>
                    <div>
                        <img src={Danilov} alt="Danilov" />
                        <h3>Данилов</h3>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Towns;