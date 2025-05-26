import React from 'react';

const Banner = () => {
    return (
        <div className={`w-full h-2/5 bg-[url(/images/banner_1.png)] bg-cover px-16 flex items-center justify-center`}>
            <h1 className={`text-white text-5xl font-bold text-center`}>
                Get inspired, cook with passion and enjoy unforgettable moments at the table.
            </h1>
        </div>
    );
};

export default Banner;