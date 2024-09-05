import React from 'react'
import AppHeader from '../../AppHeader/AppHeader'
import SideNavBar from '../../SideNavBar/SideNavBar'
import ExpneseListing from '../../../Screens/Expense/List/ExpneseListing'

const SideNavLayout = ({children}) => {
  return (
        <div className='w-screen h-screen'> 
    {/* {AppHeader} */}
  <div className='h-[80px]'> 
    <AppHeader/> 
  </div>

  <div className='h-[calc(100%-80px)] flex overflow-auto'> 

{/* {SideNavBar} */}
    <div className='w-[250px] h-full'>
      <SideNavBar/>  
    </div>

    <div className='flex-1 overflow-auto'>  {children} </div>

  

  </div>
    
     </div>
  )
}

export default SideNavLayout
