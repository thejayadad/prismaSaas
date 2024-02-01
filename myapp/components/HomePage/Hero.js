'use client'
import React from 'react';
import { Parallax } from 'react-parallax';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <header className="bg-black text-white py-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Fan Vent Zone</h1>
          <p className="text-lg md:text-xl">
            Vent about your favorite sports team and get exclusive insights!
          </p>
        </div>
      </header>

      {/* Vent Section */}
      <Parallax bgImage="https://images.pexels.com/photos/13141008/pexels-photo-13141008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" strength={400}>
        <section className="min-h-screen py-12 flex items-center">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Vent Zone</h2>
            <p className="text-lg md:text-xl mb-8 text-white">
              Share your thoughts and feelings about your favorite sports team.
            </p>
          </div>
        </section>
      </Parallax>

      <section className="min-h-screen bg-gray-100 py-12 flex items-center">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Member Login</h2>
          {/* Login Form - You can add your login form here */}
        </div>
      </section>

      <Parallax bgImage="https://images.pexels.com/photos/6275764/pexels-photo-6275764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" strength={400}>
        <section className="min-h-screen py-12 flex items-center">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe for Exclusive Content</h2>
            <p className="text-lg md:text-xl mb-8">
              Unlock sports insiders' content for just $1.99 per month.
            </p>
            {/* Subscription Form - You can add your subscription form here */}
          </div>
        </section>
      </Parallax>

      {/* Call to Action Section */}
      <Parallax bgImage="https://via.placeholder.com/1920x1080" strength={400}>
        <section className="min-h-screen bg-primary text-white py-12 flex items-center">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Fan Vent Zone Now!</h2>
            <p className="text-lg md:text-xl mb-8">
              Don't miss out on the latest updates and exclusive content.
            </p>
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-secondary text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
              >
                Sign Up
              </motion.button>
            </Link>
          </div>
        </section>
      </Parallax>

      {/* Footer Section */}
      <footer className="min-h-64 bg-gray-800 text-white py-8 flex items-center">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Fan Vent Zone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
