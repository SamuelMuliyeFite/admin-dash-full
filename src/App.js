import { Route, Routes } from 'react-router-dom';
import {AnimatePresence}from 'framer-motion'

import { useStateValue } from './Context/StateProvider';
import axiosinstance from './Axios/Axios';

import { useEffect, useState } from 'react';
import SignIn from '../src/pages/Authentication/SignIn.js';
import SignUp from '../src/pages/Authentication/SignUp.js';
import Chart from '../src/pages/Chart';
import ECommerce from '../src/pages/Dashboard/ECommerce.js';
import FormElements from '../src/pages/Form/FormElements.js';
import FormLayout from '../src/pages/Form/FormLayout.js';

import Settings from '../src/pages/Settings.js';
import Tables from '../src/pages/Tables.js';
import Alerts from '../src/pages/UiElements/Alerts.js';
import Buttons from '../src/pages/UiElements/Buttons.js';
function App() {
  const [{token,cart,product,catagories},dispatch]=useStateValue()

  useEffect(()=>{
    

  },[])

  return (
    <div className="App">
      <AnimatePresence>





<Routes>
    <Route path="/" element={<SignIn />} />
     <Route path="/dashboard" element={<ECommerce />} />
     <Route path="/forms/form-elements" element={<FormElements />} />
     <Route path="/forms/form-layout" element={<FormLayout />} />
     <Route path="/tables" element={<Tables />} />
     <Route path="/settings" element={<Settings />} />
     <Route path="/chart" element={<Chart />} />
     <Route path="/ui/alerts" element={<Alerts />} />
     <Route path="/ui/buttons" element={<Buttons />} />
     <Route path="/auth/signin" element={<SignIn />} />
     <Route path="/auth/signup" element={<SignUp />} />



   </Routes>













     {/* <BrowserRouter>
       <Switch>
        <Route  exact path='/'>
           <ECommerce></ECommerce>
          
        </Route>
       
       <Route  exact path='/forms/form-layout'>
          <FormLayout></FormLayout>
        </Route>
        <Route  exact path='/forms/form-elements'>
          <FormElements></FormElements>
        </Route>
        <Route  exact path='tables'>
          <Tables></Tables>
        </Route>
       
        <Route  exact path='/auth/signup'>
          <SignUp></SignUp>
        </Route>
        <Route  exact path='/auth/signin'>
          <SignIn></SignIn>
        </Route>
        <Route  exact path='/ui/buttons'>
          <Buttons></Buttons>
        </Route>
      

       </Switch>
      
      </BrowserRouter>*/}
      </AnimatePresence>
      
    </div>
      
  );
}

export default App;
