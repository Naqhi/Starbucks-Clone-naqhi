import React from 'react';


const LatestOfferComponent= () => {
    return(
        <div className='p-5 lg:pl-20 lg:pr-20'>
            <div>
                <span className='text-[#1e3932] font-bold text-2xl'>Latest Offerings</span>
            </div>

            <div className='mt-5 lg:grid grid-cols-[2fr_2fr_2fr] lg:gap-x-5 flex flex-col justify-center'>
                <div>
                    <div className='bg-white rounded-lg mt-5 cursor-pointer'
                            style={{boxShadow:"0px 5px 15px rgba(0,0,0,0.35)"}}>
                        <img src="https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100433.webp" 
                        className='object-cover rounded-t-lg h-40 w-full'
                        alt='mocha'></img>
                    </div>
                    <div className='bg-[#f9f9f9] p-7 rounded-b-lg'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#00754A"/>
                        <circle cx="8" cy="8" r="4" fill="#00754A"/>
                        </svg>
                        <p className='text-[#1e3932] text-lg font-semibold mt-1'>Caffe Americano</p>
                        <p className='text-xs text-[#6c757d] mt-1'>{" "}SHORT(237 Ml) .0 kcal{" "}</p>
                        <p className='text-[#6c757d] text-xs mt-2'>Rich in flavour, full-bodied espresso with hot water in true European style...</p>

                        <div className="mt-5 flex justify-between items-center">
                        <div>
                            <span className="font-semibold text-sm">₹ 372
                                <span className="text-xs">.75</span></span>
                        </div>
                        <div>
                            <button className="border-2 p-2 w-32 rounded-3xl text-white bg-[#00745a]">Add item</button>
                        </div>
                    </div>

                    </div>
                </div>
                <div>
                    <div className='bg-white rounded-lg mt-5 cursor-pointer'
                            style={{boxShadow:"0px 5px 15px rgba(0,0,0,0.35)"}}>
                        <img src="https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/104072.webp" 
                        className='object-cover rounded-t-lg h-40 w-full'
                        alt='mocha'></img>
                    </div>
                    <div className='bg-[#f9f9f9] p-7 rounded-b-lg'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#00754A"/>
                        <circle cx="8" cy="8" r="4" fill="#00754A"/>
                        </svg>
                        <p className='text-[#1e3932] text-lg font-semibold mt-1'>Iced Chocolate Cappuccino</p>
                        <p className='text-xs text-[#6c757d] mt-1'>{" "}TALL(354 ML) .161 kcal{" "}</p>
                        <p className='text-[#6c757d] text-xs mt-2'>Signature Italian style Cappuccino with espresso shot, mocha sauce, steamed milk and a thick layer of foam, served over ice...</p>
                        <div className="mt-5 flex justify-between items-center">
                        <div>
                            <span className="font-semibold text-sm">₹ 257
                                <span className="text-xs">.00</span></span>
                        </div>
                        <div>
                            <button className="border-2 p-2 w-32 rounded-3xl text-white bg-[#00745a]">Add item</button>
                        </div>
                    </div>

                    </div>
                </div>
                <div>
                    <div className='bg-white rounded-lg mt-5 cursor-pointer'
                            style={{boxShadow:"0px 5px 15px rgba(0,0,0,0.35)"}}>
                        <img src="https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100485.webp" 
                        className='object-cover rounded-t-lg h-40 w-full'
                        alt='mocha'></img>
                    </div>
                    <div className='bg-[#f9f9f9] p-7 rounded-b-lg'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#00754A"/>
                        <circle cx="8" cy="8" r="4" fill="#00754A"/>
                        </svg>
                        <p className='text-[#1e3932] text-lg font-semibold mt-1'>Iced White Mocha</p>
                        <p className='text-xs text-[#6c757d] mt-1'>{" "}TALL(354 ML) .339 kcal{" "}</p>
                        <p className='text-[#6c757d] text-xs mt-2'>Espresso combined with white mocha sauce and milk over ice. Topped with whipped vanilla topping...</p>

                        <div className="mt-5 flex justify-between items-center">
                        <div>
                            <span className="font-semibold text-sm">₹ 346
                                <span className="text-xs">.50</span></span>
                        </div>
                        <div>
                            <button className="border-2 p-2 w-32 rounded-3xl text-white bg-[#00745a]">Add item</button>
                        </div>
                    </div>

                    </div>
                </div>

            </div>

        </div>
    )
}


export default LatestOfferComponent;