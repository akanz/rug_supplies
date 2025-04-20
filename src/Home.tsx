import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Calendar,
} from "lucide-react";
import Img1 from "./assets/img/rug1.jpg";
import Img2 from "./assets/img/rug2.jpg";
import Img3 from "./assets/img/rug3.jpg";
import Img4 from "./assets/img/rug4.jpg";
import Img5 from "./assets/img/rug5.jpg";
import Img6 from "./assets/img/rug6.jpg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-amber-800">AYIEPE</h1>
            <p className="ml-2 text-sm font-light hidden md:block">
              Carpet & Rugs since 1986
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-amber-800">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-800">
              About Us
            </a>
            <a href="#products" className="text-gray-700 hover:text-amber-800">
              Products
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-amber-800"
            >
              Testimonials
            </a>
            <a
              href="#consultation"
              className="text-gray-700 hover:text-amber-800"
            >
              Book Consultation
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-800">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-4 px-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-amber-800 py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-amber-800 py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                About Us
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-amber-800 py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Products
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-amber-800 py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <a
                href="#consultation"
                className="text-gray-700 hover:text-amber-800 py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Book Consultation
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-amber-800 py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-96 md:h-screen max-h-screen bg-gray-100 flex items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-800/90 to-amber-900/80"></div>
          <div className="container mx-auto px-4 z-10 text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Premium Carpets & Rugs
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Official distributor of Nobel Carpets - bringing warmth and
              elegance to Nigerian homes, mosques, and offices since 1986.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="bg-white text-amber-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300 text-center"
              >
                Explore Collection
              </a>
              <a
                href="#consultation"
                className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition duration-300 text-center"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
              <div className="h-1 w-24 bg-amber-800 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8">
                AYIEPE Carpets is a proudly Nigerian carpet business and an
                official distributor of Nobel Carpets, a leading carpet brand.
                With deep roots in quality, design, and customer satisfaction,
                AYIEPE Carpets brings global carpet standards to Nigerian homes,
                mosques, and offices. We specialize in wall-to-wall
                installations, custom orders, and affordable rug collections.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-amber-800">
                    Our Mission
                  </h3>
                  <p>
                    At AYIEPE Carpets, our mission is to bring warmth, beauty,
                    and comfort into every space by providing high-quality,
                    affordable carpets that reflect both global standards and
                    local culture. As a proud distributor of Nobel Carpets, we
                    are committed to delivering premium products, exceptional
                    customer service, and tailored solutions for homes,
                    businesses, and religious spaces across Nigeria.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-amber-800">
                    Our Vision
                  </h3>
                  <p>
                    To become Nigeria's most trusted name in carpets — a
                    household brand that redefines interior comfort and design
                    through innovation, craftsmanship, and meaningful customer
                    relationships. We envision AYIEPE Carpets as not just a
                    retailer, but a design partner — inspiring spaces,
                    supporting communities, and setting the gold standard for
                    carpet manufacturing and distribution in Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Us
              </h2>
              <div className="h-1 w-24 bg-amber-800 mx-auto"></div>
              <p className="text-lg mt-6 max-w-3xl mx-auto">
                At AYIEPE Carpets, we go beyond selling carpets — we bring life
                to your spaces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Distributor of Nobel Carpets",
                  description:
                    "As an official partner of a leading carpet brand, we offer internationally trusted quality with a local touch.",
                },
                {
                  title: "Wide Range of Designs",
                  description:
                    "From elegant Persian-style rugs to durable wall-to-wall installations, we offer carpets for every space and purpose.",
                },
                {
                  title: "Custom Orders Welcome",
                  description:
                    "Need something unique? We provide custom sizing, special textures, and tailored solutions for your project.",
                },
                {
                  title: "Reliable Supply & Delivery",
                  description:
                    "We maintain a strong inventory and work with trusted logistics partners to ensure your carpets arrive safely and on time.",
                },
                {
                  title: "Expert Support",
                  description:
                    "Our friendly team is always ready to guide you — whether you're furnishing your first apartment or ordering carpets for a large-scale project.",
                },
                {
                  title: "Affordable Luxury",
                  description:
                    "We believe beauty shouldn't break the bank. Our pricing is transparent, fair, and designed to suit a wide range of budgets.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <ChevronRight className="text-amber-800" size={20} />
                    <h3 className="text-xl font-semibold ml-2">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Products
              </h2>
              <div className="h-1 w-24 bg-amber-800 mx-auto"></div>
              <p className="text-lg mt-6 max-w-3xl mx-auto">
                Discover our wide range of quality carpets and rugs for every
                space and purpose.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Home Carpets",
                  description:
                    "Warm, comfortable carpets designed for living rooms, bedrooms, and family spaces.",
                  img: Img1,
                },
                {
                  title: "Mosque Carpets",
                  description:
                    "Durable, elegant carpets specifically designed for mosques and prayer areas.",
                  img: Img2,
                },
                {
                  title: "Office Carpets",
                  description:
                    "Professional-grade carpets that combine style with durability for busy workspaces.",
                  img: Img3,
                },
                {
                  title: "Luxury Rugs",
                  description:
                    "Statement pieces that elevate your interior design with rich patterns and textures.",
                  img: Img4,
                },
                {
                  title: "Wall-to-Wall Solutions",
                  description:
                    "Complete flooring solutions for homes, hotels, and commercial spaces.",
                  img: Img5,
                },
                {
                  title: "Custom Designs",
                  description:
                    "Bespoke carpets tailored to your specific needs, sizes, and design preferences.",
                  img: Img6,
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-sm group"
                >
                  <div className="h-48 bg-gray-200 relative">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-amber-800/20 group-hover:bg-amber-800/40 transition duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <a
                      href="#consultation"
                      className="text-amber-800 font-medium flex items-center hover:text-amber-900"
                    >
                      Inquire Now <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book a Consultation Section */}
        <section
          id="consultation"
          className="py-16 md:py-24 bg-amber-800 text-white"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book a Consultation
              </h2>
              <div className="h-1 w-24 bg-white mx-auto"></div>
              <p className="text-lg mt-6 max-w-3xl mx-auto">
                Ready to elevate your space? Drop us a message and let's discuss
                how we can bring your dream carpet to life!
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-lg shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="consultation-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="consultation-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="consultation-email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="consultation-email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="consultation-phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="consultation-phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="consultation-date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="consultation-date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="consultation-type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Consultation Type
                  </label>
                  <select
                    id="consultation-type"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="home">Home Carpeting</option>
                    <option value="office">Office Carpeting</option>
                    <option value="mosque">Mosque Carpeting</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="consultation-message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Requirements
                  </label>
                  <textarea
                    id="consultation-message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your project, space requirements, and any specific preferences."
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-amber-800" />
                  <p className="text-sm text-gray-600">
                    Our team will contact you within 24 hours to confirm your
                    consultation.
                  </p>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-amber-800 text-white py-3 px-6 rounded-md font-medium hover:bg-amber-900 transition duration-300"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <div className="h-1 w-24 bg-amber-800 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  quote:
                    "AYIEPE Carpets transformed my entire living room. The quality of the rug I bought was beyond what I expected at that price point. I'm definitely coming back for more.",
                  author: "Chiamaka O.",
                  location: "Lagos",
                },
                {
                  quote:
                    "As an event planner, I rely on vendors who deliver on time. AYIEPE Carpets has never let me down. Their mosque carpet installation for our last client was flawless.",
                  author: "Ahmed B.",
                  location: "Kaduna",
                },
                {
                  quote:
                    "I didn't know where to start when it came to carpeting our office. AYIEPE's team gave me a free consultation, and now our space feels warmer and more professional.",
                  author: "Tolani K.",
                  location: "Abuja",
                },
                {
                  quote:
                    "I ordered from AYIEPE all the way from Port Harcourt, and they delivered quickly and professionally. The customer service is top-notch.",
                  author: "Emmanuel U.",
                  location: "Port Harcourt",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm relative"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-amber-400 fill-amber-400"
                        size={16}
                      />
                    ))}
                  </div>
                  <p className="italic mb-6 text-gray-700">
                    {testimonial.quote}
                  </p>
                  <div className="font-medium">
                    {testimonial.author}
                    <span className="text-gray-500 block text-sm mt-1">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact Us
              </h2>
              <div className="h-1 w-24 bg-amber-800 mx-auto"></div>
              <p className="text-lg mt-6 max-w-3xl mx-auto">
                Have questions or ready to transform your space? Reach out to
                our friendly team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="text-amber-800 mt-1" size={20} />
                    <div className="ml-4">
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">07037975709</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-amber-800 mt-1" size={20} />
                    <div className="ml-4">
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">
                        Bankoleganiyat61@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="text-amber-800 mt-1" size={20} />
                    <div className="ml-4">
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">
                        No 7 Idumagbo Avenue
                        <br />
                        Lagos Island, Nigeria
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-gray-100 p-2 rounded-full hover:bg-amber-100 transition duration-300"
                      >
                        <Instagram size={20} className="text-amber-800" />
                      </a>
                      <a
                        href="#"
                        className="bg-gray-100 p-2 rounded-full hover:bg-amber-100 transition duration-300"
                      >
                        <Facebook size={20} className="text-amber-800" />
                      </a>
                      <a
                        href="#"
                        className="bg-gray-100 p-2 rounded-full hover:bg-amber-100 transition duration-300"
                      >
                        <Twitter size={20} className="text-amber-800" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-amber-800 text-white py-3 px-6 rounded-md font-medium hover:bg-amber-900 transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-amber-500 mb-4">AYIEPE</h2>
              <p className="mb-6">
                Official distributor of Nobel Carpets, bringing quality and
                comfort to Nigerian homes since 1986.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#consultation"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Book Consultation
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={18} className="text-amber-500 mt-1 mr-2" />
                  <span>No 7 Idumagbo Avenue, Lagos Island, Nigeria</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="text-amber-500 mr-2" />
                  <span>07037975709</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="text-amber-500 mr-2" />
                  <span>Bankoleganiyat61@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} AYIEPE Carpets & Rugs. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
