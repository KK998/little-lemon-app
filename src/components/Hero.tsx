import React from 'react'
import cn from '../util/cn'
import Container from './Container'

type Props = React.PropsWithChildren<{
    image: string
}> & React.HTMLAttributes<HTMLDivElement>

function Hero({ image, children, className, ...props }: Props) {
    return (
        <section className={"relative"} {...props}>
            <img src={image} alt="Hero section placeholder" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000dd] from-10% to-[#00000033]" />
            <Container className={cn("absolute inset-0 flex flex-col justify-center", className)}>
                {children}
            </Container>
        </section>
    )
}

export default Hero