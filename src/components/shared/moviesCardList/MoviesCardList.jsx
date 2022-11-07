import React from 'react';
import './moviesCardList.css';
import MoviesCard from '../moviesCard/MoviesCard';
import { useState,
   useEffect,
    useContext
   } from 'react';
// import apiMovies from '../../../utils/MoviesApi';
import MoreContent from '../more-content/MoreContent';
import { PopupContext } from '../../context/Context';

export default function MoviesCardList() {
  const { newArr, setNewArr, hendlerMoreContent } = useContext(PopupContext);
  // тут я выдергиваю данные и хранилища, конвертирую в объект. Ожидаю что они будут рендерится. Но этого не происходит.
  const [ newArr2, setNewArr2 ] = useState(JSON.parse(localStorage.getItem("films")));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [lastSlice, setLastSlice] = useState(
    windowWidth >= 320 && windowWidth <= 425
      ? 5
      : windowWidth >= 426 && windowWidth <= 768
      ? 8
      : 12
  );

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };
 
  function moreContent() {
    
    // if (windowWidth >= 769) {
    //   setLastSlice(lastSlice + 3);
    // }
    // if (windowWidth >= 426 && windowWidth <= 768) {
    //   setLastSlice(lastSlice + 2);
    // }
    // if (windowWidth >= 320 && windowWidth <= 425) {
    //   setLastSlice(lastSlice + 1);
    // }
    setNewArr2(JSON.parse(localStorage.getItem("films")));
  }
  //первый вариант, я попробовал передавать чистые данные. Все работало. теперь, рендер происходи только после перезагрузки.
  //Мне не понятно, почему поведение изменилось? Как мне добится, предыдущего результата. Т.к передавать данные сразу в 3-4 компонента, очень неудобно.
  // Вариант с хронилищем, на мой взгляд самый удачный. Данные доступны везде.
  return (
    <>
      {/* <div>{windowWidth}</div> */}
      <section className='movies-card-list'>
        {newArr2.map((item) => {
          return <MoviesCard key={item.id} {...item} />;
        })}

      </section>
       {<MoreContent moreContent={moreContent} />}
    </>
  );
}
