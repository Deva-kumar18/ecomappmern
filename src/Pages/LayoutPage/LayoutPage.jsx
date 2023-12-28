import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Content from '../../components/Content/Content'

const LayoutPage = () => {
  return (
    <div className='layout-container'>
      <Sidebar/>
      <Navbar/>
      <Content/>
    </div>
  )
}

export default LayoutPage
