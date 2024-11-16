import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Feed() {
  const supabase = await createClient()
  const {data, error} = await supabase.auth.getUser()

  if(error || !data.user){
    redirect('/login')
  }
  
  return (
    <div>Olá, {data.user.email}</div>
  )
}
