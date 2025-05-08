import { createServerClient } from '@/lib/supabase'
import SignInWithGoogleButton from './components/SignInWithGoogle'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const supabase = await createServerClient()
  const { data } = await supabase.auth.getUser()
  const { user } = data

  if (user) redirect('/')

  return (
    <div>
      <form>
        <SignInWithGoogleButton />
      </form>
    </div>
  )
}
