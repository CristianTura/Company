import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import ListCompanies from './pages/ListCompanies';
import NewCompany from './pages/NewCompany';

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
             <Route path="/" element={<NewCompany />}/>
            <Route path="/companies" element={<ListCompanies />}>
        </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;