'use client'


import Link from 'next/link'

export default function NotFound() {

  return (
    <>
      <section className="relative z-10 bg-dark py-[120px] min-h-screen">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                This page is not found!
                </h4>
              
                <Link 
                  href="/"
                  className="inline-block rounded-lg border mt-8 border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-primary"
                >
                  Go To Home
                </Link>
              </div>
            </div>
          </div>
        </div>

   
      </section>
    </>
  )
}