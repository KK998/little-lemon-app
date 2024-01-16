import Container from './Container'
import Typography from './Typography'

import colors from '../util/colors'
import cn from '../util/cn'

import RestaurantSVG from "../assets/Restaurant.svg";
import FoodSVG from "../assets/Food.svg";

function About() {
    return (
        <section data-testid="about" className='w-full flex flex-col items-center justify-center py-32'>
            <Container className='flex justify-between'>
                <div className='flex flex-col w-[360px]'>
                    <Typography data-testid="about--title" tag="h4" type='Display title' className={colors.text.primary.yellow}>
                        Little Lemon
                    </Typography>
                    <Typography data-testid="about--subtitle" tag="h5" type='Sub title' className={cn(colors.text.secondary.black, "mb-4")}>
                        Chicago
                    </Typography>
                    <Typography data-testid="about--description" tag="p" type='Lead text' className={cn(colors.text.secondary.black, "text-justify")}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit netus pharetra eros mauris,
                        libero litora lectus vel ullamcorper cursus faucibus mi pellentesque penatibus odio,
                        ultrices natoque porta hendrerit elementum ornare viverra gravida ad placerat.
                    </Typography>
                </div>
                <div data-testid="about--images" className='flex flex-col items-end flex-grow relative sm:h-[494px] max-w-full'>
                    <img src={RestaurantSVG} alt='first opening of restaurant' className='w-[250px] h-[282px] object-cover max-w-full absolute z-10 rounded-2xl top-10 right-0' />
                    <img src={FoodSVG} alt='food' className='w-[250px] h-[282px] relative rounded-2xl -bottom-40 right-32 object-cover max-w-full' />
                </div>
            </Container>
        </section>
    )
}

export default About