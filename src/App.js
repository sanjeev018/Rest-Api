import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideNavLayout from './Components/Layouts/SideNavLayout/SideNavLayout';
import ExpneseListing from './Screens/Expense/List/ExpneseListing';
import IncomeListing from './Screens/Income/List/IncomeListing';
import ProfitListing from './Screens/Profit/List/ProfitListing';


function App() {


  return (

  <BrowserRouter> 
  <Routes>
    <Route path='/' element={<IncomeListing/>}/> 
    <Route path='/expense' element={<ExpneseListing/>}/> 
    <Route path='/profit' element={<ProfitListing/>}/> 
  </Routes>
  </BrowserRouter> 


  );
}

export default App;
