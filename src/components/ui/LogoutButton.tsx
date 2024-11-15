"use client"
import { logout } from '@/actions/logout'
import React from 'react'

export default function LogoutButton() {
  return (
    <button onClick={()=>logout()}>LogoutButton</button>
  )
}
