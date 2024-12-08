import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Pedidos() {
  return (
    <div>
        <h1>Pedidoc</h1>
        <Outlet/>
    </div>
  )
}
