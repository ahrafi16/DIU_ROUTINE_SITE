"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };


  const handleClose = () => setIsOpen(false);

  return (
    <main className="bg-black text-white h-screen flex flex-col px-10 pb-10 mx-auto md:px-30 lg:px-40 xl:px-60 2xl:px-80">



      {/* nav */}
      <div className="sticky flex sm:flex-row justify-between mt-6 xl:items-center animate-fade-up">
        <a className="flex items-center gap-3 font-bold text-2xl md:text-4xl md:leading-tight">
          <Image
            src="/assets/app.svg"
            width={45}
            height={45}
            alt="APP ICONs"
            className="duration-200 transform shadow hover:scale-105"
          />
          <div> DIU<span className="text-teal-600 font-bold">Routine</span></div>
        </a>
        <div className="flex items-center mt-2 text-sm text-gray-200 xl:mt-0 pb-2">
          <a className="ml-4 hover:text-white" href="https://www.linkedin.com/in/hafizflow/" target="_blank">
            <Image
              src="/assets/in1.svg"
              width={30}
              height={30}
              alt="Picture of the author"
              className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
            />
          </a>
          <a className="ml-4 hover:text-white" href="https://github.com/hafizflow" target="_blank">
            <Image
              src="/assets/git.svg"
              width={30}
              height={30}
              alt="Picture of the author"
              className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
            />
          </a>
          <a className="ml-4 hover:text-white" href="mailto:rahman15-5678@diu.edu.bd" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/email.svg"
              width={30}
              height={30}
              alt="Picture of the author"
              className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
            />
          </a>
        </div>
      </div>


      <div className="flex flex-col">
        <section className="flex flex-col items-center text-center mt-14 xl:mt-24 animate-fade-up">
          <h1 className="w-full text-4xl md:text-5xl leading-normal font-extrabold md:w-3/4">
            <span className="bg-teal-600 relative inline-block z-10 px-2 rounded-2xl">See Your Routine</span> Simplify Your Life
          </h1>
        </section>
        <div className="text-center">
          <p className="w-full mx-auto mt-6 text-xl text-center text-gray-200 md:max-w-3/4 animate-fade-up">
            Stay on top of your schedule with an easy-to-use routine viewer. See your day clearly and stay motivated to achieve more.
          </p>
        </div>
        <div className="my-12 gap-5 flex flex-col md:flex-row items-center justify-center scale animate-fade-up">
          {/* get it on */}
          <div className="relative transition hover:scale-105">
            <a href="https://apps.apple.com/us/app/diu-routine/id6748752277" target="_blank"> <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
              width={200}
              height={200}
              alt="Picture of the author"
              unoptimized
              className="h-16 border border-gray-300 rounded-lg"
            /></a>
          </div>
          <div className="transition hover:scale-105">
            <a
              href="#"
              onClick={handleOpen}
              className="flex items-center gap-4 p-3 h-16 border-2 border-gray-300 rounded-lg"
            >
              <Image
                src="/assets/yt.svg"
                width={45}
                height={45}
                alt="YouTube Logo"
                unoptimized
                className="h-10 md:h-16 rounded-lg"
              />
              <div className="leading-none">
                <p>Demo on</p>
                <h3 className="font-semibold text-2xl">YOUTUBE</h3>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-2xl aspect-square bg-black/50 rounded-lg overflow-hidden shadow-lg">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white text-xl bg-gray-800 bg-opacity-70 rounded-full px-3 py-1 hover:bg-opacity-100 transition z-10"
              aria-label="Close video"
            >
              <Image
                src="/assets/cross.svg"
                width={25}
                height={25}
                alt="YouTube Logo"
                unoptimized
                className=" h-10 cursor-pointer filter brightness-0 invert rounded-full"
              />
            </button>

            {/* Embedded YouTube Shorts Video */}
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/PDcaBmactl8?autoplay=1&rel=0&modestbranding=1"
              title="YouTube Shorts Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}



      {/* 4 displey */}
      <div className="my-8 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 items-center animate-fade-up">
        <Image
          src="/assets/sc4.png"
          priority
          width={500}
          height={500}
          alt="Screenshot 4"
          className="w-2/3 mx-auto md:w-full transition-transform duration-700 ease-in-out hover:scale-105"
          placeholder="blur"
          blurDataURL="/assets/sc4.png"
        />

        <Image
          src="/assets/sc1.png"
          priority
          width={500}
          height={500}
          alt="Screenshot 1"
          className="w-full hidden sm:block transition-transform duration-700 ease-in-out hover:scale-105"
          placeholder="blur"
          blurDataURL="/assets/sc1.png"
        />

        <Image
          src="/assets/sc2.png"
          priority
          width={500}
          height={500}
          alt="Screenshot 2"
          className="w-full hidden sm:block transition-transform duration-700 ease-in-out hover:scale-105"
          placeholder="blur"
          blurDataURL="/assets/sc2.png"
        />

        <Image
          src="/assets/sc3.png"
          priority
          width={500}
          height={500}
          alt="Screenshot 3"
          className="w-full hidden sm:block transition-transform duration-700 ease-in-out hover:scale-105"
          placeholder="blur"
          blurDataURL="/assets/sc3.png"
        />
      </div>



      <div className="animate-fade-up">
        <div className="grid gap-4 my-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              <Image
                src="/assets/search.svg"
                width={50}
                height={50}
                alt="Picture of the author"
                className="p-0.5 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-bold">Routine Search</h3>
              <p className="mt-1 text-sm text-gray-400">
                Quickly find any student or teacher routine by name or section — view detailed schedules instantly.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              <Image
                src="/assets/bba.svg"
                width={35}
                height={35}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-bold">Offline mode</h3>
              <p className="mt-1 text-sm text-gray-400">
                Stay on track anywhere! View your routine even when offline.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              <Image
                src="/assets/noti.svg"
                width={50}
                height={50}
                alt="Picture of the author"
                className="p-0.5 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-bold">Notification</h3>
              <p className="mt-1 text-sm text-gray-400">
                Stay updated with real-time notifications about routine updates or important alerts.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              <Image
                src="/assets/theme.svg"
                width={50}
                height={50}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </div>
            <div className="ml-3">
              <h3 className=" font-bold">Theme Mode</h3>
              <p className="mt-1 text-sm text-gray-400">
                Easily toggle between light and dark mode for a comfortable viewing experience.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              <Image
                src="/assets/calender.svg"
                width={50}
                height={50}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-bold">Calendar View</h3>
              <p className="mt-1 text-sm text-gray-400">
                Switch between different calendar views to see your routine the way you prefer.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              <Image
                src="/assets/pdf3.svg"
                width={50}
                height={50}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-bold">PDF Export & Share</h3>
              <p className="mt-1 text-sm text-gray-400">
                Generate and share your class routine as a clean, ready-to-print PDF in seconds.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              <Image
                src="/assets/teacher.svg"
                width={50}
                height={50}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-bold">Teacher Info</h3>
              <p className="mt-1 text-sm text-gray-400">
                Access teacher details like initials, designation, and assigned courses in one tap.r.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              <Image
                src="/assets/door.svg"
                width={50}
                height={50}
                alt="Picture of the author"
                className="p-0.5 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-bold">Empty Room Finder </h3>
              <p className="mt-1 text-sm text-gray-400">
                Find available rooms based on specific dates and time slots — perfect for study or meetings.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              <Image
                src="/assets/stat1.svg"
                width={50}
                height={50}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-bold">Routine Insights</h3>
              <p className="mt-1 text-sm text-gray-400">
                Get insightful stats on your weekly or semester schedule — total classes, hours, and more.
              </p>
            </div>
          </div>
        </div>


        {/* 2 display */}
        <div className="grid my-8 grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-teal-900 to-teal-800 p-10 rounded-lg h-96  overflow-hidden">
            <h3 className="text-lg font-semibold">Home Screen in dark mode</h3>
            <p className="text-sm">on iOS 18 & above</p>
            <Image
              src="/assets/sc1.png"
              width={500}
              height={500}
              priority
              alt="Picture of the author"
              className="w-full p-10  transition-transform duration-500 ease-in-out hover:scale-105 drop-shadow-[10px_0_10px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="bg-gradient-to-r from-teal-900 to-teal-800 p-10 rounded-lg h-96 overflow-hidden">
            <h3 className="text-lg font-semibold">Home Screen in Light mode</h3>
            <p className="text-sm">on iOS 18 & above</p>
            <Image
              src="/assets/imoc.svg"
              width={500}
              height={500}
              priority
              alt="Picture of the author"
              className="w-full p-10 transition-transform duration-500 ease-in-out hover:scale-105 drop-shadow-[10px_0_10px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* developer info */}
      <div className="my-12 gap-5 grid grid-cols-1 md:grid-cols-2 items-center justify-center scale animate-fade-up">
        {/* card 1 */}
        <div className="bg-[#2b2b2b] p-5 rounded-2xl space-y-3">
          <div className="flex gap-3 items-center">
            <Image
              src="/assets/evan.jpg"
              width={50}
              height={50}
              alt="Picture of the author"
              unoptimized
              className="rounded-full border-1 border-teal-600"
            />
            <div>
              <h2 className="text-xl font-bold">Abdullah Rahman Evaan</h2>
              <p className="text-gray-300">Web Developer</p>
            </div>
          </div>
          <div className="text-gray-300">
            Full-stack developer building secure web apps with Django, Laravel, and iOS apps with SwiftUI.
          </div>
          <div className="flex gap-2 items-center justify-start">
            <a className=" hover:text-white" href="https://www.linkedin.com/in/evaan321" target="_blank">
              <Image
                src="/assets/in1.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
            <a className=" hover:text-white" href="https://github.com/evaan321" target="_blank">
              <Image
                src="/assets/git.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
            <a className=" hover:text-white" href="http://t.me/evaan321" target="_blank">
              <Image
                src="/assets/tg1.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
          </div>
        </div>
        {/* card 2 */}
        <div className="bg-[#2b2b2b] p-5 rounded-2xl space-y-3">
          <div className="flex gap-3 items-center">
            <Image
              src="/assets/shukla.jpg"
              width={50}
              height={50}
              alt="Picture of the author"
              unoptimized
              className="rounded-full border-1 border-teal-600"
            />
            <div>
              <h2 className="text-xl font-bold">Shukla Ghosh</h2>
              <p className="text-gray-300">IOS Developer</p>
            </div>
          </div>
          <div className="text-gray-300">
            Creative iOS Developer crafting intuitive, high-quality apps with Swift and SwiftUI.
          </div>
          <div className="flex gap-2 items-center justify-start">
            <a className=" hover:text-white" href="https://www.linkedin.com/in/shuk29" target="_blank">
              <Image
                src="/assets/in1.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
            <a className=" hover:text-white" href="https://github.com/shuk29" target="_blank">
              <Image
                src="/assets/git.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
            <a className=" hover:text-white" href="https://www.facebook.com/shuk.29" target="_blank">
              <Image
                src="/assets/fb1.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
          </div>
        </div>
        {/* card 3 */}
        <div className="bg-[#2b2b2b] p-5 rounded-2xl space-y-3">
          <div className="flex gap-3 items-center">
            <Image
              src="/assets/hafiz.jpg"
              width={50}
              height={50}
              alt="Picture of the author"
              unoptimized
              className="rounded-full object-cover border-1 border-teal-600"
            />
            <div>
              <h2 className="text-xl font-bold">Hafizur Rahman</h2>
              <p className="text-gray-300">Mobile & Backend</p>
            </div>
          </div>
          <div className="text-gray-300">
            Always eager to take on new challenges and passionate about learning emerging technologies.
          </div>
          <div className="flex gap-2 items-center justify-start">

            <a className=" hover:text-white" href="https://github.com/hafizflow" target="_blank">
              <Image
                src="/assets/git.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
            <a className=" hover:text-white" href="https://www.linkedin.com/in/hafizflow/" target="_blank">
              <Image
                src="/assets/in1.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
            <a className=" hover:text-white" href="http://t.me/hafizflow45" target="_blank">
              <Image
                src="/assets/tg1.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
          </div>
        </div>
        {/* card 4 */}
        <div className="bg-[#2b2b2b] p-5 rounded-2xl space-y-3">
          <div className="flex gap-3 items-center">
            <Image
              src="/assets/ahr.jpg"
              width={50}
              height={50}
              alt="Picture of the author"
              unoptimized
              className="rounded-full border-1 border-teal-600"
            />
            <div>
              <h2 className="text-xl font-bold">Anjum Hossain</h2>
              <p className="text-gray-300">Web Developer</p>
            </div>
          </div>
          <div className="text-gray-300">
            Web Developer driven by curiosity and a passion for learning the latest web technologies.
          </div>
          <div className="flex gap-2 items-center justify-start">
            <a className=" hover:text-white" href="https://www.linkedin.com/in/anjum-hossain-519a192b2/" target="_blank">
              <Image
                src="/assets/in1.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
            <a className=" hover:text-white" href="https://github.com/ahrafi16" target="_blank">
              <Image
                src="/assets/git.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
            <a className=" hover:text-white" href="https://www.facebook.com/anjumhossain.rafi/" target="_blank">
              <Image
                src="/assets/fb1.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="p-1 duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
              />
            </a>
          </div>
        </div>

      </div>


      {/* footer */}
      <div className="mt-5 pb-10 flex flex-col justify-center items-center text-xs text-gray-300 xl:items-center">
        <div className="mt-8">
          Email : rahman15-5678@diu.edu.bd
        </div>
        <div className="mt-8">
          Made with ❤️ and ☕️ by © Hafizur Rahman 2025
        </div>
      </div>
    </main>
  );
}
