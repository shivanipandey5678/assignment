import React from 'react'
import Edit from './Edit'
import LoadingPage from '../components/common/Loading'
import EmployeeTable from '../components/employee/EmployeeTable'
import Navbar from '../components/employee/Navbar'

const Home = () => {
  return (
    <div className='px-4'>
      <Navbar />
      <EmployeeTable/>
      
    </div>
  )
}

export default Home
