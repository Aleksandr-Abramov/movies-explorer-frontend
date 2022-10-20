import React from 'react';
import './movies.css';
import Footer from '../home-page/footer/Footer'
import AuthorizedHeader from '../shared/authorized-header/AuthorizedHeader';
import SearchForm from './search-form/SearchForm';


export default function Movies() {
  return (
    <>
    <AuthorizedHeader/>
    <main className='movies'>
    <div className="wrapper">
    <SearchForm />
    </div>
    
    </main> 
    <Footer/>
    </>
  );
}
