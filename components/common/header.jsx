import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button.jsx"

export default function Header(){
const headerItems = ["work", "about", "pricing"]

  return(
  <header className="flex flex-row justify-between items-center font-medium text-text-500">
  <div className="flex flex-row items-center gap-4">  
    <Link href="/"> 
      <div className="flex flex-row items-center gap-4 font-bold text-text-100">
      <Image
      src="/logo.png"
      width={32}
      height={32}
      alt="logo"
      />
       &#60;DEV ABI/&#62;
        </div>
    </Link>
      <div className="flex flex-row gap-6 items-center">
        {headerItems.map((title) =>{
          return(
              <Link key={title} href={`/${title}`} className="relative group">
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-0 group-hover:scale-100 group-hover:bg-white transition-all duration-300 ease-in-out"></span>
                <span className="relative z-10 text-text capitalize group-hover:text-white transition-all duration-300 ease-in-out">{title}</span>
            </Link>
            )
        })}
      </div>
    </div>
      <Button className="rounded-full border border-text-50 hover:bg-text-100 hover:text-background-950 hover:border-black transition-all ease-in-out duration-300" asChild>
      <Link href="/contact">Contact</Link>
      </Button>
  </header>
)
}
