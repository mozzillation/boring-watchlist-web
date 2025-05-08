import { createServerClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'

type AuthLayoutProps = Readonly<{
  children: React.ReactNode
}>

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
  const supabase = await createServerClient()
  const { data } = await supabase.auth.getUser()
  const { user } = data

  if (user) redirect('/')

  return (
    <section id="auth" className={`min-h-screen h-full flex flex-col`}>
      <div className={`flex flex-col h-full grow`}>{children}</div>
      <footer
        className={`flex flex-row p-4 items-center content-center justify-center gap-6 text-sm text-muted-foreground select-none`}
      >
        <div>{new Date().getFullYear()} Boring Watchlist</div>
        <div>Privacy</div>
        <div>Terms</div>
      </footer>
    </section>
  )
}

export default AuthLayout
