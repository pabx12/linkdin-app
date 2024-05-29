import { Briefcase, HomeIcon, SearchIcon, UsersIcon } from 'lucide-react'
import LinkedIn_logo_initials  from '../public/LinkedIn_logo_initials.png'
import Image from 'next/image'
import Link from 'next/link'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
export default function Header() {
  return (
    <div className='flex items-center md:justify-center maw-w-6xl mx-auto p-2'>
        <Image
            src={LinkedIn_logo_initials}
            width={40}
            height={40}
            alt='Linkdin'
            className='rounded-lg'
        />
        <div className='flex-1'>
          <form className='flex items-center space-x-1 bg-gray-100 p-2  mx-2'>
            <SearchIcon className='h-4 text-gray-600'/>
            <input 
              type='text'
              placeholder='Rechercher'
              className='bg-transparent flex-1 outline-none'
             />
          </form>
        </div>
        <div className='flex items-center space-x-4 px-4'>
            <Link href="#" className='icon '>
                  <HomeIcon className='h-5'/>
                  <p>Acceuil</p>
            </Link>
            <Link href="#" className='icon hidden md:flex'>
                  <UsersIcon className='h-5'/>
                  <p>Réseaux</p>
            </Link>
            <Link href="#" className='icon hidden md:flex'>
                  <Briefcase className='h-5'/>
                  <p>Emploi</p>
            </Link>
            <Link href="#" className='icon'>
                  <Briefcase className='h-5'/>
                  <p>Message</p>
            </Link>
                <SignedOut>
                  <Button asChild variant={'default'}>
                      <SignInButton />
                  </Button>
                </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
        </div>
    </div>
  )
}
