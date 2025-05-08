'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createServerClient } from '@/lib/supabase/server'

export const login = async (formData: FormData) => {
  const supabase = await createServerClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export const signUp = async (formData: FormData) => {
  const supabase = await createServerClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const firstName = formData.get('first-name') as string
  const lastName = formData.get('last-name') as string
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        full_name: `${firstName + ' ' + lastName}`,
        email: formData.get('email') as string,
      },
    },
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export const signOut = async () => {
  const supabase = await createServerClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log(error)
    redirect('/error')
  }

  redirect('/logout')
}

/**
 *
 * @param origin - URL passed by the client to redirect the user after successful login
 */
export const signInWithGoogle = async (origin: string) => {
  const supabase = await createServerClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })

  if (error) {
    console.log(error)
    redirect('/error')
  }

  redirect(data.url)
}
