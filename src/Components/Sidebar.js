import React from 'react'
import { BsPCircle } from 'react-icons/bs'
import {RxAvatar, RxDashboard, RxDisc, RxDragHandleDots2} from 'react-icons/rx'
import {BiCoinStack} from 'react-icons/bi'
import { TbHelpOctagon} from 'react-icons/tb'

function Sidebar() {
  return (
    <aside id='sidebar'>
      <div className='sidebar-title'>

        <div className='sidebar-brand'>
          <RxDashboard className='icon_header' /> Dashboard
        </div>
        <span className='icon close_icon'>X</span>
      </div>

      <ul className='sidebar-list'>

        <li className='sidebar-list-item'>
          <a href=''> <RxDragHandleDots2 className='icon ic1' />Dashboard</a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''> <RxDisc className='icon' />Product</a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''> <RxAvatar className='icon' />Customers</a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''> <BiCoinStack className='icon' />Income</a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''> <BsPCircle className='icon' />Promote</a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''> <TbHelpOctagon className='icon' />Help</a>
        </li>


      </ul>
    </aside>
  )
}

export default Sidebar