import React from 'react';
import { Footer, Header } from '../../components/ExportComponent/ExportComponent';

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <main className='base-layout__main'>
        {children}
      </main>
      <Footer />
    </>
  )
}
