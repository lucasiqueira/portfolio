import linkedin from '@/assets/svg/linkedin.svg'
import github from '@/assets/svg/github.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className={`mb-3 text-2xl font-semibold`}>Portfólio em construção</p>
      </div>
      <div className="grid text-center lg:grid-cols-2">
      <a href="https://www.linkedin.com/in/lucasvsiqueira/" target="_blank" style={{marginRight: "10px"}}>
          <Image src={linkedin} alt="LinkedIn" className={`max-w-[10ch]`} />
        </a>
        <a
          href="https://github.com/lucasiqueira"
          target="_blank"
        >
          <Image src={github} alt="LinkedIn" className={`max-w-[10ch]`} />

        </a>
      </div>

    </main>
  )
}
