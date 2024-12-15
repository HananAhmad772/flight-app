'use client'
import React from 'react';

const TopDestinations = () => {
  const destinations = [
    {
      city: 'Las Vegas',
      image: '/images/lasvegas.png',
      cityPrices: [
        { city: 'Henderson', price: '$200' },
        { city: 'Boulder City', price: '$150' },
        { city: 'Summerlin', price: '$300' },
      ],
    },
    {
      city: 'Dubai',
      image: '/images/d1.png',
      cityPrices: [
        { city: 'Abu Dhabi', price: '$400' },
        { city: 'Sharjah', price: '$350' },
        { city: 'Ajman', price: '$250' },
      ],
    },
    {
      city: 'Paris',
      image: '/images/p1.png',
      cityPrices: [
        { city: 'Versailles', price: '$500' },
        { city: 'Lyon', price: '$450' },
        { city: 'Marseille', price: '$400' },
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Top Destinations</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="w-full text-blue-900 sm:w-1/4 md:w-1/3 lg:w-1/4 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={destination.image}
              alt={destination.city}
              className="h-40 w-full object-cover"
            />
            <h3 className="text-center font-semibold py-2 text-gray-800">{destination.city}</h3>
            <div className="p-4">
              <ul className="space-y-2">
                {destination.cityPrices.map((item, i) => (
                  <li key={i} className="flex justify-between text-gray-600 border-b pb-1">
                    <span>{item.city}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;