
'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Menu } from 'lucide-react';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="bg-[#FFF9F4]">
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-cursive text-[#FFB830]">FoodHouse</div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-[20px]">
            <li><Link href="/" className="text-[#FFB830]">HOME</Link></li>
            <li><Link href="/restaurant" className="text-gray-500">RESTAURANT</Link></li>
            <li><Link href="/services" className="text-gray-500">SERVICES</Link></li>
            <li><Link href="/cart" className="text-gray-500">CART</Link></li>
          </ul>
        </nav>
        <button className="hidden md:block text-gray-500 text-[23px]">Sign In</button>
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-9 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Enjoy Delicious<br />
              Food in <span className="text-[#FFB830]">Healthy Life</span>
            </h1>
            <p className="mb-6 text-gray-900 font-light text-lg md:text-[25px]">
              Tandoori masala is an Indian spice blend consisting of a
              variety of spices. Tandoori masala is an Indian spice blend
              consisting of a variety of spices.
            </p>
            <button className="bg-yellow-500 text-neutral-100 px-8 py-3 text-lg md:text-[25px] rounded-lg">
              ORDER NOW
            </button>
          </div>
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/image/chicken.png"
              alt="Roasted Chicken"
              width={600}
              height={600}
              className="rounded-full"
            />
          </div>
        </div>
      </main>

      <section className="py-16">
        <div className="text-center mb-12">
          <p className="italic text-2xl md:text-[45px]">Online store</p>
          <h2 className="font-bold text-3xl md:text-[45px]">Popular Foods</h2>
          <div className="border-b-4 border-yellow-400 w-20 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-[100px]">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="text-center">
              <Image
                src="/image/veg.png"
                alt="Fruit Dish"
                width={300}
                height={300}
                className="rounded-full mx-auto"
              />
              <p className="text-2xl md:text-[30px] font-medium mt-4">Fruit Dish</p>
              <p className="font-light mt-2">Dinko Food</p>
              <p className="mt-2">&#11088;&#11088;&#11088;&#11088;</p>
              <button className="mt-4 bg-yellow-500 text-neutral-100 px-6 py-3 text-sm md:text-[15px] rounded-full">
                Add to cart $ 678
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <p className="italic text-2xl md:text-[45px]">Quality Food</p>
          <h2 className="font-bold text-3xl md:text-[45px] mt-4">Get The Best Offers</h2>
          <p className="mt-4 text-sm md:text-base font-light max-w-2xl mx-auto">
            The food at your doorstep. Why starve when you have us. Your hunger partner. 
            Straight out of the oven to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center">
              <div>
                <h3 className="font-medium text-xl md:text-[25px]">Any day offers</h3>
                <p className="font-light mt-2">New phenomenon burger taste</p>
                <p className="text-[#FFB830] mt-2">$12.90</p>
                <div className="border-b-4 border-yellow-300 w-5 mt-2"></div>
              </div>
              <Image src="/image/burger.png" alt="Burger" width={150} height={150} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Special Offer</h2>
              <p className="text-gray-900 font-light text-lg md:text-[25px] mb-6">
                Best cooks and best delivery guys all at your service.
                Hot tasty food will reach you in 60 minutes.
              </p>
              <button className="bg-yellow-500 text-neutral-100 px-8 py-3 text-lg md:text-[25px] rounded-lg">
                See All Menu
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/image/mixed.png"
                alt="Mixed Food"
                width={700}
                height={700}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <h2 className="text-4xl md:text-[55px] font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-[100px]">
          {[
            { img: "foke.png", text: "55+ Restaurants" },
            { img: "good.png", text: "Good Quality" },
            { img: "gare.png", text: "Discount System" },
            { img: "moto.png", text: "Fast Delivery" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <Image src={`/image/${item.img}`} alt={item.text} width={200} height={200} className="mx-auto" />
              <p className="font-semibold text-xl md:text-[25px] mt-4">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="text-center mb-12">
          <h3 className="font-bold text-xl">Testimonial</h3>
          <h2 className="text-4xl md:text-[55px] font-bold mt-4">What Our Clients Say</h2>
          <Image src="/image/icon1.png" alt="Quote" width={50} height={50} className="mx-auto my-4" />
          <p className="font-light text-lg md:text-[25px] max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore dolore aliqua. Ut enim ad veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          {["woman.png", "man3.png", "ceo.png", "man2.png", "man1.png"].map((img, index) => (
            <Image key={index} src={`/image/${img}`} alt="Testimonial" width={60} height={60} className="rounded-full" />
          ))}
        </div>
        <div className="text-center mt-4">
          <h4 className="font-bold text-xl">Mitchelle Marsh</h4>
          <p>CEO, Bexon Agency</p>
        </div>
        <div className="flex justify-center mt-8">
          <Image src="/image/icon.png" alt="Next" width={40} height={40} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image src="/image/phone.png" alt="Phone App" width={400} height={400} className="mx-auto" />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-yellow-500 text-xl">Download Our App</p>
              <h2 className="text-4xl font-bold mt-4">It's all here.<br />All in one app.</h2>
              <p className="mt-4 text-zinc-400">
                Discover local on-demand delivery or Pickup from
                restaurants, nearby grocery and convenience stores,
                and more.
              </p>
              <div className="flex space-x-4 mt-8">
                <Image src="/image/app.png" alt="App Store" width={150} height={50} />
                <Image src="/image/Google.png" alt="Google Play" width={150} height={50} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-[45px] font-bold">Subscribe Our Newsletter</h2>
              <p className="mt-4 text-zinc-500">Subscribe to our newsletter to get our news</p>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-full md:w-auto px-4 py-2 mb-4 md:mb-0 md:mr-4 border rounded"
              />
              <button className="w-full md:w-auto bg-yellow-500 text-white px-8 py-3 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      

   <footer className="bg-[#1a0f0f] text-white">
   <div className="container mx-auto px-4 py-8">
     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
       <div>
         <h2 className="text-2xl font-bold mb-4">FoodHouse.</h2>
         <p className="text-sm text-gray-400 mb-4">
           Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
         </p>
         <div className="flex space-x-4">
        
         </div>
       </div>
       <div>
         <h3 className="text-lg font-semibold mb-4">Company</h3>
         <ul className="space-y-2 text-sm text-gray-400">
           <li><Link href="#">Career</Link></li>
           <li><Link href="#">About Us</Link></li>
           <li><Link href="#">Blog</Link></li>
           <li><Link href="#">Press Info</Link></li>
           <li><Link href="#">Features</Link></li>
         </ul>
       </div>
       <div>
         <h3 className="text-lg font-semibold mb-4">Fudo</h3>
         <ul className="space-y-2 text-sm text-gray-400">
           <li><Link href="#">Why Fudo</Link></li>
           <li><Link href="#">How it Works</Link></li>
           <li><Link href="#">Why Choose Us</Link></li>
           <li><Link href="#">Client Stories</Link></li>
           <li><Link href="#">Gallery</Link></li>
         </ul>
       </div>
       <div>
         <h3 className="text-lg font-semibold mb-4">Menu</h3>
         <ul className="space-y-2 text-sm text-gray-400">
           <li><Link href="#">Breakfast</Link></li>
           <li><Link href="#">Lunch</Link></li>
           <li><Link href="#">Dinner</Link></li>
           <li><Link href="#">Fast Foods</Link></li>
           <li><Link href="#">Drinks</Link></li>
         </ul>
       </div>
     </div>
   </div>
   <div className="bg-yellow-400 py-4 text-center text-[#1a0f0f]">
     <div className="container mx-auto px-4 flex justify-between items-center text-sm">
       <p className="color-white">Copyright 2021 Besnik All Right Reserved</p>
       <div className="space-x-4">
         <Link href="#" className="hover:underline">Terms</Link>
         <Link href="#" className="hover:underline">Privacy</Link>
         <Link href="#" className="hover:underline">Security</Link>
       </div>
     </div>
   </div>
 </footer>
    </main>
  );
}