'use client'

import { motion, Variants } from 'motion/react'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { signInWithGoogle } from '@/lib/auth-actions'

const MOTION_PARENT: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      type: 'spring',
      damping: 100,
    },
  },
}

const MOTION_CHILD: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}

const CreateAccountPage = () => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center content-center h-full grow`}
    >
      <header className={`p-4 flex flex-row w-full`}>
        <Link href="/" passHref>
          <Button variant="secondary" size="icon">
            <ArrowLeft strokeWidth={3} />
          </Button>
        </Link>
      </header>
      <motion.main
        variants={MOTION_PARENT}
        initial="initial"
        animate="animate"
        className={`w-full flex-1 flex items-center content-center justify-center`}
      >
        <div className="flex flex-col gap-6 p-4 w-full max-w-xl">
          <motion.h1
            className={`text-center text-4xl font-semibold`}
            variants={MOTION_CHILD}
          >
            Your account awaits
          </motion.h1>

          <motion.div
            className={`w-full flex flex-row gap-4 items-center content-center justify-evenly`}
            variants={MOTION_CHILD}
          >
            <Button
              variant="default"
              size="lg"
              className={`flex-1`}
              onClick={() => signInWithGoogle(window.location.origin)}
            >
              Continue with Google
            </Button>
          </motion.div>
          {/* <motion.div
            className={`w-full flex flex-row gap-2 items-center content-center justify-center text-sm`}
            variants={MOTION_CHILD}
          >
            <div className={`text-muted-foreground`}>
              Already have an account?
            </div>
            <div className={`font-semibold`}>Log in</div>
          </motion.div> */}
        </div>
      </motion.main>
    </div>
  )
}

export default CreateAccountPage
