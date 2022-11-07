import React from 'react';
import './moviesCardList.css';
import MoviesCard from '../moviesCard/MoviesCard';
import { 
  useState,
   useEffect,
    // useContext
   } from 'react';
// import apiMovies from '../../../utils/MoviesApi';
// import MoreContent from '../more-content/MoreContent';
// import { PopupContext } from '../../context/Context';

export default function MoviesCardList({ newData }) {
  const [localStorageData, setLocalStorageData] = useState(newData);

  useEffect(()=>{
    setLocalStorageData(newData)
  },[newData])
  
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [lastSlice, setLastSlice] = useState(
  //   windowWidth >= 320 && windowWidth <= 425
  //     ? 5
  //     : windowWidth >= 426 && windowWidth <= 768
  //     ? 8
  //     : 12
  // );

  // useEffect(() => {
  //   window.addEventListener('resize', setWindowDimensions);
  //   return () => {
  //     window.removeEventListener('resize', setWindowDimensions);
  //   };
  // }, []);
  // const setWindowDimensions = () => {
  //   setWindowWidth(window.innerWidth);
  // };
 
  // function moreContent() {
    
    // if (windowWidth >= 769) {
    //   setLastSlice(lastSlice + 3);
    // }
    // if (windowWidth >= 426 && windowWidth <= 768) {
    //   setLastSlice(lastSlice + 2);
    // }
    // if (windowWidth >= 320 && windowWidth <= 425) {
    //   setLastSlice(lastSlice + 1);
    // }
   
  // }

  return (
    <>
      {/* <div>{windowWidth}</div> */}
      <section className='movies-card-list'>
        {localStorageData.map((item) => {
          return <MoviesCard key={item.id} {...item} />;
        })}

      </section>
       {/* {<MoreContent moreContent={moreContent} />} */}
    </>
  );
}
