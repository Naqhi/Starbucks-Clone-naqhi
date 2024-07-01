import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../styles/BaristaRecommendComponent.css";
import "../styles/BannerComponent.css"



const BannerComponent = ()=>
    {
        return(
            <div className='p-5 lg:pl-20 lg:pr-20'>
                 <div className="mt-10 relative">
                <div className="swiper-button image-swiper-button-prev-banner absolute">
                    <img src="https://www.starbucks.in/swiperbtnleft.22de7f3e8db5d523.svg" alt="prev"></img>
                </div>

                <div className="swiper-button image-swiper-button-next-banner absolute">
                    <img src="https://www.starbucks.in/swiperbtnright.cbc1d309941ecd98.svg" alt="prev"></img>
                </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation,]}
                navigation={{
                    nextEl: ".image-swiper-button-next-banner",
                    prevEl: ".image-swiper-button-prev-banner",
                    disabledClass:"swiper-button-disabled",

                }}
                pagination={{ clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                mousewheel={true}
                
                >
                <SwiperSlide>
                    <div className='w-full rounded-lg shadow-sm p-4 bg-[#00744a] relative cursor-poitner'>
                        <div className='flex justify-end'>
                            <span className='text-xs font-semibold text-white'>*Selected stores only</span>
                        </div>

                        <div className='lg:pr-10 grid grid-cols-[1fr_9fr] gap-x-4'>
                            <div>
                                <img className='absolute left-0' src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1087_b1db5faed6.png'
                                width={80}></img>
                            </div>
                            <div className='z-50 pl-5 '>
                                <p className='text-white'>New Brewing</p>
                                <p className='mt-2 font-semibold text-xl text-white'>Starbucks Menu</p>
                                <p className='mt-2 text-white'> Indulge in season's feasting! Make your sips extra special. Explore Menu. </p>
                                <div className=' mt-5 flex justify-between'>
                                    <div className='flex flex-col'>
                                        <span className='text-white'>Starting From</span>
                                        <span className='text-white font-bold'>Rs 250</span>
                                    </div>
                                    <div className='btn'>
                                        <button className='bg-[#00654a] text-white w-52 rounded-full font-semibold text-sm h-12'>Order Now</button>

                                    </div>


                                </div>
                               
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <div className='w-full rounded-lg shadow-sm p-4 bg-[#484848] relative cursor-poitner'>
                        <div className='flex justify-end'>
                            <span className='text-xs font-semibold text-white'>*Selected stores only</span>
                        </div>

                        <div className='lg:pr-10 grid grid-cols-[1fr_9fr] gap-x-4'>
                            <div>
                                <img className='absolute left-0' src='	https://www.starbucks.in/assets/images/offers_vanilla_img.png'
                                width={80}></img>
                            </div>
                            <div className='z-50 pl-5 '>
                                <p className='text-white'>Introducing</p>
                                <p className='mt-2 font-semibold text-xl text-white'>The perfect Expresso</p>
                                <p className='mt-2 text-white'> Sourced only from the World's Top 3% Arabica Beans, served with love </p>  
                                <div className=' mt-5 flex justify-between'>
                                    <div className='flex flex-col'>
                                        {/* <span className='text-white'>Starting From</span>
                                        <span className='text-white font-bold'>Rs 250</span> */}
                                    </div>
                                    <div className='btn'>
                                        <button className='bg-white text-[#080808] w-52 rounded-full font-semibold text-sm h-12'>Order Now</button>

                                    </div>


                                </div>
                               
                                
                            </div>
                        </div>
                    </div> </SwiperSlide>
                {/* <SwiperSlide> <div className='w-full rounded-lg shadow-sm p-4 bg-[#00744a] relative cursor-poitner'>
                        <div className='flex justify-end'>
                            <span className='text-xs font-semibold text-white'>*Selected stores only</span>
                        </div>

                        <div className='grid grid-cols-[1fr_9fr] gap-x-4'>
                            <div>
                                <img className='absolute left-0' src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1087_b1db5faed6.png'
                                width={80}></img>
                            </div>
                            <div>
                                <p className='text-white'>New Brewing</p>
                                <p className='mt-2 font-semibold text-xl text-white'>Starbucks Menu</p>
                                <p className='mt-2 text-white'> Indulge in season's feasting! Make your sips extra special. Explore Menu. </p>
                                <div className=' mt-5 flex justify-between'>
                                    <div className='flex flex-col'>
                                        <span className='text-white'>Starting From</span>
                                        <span className='text-white font-bold'>Rs 250</span>
                                    </div>
                                    <div className='btn'>
                                        <button className='bg-[#00654a] text-white w-52 rounded-full font-semibold text-sm h-12'>Order Now</button>

                                    </div>


                                </div>
                               
                                
                            </div>
                        </div>
                    </div> </SwiperSlide>
                <SwiperSlide>  <div className='w-full rounded-lg shadow-sm p-4 bg-[#00744a] relative cursor-poitner'>
                        <div className='flex justify-end'>
                            <span className='text-xs font-semibold text-white'>*Selected stores only</span>
                        </div>

                        <div className='grid grid-cols-[1fr_9fr] gap-x-4'>
                            <div>
                                <img className='absolute left-0' src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1087_b1db5faed6.png'
                                width={80}></img>
                            </div>
                            <div>
                                <p className='text-white'>New Brewing</p>
                                <p className='mt-2 font-semibold text-xl text-white'>Starbucks Menu</p>
                                <p className='mt-2 text-white'> Indulge in season's feasting! Make your sips extra special. Explore Menu. </p>
                                <div className=' mt-5 flex justify-between'>
                                    <div className='flex flex-col'>
                                        <span className='text-white'>Starting From</span>
                                        <span className='text-white font-bold'>Rs 250</span>
                                    </div>
                                    <div className='btn'>
                                        <button className='bg-[#00654a] text-white w-52 rounded-full font-semibold text-sm h-12'>Order Now</button>

                                    </div>


                                </div>
                               
                                
                            </div>
                        </div>
                    </div></SwiperSlide> */}
                     
            
            </Swiper>


            </div>
        </div>
        )


    }


    export default BannerComponent;