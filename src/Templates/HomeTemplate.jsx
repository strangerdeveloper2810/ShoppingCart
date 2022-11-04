import React from 'react'
import Header from '../Components/Header/Header'
import {Outlet} from "react-router-dom"
export default function HomeTemplate(props) {
  return (
    <div>
        <Header/>
        <Outlet/>

        {/* Outlet giống như props.children (class thì this.props.children) là những thẻ con được truyền vào trong thẻ đóng mở của <Route></Route> */}
    </div>
  )
}
