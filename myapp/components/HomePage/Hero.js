'use client'
import React from 'react';
import { Link, Button } from "@nextui-org/react";

import { FiUser } from "react-icons/fi";
import { motion } from 'framer-motion';

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className='min-h-screen'>
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
          className='lg:w-2/6 md:w-3/6 w-5/6 mb-2 object-cover object-center rounded'
          src='../hero.png'
        />
        <div className='text-center lg:w-2/3 w-full'>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }}
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            The Fan Event Zone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }}
            className="mb-8 leading-relaxed"
          >
            Welcome to Fan Vent Zone, where your passion for sports meets a community of like-minded enthusiasts! Join us by creating a free account and gain access to a treasure trove of engaging free content. Dive into discussions, share your thoughts, and connect with fellow fans who share your love for the game.
            For an even more immersive experience, unlock our premium content for just $1.99 a month. Delve into exclusive insights, behind-the-scenes stories, and expert analyses that provide a deeper understanding of your favorite sports teams.
          </motion.p>
        </div>
        <div className='flex justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }}
          >
               <Button
                href="/login"
                as={Link}
                color="warning"
                variant="solid"
                >
                Login <span><FiUser /></span>
                </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
