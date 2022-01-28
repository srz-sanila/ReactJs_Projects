import React from 'react';
import { Routes, Link, Route } from 'react-router-dom'
import AddCompany from './AddCompany'
import DisplayCompany from "./DisplayCompany"
import UpdateCompany from "./UpdateCompany"

function Home() {

  const company = {
    c_name: '',
    c_ceo: '',
    c_founded: undefined,
    c_head: '',
    c_empNo: undefined
}

  return <div>
      <div>
          <ul style={{listStyleType: "none"}}>
            <li><Link to='/'>Add Company</Link></li>
            <li><Link to='/view'>View Company</Link></li>
          </ul>
        </div>

        <div>
            <h3>Home Page ......</h3>
        </div>

        <div>
          <Routes>
            <Route path='/' element={<AddCompany company ={company} option='add' />} />
            <Route path='/view' element={<DisplayCompany />} />
            <Route path='/edit' element={<UpdateCompany />} />
          </Routes>
        </div>
  </div>;
}

export default Home;