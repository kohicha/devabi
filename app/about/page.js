import Image from 'next/image'

export default function About(){
  return(
    <>
      <main className="mt-24">
        <div className="flex flex-row items-center gap-12">
          <Image
          src="/logo.png"          
          width={256}
          height={256}
          alt="logo"
          quality={100}
          />
          <span className="text-6xl font-bold text-white">DEV ABI</span>
        </div>
      </main>
      <section>
      </section>
    </>
  )
}
