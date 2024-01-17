import React from 'react'
import Container from './Container'
import Typography from './Typography'
import colors from '../util/colors'
import cn from '../util/cn'

type TestimonialCardProps = {
    rating: number
    name: string
    review: string
    image: string
} & React.HTMLAttributes<HTMLDivElement>

function TestimonialCard({
    rating,
    name,
    review,
    image,
    className,
    ...props
}: TestimonialCardProps) {
    return (
        <article data-testid="testimonial" className={cn('flex flex-col p-5 gap-2 rounded-xl shadow-xl w-full sm:w-1/2 md:w-1/5 flex-grow', colors.bg.secondary.white, className)} {...props}>
            <Typography tag="p" type='Lead text' className={colors.text.secondary.black}>
                {rating} / 5
            </Typography>
            <div className='flex items-center justify-start gap-3'>
                <img width={`50px`} height={`50px`} className='object-contain rounded-2xl' src={image} alt={name} />
                <Typography tag={"p"} type='Card title' className={colors.text.secondary.black}>
                    {name}
                </Typography>
            </div>
            <Typography tag={"p"} type='Regular text' className={colors.text.secondary.black}>
                {review}
            </Typography>
        </article>
    )
}


function Testimonials() {
    return (
        <section data-testid="testimonials" className={cn('flex flex-col items-center justify-center gap-5 py-10 px-4 mx:px-0 md:py-32', colors.bg.primary.green)}>
            <Typography data-testid="testimonials--title" tag="h3" type='Display title' className={colors.text.secondary.white}>
                Testimonials
            </Typography>
            <Container className='flex flex-wrap gap-5'>
                <TestimonialCard
                    rating={4}
                    image='https://i.pravatar.cc/50?img=1'
                    name='John Doe'
                    review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
                />
                <TestimonialCard
                    rating={3}
                    image='https://i.pravatar.cc/50?img=70'
                    name='John Doe'
                    review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
                />
                <TestimonialCard
                    rating={4}
                    image='https://i.pravatar.cc/50?img=3'
                    name='John Doe'
                    review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
                />
                <TestimonialCard
                    rating={5}
                    image='https://i.pravatar.cc/50?img=69'
                    name='John Doe'
                    review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
                />
            </Container>
        </section>
    )
}

export default Testimonials