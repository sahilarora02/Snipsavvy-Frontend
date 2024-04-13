import React from 'react';
import { Button } from '@/components/hero/Button';
import { Logo } from '@/components/hero/Logo';
import Link from 'next/link';
import AddModal from '@/components/AddModal';

/*declare module 'react' {
  interface JSX.IntrinsicElements {
    div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  }
}*/

export default function Home() {
  return (
    <div className="h-screen hero-section">
      <div className="flex flex-col items-center justify-center h-screen">
        <Logo className='text-6xl'/>
        <p className="text-xl text-gray-400 mb-8 text-left font-semibold"><span className="text-white font-semibold">It is the ultimate code snippet management tool.</span> We at SnipSavvy aim to improve developer experience by providing you with a platform where you can store and share code snippets</p>
        <Link href='/'><Button description='Create your first Workspace'></Button></Link>
        <AddModal/>
      </div>
    </div>
  )
}