import React from 'react';
import './movies.css';
import Footer from '../shared/footer/Footer';
import Header from '../shared/header/Header';
import SearchForm from '../shared/search-form/SearchForm';
import MainMenuAuthorized from '../shared/main-menu-authorized/MainMenuAuthorized';
import MoviesCardList from '../shared/moviesCardList/MoviesCardList';
import { SearchContext } from '../context/Context';
import { useContext } from 'react';
import Preloader from '../shared/preloader/Preloader';


export default function Movies() {
  // const { movieData } = useContext(PopupContext);
  const { preloaderCondition } = useContext(SearchContext);
  // const [inputValue, setInputValue] = useState('');
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [hideBtn, setHideBtn] = useState(false);
  // const [searchMovieData, setSearchMovieData] = useState([]);
  // const [preloaderCondition, setPreloaderCondition] = useState(true);
  // const [nothingFound, setNothingFound] = useState(false);
  // const [lastSlice, setLastSlice] = useState(
  //   windowWidth >= 320 && windowWidth <= 425
  //     ? 5
  //     : windowWidth >= 426 && windowWidth <= 768
  //     ? 8
  //     : 12
  // );
  // вывод контента исходя из ширины экрана
  // useEffect(() => {
  //   setLastSlice(
  //     windowWidth >= 320 && windowWidth <= 425
  //       ? 5
  //       : windowWidth >= 426 && windowWidth <= 768
  //       ? 8
  //       : 12
  //   );
  // }, [windowWidth]);

  
  // сохранение данных в localstoreg, перезагрузка кнопки.
  // function handlerOnSubmit(inputValueData) {
  //   setTimeout(()=> {
  //   // setPreloaderCondition(true);
  //     setSearchMovieData(movieData.filter((film) => film.nameRU.toUpperCase().includes(inputValueData.toUpperCase())));
  //     // setLastSlice(
  //     //   windowWidth >= 320 && windowWidth <= 425
  //     //     ? 5
  //     //     : windowWidth >= 426 && windowWidth <= 768
  //     //     ? 8
  //     //     : 12
  //     // );
  //     // setHideBtn(false);
  //     localStorage.setItem('films', JSON.stringify(movieData.filter((film) => film.nameRU.toUpperCase().includes(inputValueData.toUpperCase()))));
  //     localStorage.setItem('request', JSON.stringify(inputValueData));
  //   }, 1000);
  //   // setPreloaderCondition(false);
  // }

  // useEffect(()=> {
  //   if(searchMovieData.length === 0) {
  //     if(JSON.parse(localStorage.getItem('films')).length > 0) {
  //       setNothingFound(false);
  //       return;
  //     }
  //     setNothingFound(true);
  //   }
  //   if(searchMovieData.length !== 0) {
  //     setNothingFound(false);
  //   }
  //   },[searchMovieData]);

  // вычисление ширины экрана
  // useEffect(() => {
  //   window.addEventListener('resize', setWindowDimensions);
  //   return () => {
  //     window.removeEventListener('resize', setWindowDimensions);
  //   };
  // }, []);

  // const setWindowDimensions = () => {
  //   setWindowWidth(window.innerWidth);
  // };
  // отдача контента, скрытие кнопки
  // function moreContent() {
  //   if (windowWidth >= 769) {
  //     setLastSlice(lastSlice + 3);
  //   }
  //   if (windowWidth >= 426 && windowWidth <= 768) {
  //     setLastSlice(lastSlice + 2);
  //   }
  //   if (windowWidth >= 320 && windowWidth <= 425) {
  //     setLastSlice(lastSlice + 1);
  //   }
  //   if (searchMovieData.length <= lastSlice) {
  //     setLastSlice(
  //       searchMovieData.length
  //     );
  //     // setHideBtn(true);
  //   }
  // }

  return (
    <>
      <Header bg='#202020'>
        <MainMenuAuthorized />
      </Header>
      <main className='movies'>
        <div className='wrapper'>
          {/* <SearchForm handlerOnSubmit={handlerOnSubmit} /> */}
          <SearchForm  />
          <MoviesCardList
          //  serchMovieData={searchMovieData.slice(0, lastSlice)}
          //  moreContent={moreContent}
          //  hideBtn={hideBtn}
          //  nothingFound={nothingFound}

           />
        </div>
      </main>
      <Footer />
      <Preloader preloaderCondition={preloaderCondition}/>
    </>
  );
}
