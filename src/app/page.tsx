'use client';
// import React from 'react';
import React, { useState } from 'react';
import Topdestination from './components/Topdestination';

export default function Home() {
   // State for the form fields
   const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost/php-backend/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setResponseMessage(data.message || 'Booking successfully saved!');
                window.alert(data.message || 'Booking successfully saved!')
            } else {
                setResponseMessage(data.error || 'An error occurred');
                window.alert(data.error || 'An error occurred'); 
            }
        } catch (error) {
          setResponseMessage('Failed to submit the form');
          window.alert('Failed to submit the form');
            console.error('Error:', error);
        }
    };

  return (

    <div className="bg-blue-900 min-h-screen flex flex-col items-center text-white">
      <nav className="w-full bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/images/icon.png" alt="BookingMyFlight" className="h-8" />
          <span className="text-xl font-bold">bookingmyflight</span>
        </div>
        <ul className="hidden sm:flex space-x-6">
          <li className="hover:text-yellow-400 border-b-2 border-yellow-400">Flights</li>
          <li className="hover:text-yellow-400">Hotels</li>
          <li className="hover:text-yellow-400">E-sim</li>
          <li className="hover:text-yellow-400">Bikes</li>
          <li className="hover:text-yellow-400">Cars</li>
          <li className="hover:text-yellow-400">Blog</li>
          <li className="hover:text-yellow-400">More</li>
        </ul>
        <div className="w-full lg:w-auto hidden lg:block">
    <input
      type="text"
      placeholder="Search"
      className="w-full md:w-60 px-4 py-1 rounded-full focus:outline-none bg-blue-900 border-2 border-yellow-500"
    />
  </div>

  
  <div className="sm:block md:block lg:hidden flex items-center">
    <button className="text-white">☰</button>
  </div>
      </nav>

      <div className="relative flex flex-col items-center w-full">
        <div
          className="absolute w-full h-[520px] bg-cover bg-center opacity-100"
          style={{ backgroundImage: 'url(images/bg.png)' }}
        ></div>

        <div className="relative lg:w-[1010px] bg-white rounded-lg shadow-md w-11/12 md:w-[550px] flex flex-col md:flex-row p-6 mt-10 z-10">
        <div className="w-full md:w-1/2 lg:w-[35vw] p-6 md:pr-6 mb-6 md:mb-0">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Compare and book cheap flights</h1>
        <p className="text-black">Save up to 80% on your next flight ticket bookings</p>
      </div>

          <div className="flex-1">
        
            <div className="flex border-b mb-4">
              <button className="flex-1 text-center text-yellow-500 font-semibold border-b-2 border-yellow-500 pb-2 flex items-center justify-center">
                <img
                  src="/images/planeicon.png"
                  alt="Flights"
                  className="w-5 h-5 mr-2"
                />
                Flights
              </button>
              <button className="flex-1 text-center text-gray-500 pb-2 flex items-center justify-center">
                <img
                  src="/images/hotelicon.png"
                  alt="Hotels"
                  className="w-5 h-5 mr-2"
                />
                Hotels
              </button>
            </div>

            <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col relative">
                  <label className="text-gray-700 mb-1 font-medium">From</label>
                  <img
                    src="/images/planeicon.png"
                    alt="From Icon"
                    className="absolute left-3 top-10 w-5 h-5"
                  />
                   <select className="w-full  bg-gray-200 text-gray-500 pl-10 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                   name="from"
                   value={formData.from}
                    onChange={handleChange}
                    required>
                   <option value="">Select Origin</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Sialkot">Sialkot</option>
                  </select>
                </div>
                <div className="flex flex-col relative">
                  <label className="text-gray-700 mb-1 font-medium">To</label>
                  <img
                    src="/images/planeicon.png"
                    alt="To Icon"
                    className="absolute left-3 top-10 w-5 h-5"
                  />
                  <select className="w-full  bg-gray-200 text-gray-500 pl-10 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  name="to"
                  value={formData.to}
                    onChange={handleChange}
                    required>
                  <option value="">Select destination</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col relative">
                  <label className="text-gray-700 mb-1 font-medium">Depart</label>
                  <input
                    type="date"
                    className="w-full text-gray-500 pl-10 px-4 bg-gray-200 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    name="departure"
                    value={formData.departure}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col relative">
                  <label className="text-gray-700 mb-1 font-medium">Return</label>
                  <input
                    type="date"
                    className="w-full text-gray-500  bg-gray-200 pl-10 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    name="return"
                    value={formData.return}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex flex-col flex-1 relative">
                  <label className="text-gray-700 mb-1 font-medium">Passengers</label>
                  <img
                    src="/images/personicon.png"
                    alt="User Icon"
                    className="absolute left-3 top-10 w-5 h-5"
                  />
                  <select className="w-full  bg-gray-200 text-gray-500 pl-10 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  name='passengers'
                  value={formData.passengers}
                  onChange={handleChange}>
                     <option value="">Select passengers</option>
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                  </select>
                </div>  
              </div>
              <div className="flex justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded mt-6"
              type='submit'
              name='submit'
              >Search</button>
            </div>
           
            </div>
            </form>
            {/* <p className={`mt-4 ${responseMessage.includes("successfully") ? 'text-green-600' : 'text-red-600'}`}>
              {responseMessage}
            </p> */}
          </div>
        </div>
      </div>
      <div className='h-[100px]'/>
      <section className="w-full bg-blue-900 text-gray-900 py-10">
  <h2 className="text-3xl font-bold text-center text-white mb-6">Top Airline Deals</h2>
  <div className="w-11/12 md:w-3/4 mx-auto rounded-lg shadow-lg border overflow-hidden">
    
    <div className="overflow-x-auto">
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="bg-white text-gray-800">
            <th className="py-3 px-4">Flight</th>
            <th>Route</th>
            <th>Days</th>
            <th className="text-right pr-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((_, index) => (
            <tr key={index} className="bg-gray-50">
              <td className="py-3 px-4">Delta Airlines 8742</td>
              <td>JFK → BKK</td>
              <td>- - - - S -</td>
              <td className="text-right pr-4 text-blue-600 hover:underline">Select dates</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

      <Topdestination />
      <section className="w-full bg-blue-900 py-10  ">
  <div className="w-11/12 md:w-2/3 mx-auto flex flex-col md:flex-row items-center justify-between text-white space-y-6 md:space-y-0">
    
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-3xl font-bold">Why Choose Us</h2>
      <p className="text-gray-300">
        Discover the best flights, hotels, and packages tailored for your perfect travel experience.
        We provide premium deals, low-price guarantees, and unrivaled travel assistance.
      </p>
    </div>
    
    <div className="flex-1 pl-56 mt-6 md:mt-0">
      <div className="flex flex-col gap-8 text-left">
        <div className="flex items-center">
          <span className="mr-2">🛫</span>
          <span className="font-semibold">Low-Cost Flights</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">🏨</span>
          <span className="font-semibold">Exclusive Hotel Deals</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">💼</span>
          <span className="font-semibold">Business Travel Support</span>
        </div>
      </div>
    </div>
  
  </div>
</section>


      <section className="w-full bg-white py-10">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Popular Hotels</h2>
  <div className="w-11/12 md:w-3/4 mx-auto space-y-6">
    {[...Array(5)].map((_, index) => (
      <div key={index} className="flex flex-col md:flex-row items-center shadow-lg rounded-lg p-4 border">
        <img
          src="images/h1.png"
          alt="Hotel"
          className="h-36 w-[120px] md:h-24 md:w-30 object-cover rounded mb-4 md:mb-0 md:mr-4"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-black text-lg md:text-xl">Amazing Mai Khao Phuket Villas</h3>
          <p className="text-gray-600 text-sm md:text-base">30.44 km from city center</p>
          <div className="text-yellow-500 mt-1 text-xs md:text-base">🌟🌟🌟🌟🌟</div>
          <div className="flex items-center mt-2">
  <span className="bg-yellow-400 text-white px-2 py-1 rounded-md text-sm md:text-base mr-2">9.2</span>
  <span className="text-gray-600 text-sm md:text-base">Guest Reviews</span>
</div>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <p className="text-xl text-black">$445</p>
          <p className="text-gray-400 text-sm">Per Night</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 mt-4 rounded-md">
            View Hotel
          </button>
        </div>
      </div>
      
    ))}
  </div>
</section>
<section className="w-full bg-blue-900 py-10">
  <div className="w-11/12 mx-auto flex flex-col md:flex-row text-white space-y-10 md:space-y-0 md:space-x-10">
    
    {/* First Section: Logo and Name */}
    <div className="flex-1 text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start space-x-4">
        <img src="/images/icon.png" alt="Logo" className="h-12" />
        <span className="text-xl font-bold">bookingmyflight</span>
      </div>
    </div>

    {/* Second Section: Newsletter Subscription */}
    <div className="flex-1 text-center md:text-left">
      <h4 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h4>
      <div className="flex flex-col space-y-4 items-center md:items-start">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-64 md:w-80 rounded-md text-black focus:outline-none"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md">
          Subscribe
        </button>
      </div>
    </div>

    {/* Third Section: Quick Links */}
    <div className="flex-1 text-center md:text-left">
      <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
      <div className="flex flex-col space-y-4 items-center md:items-start">
        <a href="/" className="hover:text-yellow-400">Home</a>
        <a href="/flights" className="hover:text-yellow-400">Flights</a>
        <a href="/hotels" className="hover:text-yellow-400">Hotels</a>
        <a href="/packages" className="hover:text-yellow-400">Packages</a>
        <a href="/about" className="hover:text-yellow-400">About Us</a>
        <a href="/contact" className="hover:text-yellow-400">Contact</a>
      </div>
    </div>

  </div>
</section>



 </div>

 );
}
