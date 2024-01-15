import React from 'react'
import cn from '../util/cn'
import colors from '../util/colors'
import Typography from './Typography'
import Dish from "../assets/Dish.svg";
import { Link } from 'react-router-dom'

type Props = React.HTMLAttributes<HTMLDivElement> & {
    name: string
    description: string
    price: number
    image: string
    link: string
}

function FoodCard({
    name,
    description,
    price,
    image,
    link,
    className,
    ...props
}: Props) {
    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    return (
        <div className={cn("flex w-full sm:w-1/2 md:w-1/4 flex-col flex-grow rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow", className)} {...props}>
            <Link to={link}>
                <img src={image} alt={name} className='w-full h-[200px] object-cover' />
            </Link>
            <div className={cn('flex flex-col p-4 flex-grow', colors.bg.secondary.white)}>
                <div className='flex items-center justify-between mb-4'>
                    <Link to={link}>
                        <Typography tag="h3" type="Section categories" className={colors.text.secondary.black}>
                            {name}
                        </Typography>
                    </Link>
                    <Typography tag="h3" type="Section categories" className={colors.text.secondary.orange}>
                        {formattedPrice}
                    </Typography>
                </div>
                <Typography tag="p" type="Regular text" className={cn(colors.text.secondary.black, "mb-4")}>
                    {description}
                </Typography>
                <Link to={link} className='flex items-center mt-auto'>
                    <Typography tag="p" type="Highlight text" className={colors.text.secondary.black}>
                        Order a delivery
                    </Typography>
                    <img src={Dish} alt="Dish" className='ml-2' />
                </Link>
            </div>
        </div>
    )
}

export default FoodCard