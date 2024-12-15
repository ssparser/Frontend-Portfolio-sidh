import React from 'react';

const ServiceCard = ({ imgURL, label, subText }) => {
  return (
    <div className="flex-1 sm:max-w-xs sm:max-h-xs w-full rounded-[20px] shadow-3xl px-10 py-16 max-sm:px-6 max-sm:py-10">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full mx-auto max-sm:w-9 max-sm:h-9">
        <img src={imgURL} alt={label} className="z-10 max-sm:w-6 max-sm:h-6" />
      </div>
      <h3 className="font-bold font-palanquin text-lg text-center mt-4 max-sm:text-base">
        {label}
      </h3>
      <p className="italic font-montserrat mt-3 text-center max-sm:text-sm">
        {subText}
      </p>
    </div>
  );
};

export default ServiceCard;
