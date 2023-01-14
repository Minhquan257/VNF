import React from 'react';
// import Image from 'next/image';
// import { Carousel } from 'flowbite-react'
import Listimage from '../components/Carousel'

import image from '../image';

const Aboutus = () => {
    return(
        <div className="flex flex-col px-36">
            <div className="h-full mt-10">
                {/* <Carousel slideInterval={1000}>
                    <div>                        
                        <Image 
                            src = {image.product3}
                            alt='product'
                        />
                        <Image 
                            src = {image.product2}
                            alt='product'
                        />
                    </div>
                    <div>
                        <Image 
                            src = {image.product9}
                            alt='product'
                        />
                        <Image 
                            src = {image.product4}
                            alt='product'
                        />
                    </div>
                    <div>
                        <Image 
                            src = {image.product6}
                            alt='product'
                        />
                        <Image 
                            src = {image.product8}
                            alt='product'
                        />
                    </div>
                    <Image 
                        src={image.bannerslogan}
                        alt='use'
                    />
                    <Image 
                        src={image.bg}
                        alt='use'
                    />
                </Carousel> */}
                <Listimage />
            </div>
            <div>            
                <p className="dark:text-white text-prim-black-1 font-poppins font-semibold text-lg my-4">About us</p>
                <p className="dark:text-white text-prim-black-1 font-poppins my-1">By thorough understand of product quality as well as customer demands, we are confident in our ability to provide customers premium value products at reasonable prices.</p>
                <p className="dark:text-white text-prim-black-1 font-poppins my-1">As an importer, our imported products are produced and packed by leading prestigious factories in the world with all necessary certifications and documents for quality as well as country of origin, etc. This guarantees safety for our customers while also benefit for our product distributors.</p>
                <p className="dark:text-white text-prim-black-1 font-poppins my-1">As an exporter, we are supplying products to customers globally. Our products are processed and packed by our qualified factories group with full certificates and export licenses to the EU, Japanese, American markets, etc.</p>
            </div>

        </div>
    )
}

export default Aboutus;