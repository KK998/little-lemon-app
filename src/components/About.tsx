import Container from './Container'
import Typography from './Typography'

import colors from '../util/colors'
import cn from '../util/cn'

import RestaurantSVG from "../assets/Restaurant.svg";
import FoodSVG from "../assets/Food.svg";

function About() {
    return (
        <section data-testid="about" className='w-full flex flex-col items-center justify-center px-4 py-10 md:px-0 md:py-32'>
            <Container className='flex flex-col md:flex-row md:justify-between'>
                <div className='flex flex-col md:w-[360px]'>
                    <Typography data-testid="about--title" tag="h4" type='Display title' className={colors.text.primary.yellow}>
                        Little Lemon
                    </Typography>
                    <Typography data-testid="about--subtitle" tag="h5" type='Sub title' className={cn(colors.text.secondary.black, "mb-4")}>
                        Chicago
                    </Typography>
                    <Typography data-testid="about--description" tag="p" type='Lead text' className={cn(colors.text.secondary.black, "md:text-justify")}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit netus pharetra eros mauris,
                        libero litora lectus vel ullamcorper cursus faucibus mi pellentesque penatibus odio,
                        ultrices natoque porta hendrerit elementum ornare viverra gravida ad placerat.
                    </Typography>
                </div>
                <div data-testid="about--images" className='md:flex flex-col items-end flex-grow relative md:h-[494px] max-w-full grid grid-cols-2 gap-4 mt-4 md:gap-0 md:mt-0'>
                    <img src={RestaurantSVG} alt='first opening of restaurant' className='w-full md:w-[250px] md:h-[282px] object-cover max-w-full md:absolute z-10 rounded-2xl md:top-10 md:right-0' />
                    <img src={FoodSVG} alt='food' className='w-full md:w-[250px] md:h-[282px] relative rounded-2xl md:-bottom-40 md:right-32 object-cover max-w-full' />
                </div>
            </Container>
        </section>
    )
}

export default About