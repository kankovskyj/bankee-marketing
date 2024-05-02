import React from 'react'
import { UnderlineText } from './ui/Underline'
import { Button } from './ui/Button'
import Image from 'next/image'
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='lg:pt-20 pb-6 pt-20 bg-[#A2EB99] flex flex-col'>
        <h1 className='text-3xl lg:text-5xl font-bold text-center tracking-tight text-[#26274b]'>Potřebujete půjčku, ale v bance vám ji nedají<span className='pl-1'>?</span></h1>
        <p className='text-xl text-center lg:w-2/3 mx-auto pt-6 pb-6 text-[#26274b] leading-normal'>My vám půjčku schválíme do <UnderlineText strokeColor='#fc9f64' className='font-bold text-2xl pb-0.5 lg:pb-1'>72 hodin</UnderlineText>. Stačí vyplnit krátký dotazník a my se s vámi spojíme.</p>
        <div className='relative mx-auto'>
        <Button variant="dark" className="rounded-full mx-auto bg-transparent py-0 h-auto text-lg text-[#fc9f64]" size="sm" >
              Chci půjčku
            </Button>
            
        <Image
            src="/arrow-calc-orange.svg"
            alt="arrow right"
            width={220}
            height={125}
            className=" z-10 h-40 w-[11rem] rotate-90 absolute -right-[6rem] top-0"
          />
        </div>
      
    </div>
  )
}

export default Hero