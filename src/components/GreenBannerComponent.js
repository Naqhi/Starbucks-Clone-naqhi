import React from "react";

const GreenBannerComponent = () => {
    return (
        <div className="bg-[#28564a] w-100 mt-5 mb-5 lg:pl-20 p-6 lg:pr-20 flex item-center xl:justify-between flex-col xl:flex-row">
            <div>
                <span className="text-white text-l font-light text-center">A World of rewards awaits for you! Sign up now</span>
            </div>

            <div>
                <button className="text-white text-sm border-white border-2 p-1 pl-2 pr-2 rounded-3xl mt-2 xl:mt-0">Know More</button>
            </div>
        </div>
    )

}


export default GreenBannerComponent;