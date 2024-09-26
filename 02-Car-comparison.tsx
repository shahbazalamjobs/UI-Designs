'use client'

import { useState } from 'react'
import { ChevronDown, Battery, Clock, Gauge, Fuel, Shield, Sun, Moon, Search, Zap, DollarSign, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CarDetails {
  brand: string
  model: string
  image: string
  type: string
  transmission: string
  price: number
  range: number
  chargingTime: string
  acceleration: string
  topSpeed: number
  batteryCapacity: number
  fuelEconomy: string
  warranty: string
}

const carData: CarDetails[] = [
  {
    brand: "Tesla",
    model: "Model 3",
    image: "https://cdn.pixabay.com/photo/2021/01/15/16/49/tesla-5919764_1280.jpg",
    type: "Electric",
    transmission: "Automatic",
    price: 4000000,
    range: 423,
    chargingTime: "8h 30min",
    acceleration: "0-100 km/h in 5.8s",
    topSpeed: 225,
    batteryCapacity: 75,
    fuelEconomy: "133 MPGe",
    warranty: "4 years / 80,000 km",
  },
  {
    brand: "Nissan",
    model: "Leaf",
    image: "https://cdn.pixabay.com/photo/2017/04/06/22/11/auto-2209439_1280.jpg",
    type: "Electric",
    transmission: "Automatic",
    price: 3000000,
    range: 350,
    chargingTime: "7h 30min",
    acceleration: "0-100 km/h in 7.9s",
    topSpeed: 144,
    batteryCapacity: 62,
    fuelEconomy: "112 MPGe",
    warranty: "3 years / 60,000 km",
  },
  {
    brand: "Chevrolet",
    model: "Bolt",
    image: "https://cdn.pixabay.com/photo/2017/06/09/03/16/electric-car-2385812_1280.jpg",
    type: "Electric",
    transmission: "Automatic",
    price: 3200000,
    range: 416,
    chargingTime: "9h 15min",
    acceleration: "0-100 km/h in 6.5s",
    topSpeed: 145,
    batteryCapacity: 66,
    fuelEconomy: "118 MPGe",
    warranty: "3 years / 60,000 km",
  },
  {
    brand: "Ford",
    model: "Mustang Mach-E",
    image: "https://cdn.pixabay.com/photo/2021/01/21/11/09/ford-5937217_1280.jpg",
    type: "Electric",
    transmission: "Automatic",
    price: 5000000,
    range: 490,
    chargingTime: "10h",
    acceleration: "0-100 km/h in 5.1s",
    topSpeed: 180,
    batteryCapacity: 88,
    fuelEconomy: "100 MPGe",
    warranty: "5 years / 100,000 km",
  },
]

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className={cn("min-h-screen transition-colors duration-300", isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900")}>
      {/* Navbar */}
      <nav className={cn("sticky top-0 z-50 backdrop-blur-md", isDarkMode ? "bg-gray-900/90" : "bg-white/90")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0">
                <span className="text-2xl font-bold">ElectriCompare</span>
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#features" className={cn("px-3 py-2 rounded-md text-sm font-medium", isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700")}>Features</a>
                  <a href="#compare" className={cn("px-3 py-2 rounded-md text-sm font-medium", isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700")}>Compare</a>
                  <a href="#testimonials" className={cn("px-3 py-2 rounded-md text-sm font-medium", isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700")}>Testimonials</a>
                  <a href="#faq" className={cn("px-3 py-2 rounded-md text-sm font-medium", isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700")}>FAQ</a>
                  <a href="#contact" className={cn("px-3 py-2 rounded-md text-sm font-medium", isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700")}>Contact</a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input type="text" placeholder="Search models" className={cn("pl-10 rounded-full", isDarkMode ? "bg-gray-800 text-white placeholder-gray-400" : "bg-gray-100 text-gray-900 placeholder-gray-500")} />
                </div>
                <Button
                  onClick={toggleDarkMode}
                  variant="outline"
                  size="icon"
                  className={cn("ml-4 rounded-full", isDarkMode ? "bg-gray-800 text-yellow-400" : "bg-white text-gray-800")}
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={cn("relative overflow-hidden", isDarkMode ? "bg-gray-800" : "bg-gray-50")}>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">The Future of</span>{' '}
                  <span className={cn("block xl:inline", isDarkMode ? "text-blue-400" : "text-blue-600")}>Electric Mobility</span>
                </h1>
                <p className={cn("mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0", isDarkMode ? "text-gray-300" : "text-gray-600")}>
                  Compare the latest electric vehicles, their features, and find the perfect fit for your sustainable journey.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#compare">
                      <Button size="lg" className={cn("w-full", isDarkMode ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700")}>
                        Get Started
                      </Button>
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#features">
                      <Button size="lg" variant="outline" className={cn("w-full", isDarkMode ? "border-gray-300 text-gray-300 hover:bg-gray-700" : "border-gray-300 text-gray-700 hover:bg-gray-50")}>
                        Learn More
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://cdn.pixabay.com/photo/2021/01/21/11/09/ford-5937217_1280.jpg"
            alt="Electric car charging"
          />
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className={cn("py-12", isDarkMode ? "bg-gray-800" : "bg-white")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className={cn("text-base font-semibold tracking-wide uppercase", isDarkMode ? "text-blue-400" : "text-blue-600")}>Features</h2>
            <p className={cn("mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl", isDarkMode ? "text-white" : "text-gray-900")}>
              Why Choose Electric?
            </p>
            <p className={cn("mt-4 max-w-2xl text-xl lg:mx-auto", isDarkMode ? "text-gray-300" : "text-gray-500")}>
              Discover the benefits of electric vehicles and why they're the future of transportation.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                { name: 'Long Range', description: 'Go further with advanced battery technology.', icon: Battery },
                { name: 'Fast Charging', description: 'Spend less time charging and more time driving.', icon: Zap },
                { name: 'Cost Effective', description: 'Save money on fuel and maintenance.', icon: DollarSign },
                { name: 'Eco-Friendly', description: 'Reduce your carbon footprint with zero emissions.', icon: Leaf },
              ].map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className={cn("absolute flex items-center justify-center h-12 w-12 rounded-md", isDarkMode ? "bg-blue-500 text-white" : "bg-blue-500 text-white")}>
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className={cn("ml-16 text-lg leading-6 font-medium", isDarkMode ? "text-white" : "text-gray-900")}>{feature.name}</p>
                  </dt>
                  <dd className={cn("mt-2 ml-16 text-base", isDarkMode ? "text-gray-300" : "text-gray-500")}>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Car Comparison Section */}
      <div id="compare" className={cn("py-12", isDarkMode ? "bg-gray-900" : "bg-gray-100")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={cn("text-3xl font-extrabold text-center mb-8", isDarkMode ? "text-white" : "text-gray-900")}>
            Compare Electric Cars
          </h2>
          <div className="space-y-6">
            {carData.map((car, index) => (
              <div key={index} className={cn(
                "rounded-lg overflow-hidden transition-colors duration-300 shadow-md",
                isDarkMode ? "bg-gray-800" : "bg-white"
              )}>
                <div
                  className={cn(
                    "flex flex-col md:flex-row items-stretch cursor-pointer",
                    expandedIndex === index ? (isDarkMode ? "bg-gray-700" : "bg-gray-200") : "",
                    isDarkMode ? "text-white" : "text-gray-800"
                  )}
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 flex-grow">
                    <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-24 h-18 sm:w-32 sm:h-24 object-cover rounded-lg" />
                    <div>
                      <h3 className="font-semibold text-xl sm:text-2xl">{`${car.brand} ${car.model}`}</h3>
                      <p className={cn("text-base sm:text-lg", isDarkMode ? "text-gray-400" : "text-gray-600")}>{`${car.type} | ${car.transmission}`}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:justify-end space-x-2 sm:space-x-4 md:space-x-8 p-4 sm:p-6">
                    <div className="text-right">
                      <p className="font-semibold text-lg sm:text-xl">₹{car.price.toLocaleString()}</p>
                      <p className={cn("text-xs sm:text-sm", isDarkMode ? "text-gray-400" : "text-gray-600")}>Ex-showroom</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg sm:text-xl">{car.range} km</p>
                      <p className={cn("text-xs sm:text-sm", isDarkMode ? "text-gray-400" : "text-gray-600")}>Range</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg sm:text-xl">{car.acceleration.split(' ')[3]}</p>
                      <p className={cn("text-xs sm:text-sm", isDarkMode ? "text-gray-400" : "text-gray-600")}>0-100 km/h</p>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-6 w-6 sm:h-8 sm:w-8 transition-transform duration-200",
                        expandedIndex === index ? "transform rotate-180" : "",
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      )}
                    />
                  </div>
                </div>
                {expandedIndex === index && (
                  <div className={cn(
                    "p-4 sm:p-6 border-t",
                    isDarkMode ? "bg-gray-750 border-gray-600" : "bg-gray-100 border-gray-200"
                  )}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="flex items-start space-x-3">
                        <Battery className={cn("h-5 w-5 sm:h-6 sm:w-6 mt-1", isDarkMode ? "text-blue-400" : "text-blue-600")} />
                        <div>
                          <p className="font-semibold text-base sm:text-lg">Battery Capacity</p>
                          <p className={cn("text-sm sm:text-base", isDarkMode ? "text-gray-300" : "text-gray-600")}>{car.batteryCapacity} kWh</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className={cn("h-5 w-5 sm:h-6 sm:w-6 mt-1", isDarkMode ? "text-yellow-400" : "text-yellow-600")} />
                        <div>
                          <p className="font-semibold text-base sm:text-lg">Charging Time</p>
                          <p className={cn("text-sm sm:text-base", isDarkMode ? "text-gray-300" : "text-gray-600")}>{car.chargingTime}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Gauge className={cn("h-5 w-5 sm:h-6 sm:w-6 mt-1", isDarkMode ? "text-red-400" : "text-red-600")} />
                        <div>
                          <p className="font-semibold text-base sm:text-lg">Top Speed</p>
                          <p className={cn("text-sm sm:text-base", isDarkMode ? "text-gray-300" : "text-gray-600")}>{car.topSpeed} km/h</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Fuel className={cn("h-5 w-5 sm:h-6 sm:w-6 mt-1", isDarkMode ? "text-green-400" : "text-green-600")} />
                        <div>
                          <p className="font-semibold text-base sm:text-lg">Fuel Economy</p>
                          <p className={cn("text-sm sm:text-base", isDarkMode ? "text-gray-300" : "text-gray-600")}>{car.fuelEconomy}</p>
                        </div>
                      </div>
                    </div>
                    <div className={cn(
                      "p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 flex items-start space-x-3",
                      isDarkMode ? "bg-gray-700" : "bg-white"
                    )}>
                      <Shield className={cn("h-5 w-5 sm:h-6 sm:w-6 mt-1", isDarkMode ? "text-purple-400" : "text-purple-600")} />
                      <p className={cn("text-sm sm:text-base", isDarkMode ? "text-white" : "text-gray-800")}>
                        <span className="font-semibold">Warranty:</span> {car.warranty}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <Button size="lg" className={cn(
                        "text-white text-sm sm:text-base",
                        isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                      )}>
                        View Full Details
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className={cn("py-12", isDarkMode ? "bg-gray-800" : "bg-white")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={cn("text-3xl font-extrabold text-center mb-8", isDarkMode ? "text-white" : "text-gray-900")}>
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex Johnson", quote: "ElectriCompare made it so easy to find the perfect EV for my needs. I couldn't be happier with my choice!", avatar: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" },
              { name: "Sarah Lee", quote: "The comparison tool is fantastic! It helped me understand the differences between various electric cars and make an informed decision.", avatar: "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg" },
              { name: "Mike Chen", quote: "Thanks to ElectriCompare, I found an EV that fits my budget and lifestyle. The detailed information provided was invaluable.", avatar: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" },
            ].map((testimonial, index) => (
              <div key={index} className={cn("p-6 rounded-lg shadow-lg", isDarkMode ? "bg-gray-700" : "bg-gray-50")}>
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className={cn("font-semibold", isDarkMode ? "text-white" : "text-gray-900")}>{testimonial.name}</h3>
                    <p className={cn("text-sm", isDarkMode ? "text-gray-300" : "text-gray-500")}>Verified User</p>
                  </div>
                </div>
                <p className={cn("italic", isDarkMode ? "text-gray-300" : "text-gray-600")}>"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className={cn("py-12", isDarkMode ? "bg-gray-900" : "bg-gray-100")}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={cn("text-3xl font-extrabold text-center mb-8", isDarkMode ? "text-white" : "text-gray-900")}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              { question: "How do electric cars work?", answer: "Electric cars run on rechargeable batteries instead of gasoline. These batteries power an electric motor, which turns the wheels. When the battery runs low, you can recharge it by plugging the car into a charging station or a home charging unit." },
              { question: "How long does it take to charge an electric car?", answer: "Charging time varies depending on the car's battery capacity and the type of charger used. With a home charging unit, it typically takes 6-12 hours for a full charge. Fast charging stations can charge up to 80% in 30 minutes to an hour." },
              { question: "What's the average range of an electric car?", answer: "The range of electric cars has improved significantly in recent years. Many modern electric cars can travel 200-300 miles on a single charge, with some high-end models capable of over 400 miles." },
            ].map((faq, index) => (
              <div key={index}>
                <h3 className={cn("text-xl font-semibold mb-2", isDarkMode ? "text-white" : "text-gray-900")}>{faq.question}</h3>
                <p className={cn("text-base", isDarkMode ? "text-gray-300" : "text-gray-600")}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className={cn("py-12", isDarkMode ? "bg-gray-800" : "bg-white")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className={cn("text-3xl font-extrabold text-center mb-8", isDarkMode ? "text-white" : "text-gray-900")}>
              Get in Touch
            </h2>
            <p className={cn("mt-4 max-w-2xl text-xl lg:mx-auto", isDarkMode ? "text-gray-300" : "text-gray-500")}>
              Have questions or need assistance? We're here to help!
            </p>
          </div>
          <div className="mt-10">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className={cn("block text-sm font-medium", isDarkMode ? "text-gray-200" : "text-gray-700")}>
                  First name
                </label>
                <div className="mt-1">
                  <Input type="text" name="first-name" id="first-name" autoComplete="given-name" className={cn(isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900")} />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className={cn("block text-sm font-medium", isDarkMode ? "text-gray-200" : "text-gray-700")}>
                  Last name
                </label>
                <div className="mt-1">
                  <Input type="text" name="last-name" id="last-name" autoComplete="family-name" className={cn(isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900")} />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className={cn("block text-sm font-medium", isDarkMode ? "text-gray-200" : "text-gray-700")}>
                  Email
                </label>
                <div className="mt-1">
                  <Input type="email" name="email" id="email" autoComplete="email" className={cn(isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900")} />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={cn("block text-sm font-medium", isDarkMode ? "text-gray-200" : "text-gray-700")}>
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={cn("shadow-sm block w-full sm:text-sm border-gray-300 rounded-md", isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900")}
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className={cn("w-full", isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700")}>
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={cn("py-12", isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <a href="#" className="text-2xl font-bold">ElectriCompare</a>
              <p className={cn("text-base", isDarkMode ? "text-gray-300" : "text-gray-500")}>
                Empowering you to make informed decisions about electric vehicles.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className={cn("text-sm font-semibold tracking-wider uppercase", isDarkMode ? "text-gray-200" : "text-gray-400")}>Company</h3>
                  <ul className="mt-4 space-y-4">
                    {['About', 'Careers', 'Contact'].map((item) => (
                      <li key={item}>
                        <a href="#"className={cn("text-base", isDarkMode ? "hover:text-gray-300" : "hover:text-gray-900")}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className={cn("text-sm font-semibold tracking-wider uppercase", isDarkMode ? "text-gray-200" : "text-gray-400")}>Resources</h3>
                  <ul className="mt-4 space-y-4">
                    {['Blog', 'FAQ', 'Support'].map((item) => (
                      <li key={item}>
                        <a href="#" className={cn("text-base", isDarkMode ? "hover:text-gray-300" : "hover:text-gray-900")}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className={cn("text-sm font-semibold tracking-wider uppercase", isDarkMode ? "text-gray-200" : "text-gray-400")}>Legal</h3>
                  <ul className="mt-4 space-y-4">
                    {['Privacy Policy', 'Terms of Service'].map((item) => (
                      <li key={item}>
                        <a href="#" className={cn("text-base", isDarkMode ? "hover:text-gray-300" : "hover:text-gray-900")}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className={cn("text-sm font-semibold tracking-wider uppercase", isDarkMode ? "text-gray-200" : "text-gray-400")}>Social</h3>
                  <ul className="mt-4 space-y-4">
                    {['Twitter', 'Facebook', 'Instagram'].map((item) => (
                      <li key={item}>
                        <a href="#" className={cn("text-base", isDarkMode ? "hover:text-gray-300" : "hover:text-gray-900")}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className={cn("text-base text-center", isDarkMode ? "text-gray-400" : "text-gray-500")}>
              &copy; 2023 ElectriCompare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
