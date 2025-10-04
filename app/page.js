import Image from "next/image";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";

export default function Home() {
  return (
    <main className="bg-black text-white h-screen flex flex-col px-10 pb-10 mx-auto md:px-30 lg:px-40 xl:px-60 2xl:px-80">
      <div className="sticky flex flex-col sm:flex-row justify-between mt-6 xl:items-center animate-fade-up">
        <a className="flex items-center text-4xl font-semibold md:leading-tight">
          Routine<span className="text-teal-600">Viewer</span>
        </a>
        <div className="flex items-center mt-2 text-sm text-gray-200 xl:mt-0 pb-2">
          <a className="ml-2 sm:ml-5 hover:text-white" href="" target="_blank"></a>
          <a className="ml-4 hover:text-white" href="" target="_blank"><CgFileDocument className="w-5 sm:w-6 h-5 sm:h-6" /></a>
          <a className="ml-4 hover:text-white" href="" target="_blank"><FiLinkedin className="w-5 sm:w-6 h-5 sm:h-6" /></a>
          <a className="ml-4 hover:text-white" href="" target="_blank"><FiTwitter className="w-5 sm:w-6 h-5 sm:h-6" /></a>
          <a className="ml-4 hover:text-white" href="" target="_blank"><MdOutlineEmail className="w-5 sm:w-6 h-5 sm:h-6" /></a>
        </div>
      </div>


      <div className="flex flex-col">
        <section className="flex flex-col items-center text-center mt-14 xl:mt-24 animate-fade-up">
          <h1 className="w-full text-4xl md:text-5xl leading-normal font-extrabold md:w-3/4">
            <span className="bg-teal-600 relative inline-block z-10 px-2 rounded-2xl">Change Your Life</span> One Habit at a time
          </h1>
        </section>
        <div className="text-center">
          <p className="w-full mx-auto mt-6 text-xl text-center text-gray-200 md:max-w-3/4 animate-fade-up">
            Track your habits with ease and view your daily progress in a clear, intuitive way. Stay motivated and consistent as you work towards your goals.
          </p>
        </div>
        <div className="mt-12 gap-5 flex items-center justify-center scale animate-fade-up">
          <div className="relative transition hover:scale-105">
            <a href=""> <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
              width={200}
              height={200}
              alt="Picture of the author"
              unoptimized
              className="h-16 border border-gray-300 rounded-lg"
            /></a>
          </div>
          <div className="relative transition hover:scale-105">
            <a href=""> <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
              width={200}
              height={200}
              alt="Picture of the author"
              unoptimized
              className="h-16 border border-gray-300 rounded-lg"
            /></a>
          </div>
        </div>
      </div>



      <div className="mt-8 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-rows-1 items-center animate-fade-up">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/ee/IPhone_15_Vector.svg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-full transition hover:scale-105"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/ee/IPhone_15_Vector.svg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-full transition hover:scale-105"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/ee/IPhone_15_Vector.svg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-full transition hover:scale-105"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/ee/IPhone_15_Vector.svg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-full transition hover:scale-105"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/ee/IPhone_15_Vector.svg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-full transition hover:scale-105"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/ee/IPhone_15_Vector.svg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-full transition hover:scale-105"
        />
      </div>


      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
        <div className="flex flex-col bg-scaffold shadow-xl border border-gray-300 px-4 py-4 rounded-xl">
          <div className="flex justify-between">
            <div className="font-semibold text-xl underline">Perfect</div>
            <div className="flex">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
          <div className="mt-4 flex-1">
            I love this app, it’s helped me finally get a lot of the
            habits in place that I’ve been trying to get down for years!
          </div>
          <div className="flex justify-end items-end mt-2 text-sm text-gray-400">
            <div>🇬🇧 Beth L. Brown</div>
          </div>
        </div>
        <div className="flex flex-col bg-scaffold shadow-xl border border-gray-300 px-4 py-4 rounded-xl">
          <div className="flex justify-between">
            <div className="font-semibold text-xl underline">Perfect</div>
            <div className="flex">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
          <div className="mt-4 flex-1">
            I love this app, it’s helped me finally get a lot of the
            habits in place that I’ve been trying to get down for years!
          </div>
          <div className="flex justify-end items-end mt-2 text-sm text-gray-400">
            <div>🇬🇧 Beth L. Brown</div>
          </div>
        </div>
        <div className="flex flex-col bg-scaffold shadow-xl border border-gray-300 px-4 py-4 rounded-xl">
          <div className="flex justify-between">
            <div className="font-semibold text-xl underline">Perfect</div>
            <div className="flex">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
          <div className="mt-4 flex-1">
            I love this app, it’s helped me finally get a lot of the
            habits in place that I’ve been trying to get down for years!
          </div>
          <div className="flex justify-end items-end mt-2 text-sm text-gray-400">
            <div>🇬🇧 Beth L. Brown</div>
          </div>
        </div>
        <div className="flex flex-col bg-scaffold shadow-xl border border-gray-300 px-4 py-4 rounded-xl">
          <div className="flex justify-between">
            <div className="font-semibold text-xl underline">Perfect</div>
            <div className="flex">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
          <div className="mt-4 flex-1">
            I love this app, it’s helped me finally get a lot of the
            habits in place that I’ve been trying to get down for years!
          </div>
          <div className="flex justify-end items-end mt-2 text-sm text-gray-400">
            <div>🇬🇧 Beth L. Brown</div>
          </div>
        </div>
      </div>


      <div className="mt-12 animate-fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-teal-900 to-teal-800 p-10 rounded-lg h-96 overflow-hidden">
            <h3 className="text-lg font-semibold">Home Screen Widgets</h3>
            <p className="text-sm">on iOS 17+ and Android</p>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/e/ee/IPhone_15_Vector.svg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-full transition hover:scale-105"
            />
          </div>
          <div className="bg-gradient-to-r from-teal-900 to-teal-800 p-10 rounded-lg h-96 overflow-hidden">
            <h3 className="text-lg font-semibold">Home Screen Widgets</h3>
            <p className="text-sm">on iOS 17+ and Android</p>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/e/ee/IPhone_15_Vector.svg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-full transition hover:scale-105"
            />
          </div>
        </div>
        <div className="grid gap-4 mt-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              <MdOutlineTrackChanges className="w-8 h-8 p-2 text-white duration-200 transform rounded-full shadow hover:scale-105 bg-surface" />
            </div>
            <div className="ml-3">
              <h3 className="mt-1 font-bold">Track your habits</h3>
              <p className="mt-1 text-sm text-gray-400">

                Monitor your progress with intuitive tile-based grid
                charts. Try to fill the boxes every day and change your
                life for the better.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              <IoIosColorPalette className="w-8 h-8 p-2 text-white duration-200 transform rounded-full shadow hover:scale-105 bg-surface" />
            </div>
            <div className="ml-3">
              <h3 className="mt-1 font-bold">Customize</h3>
              <p className="mt-1 text-sm text-gray-400">

                Monitor your progress with intuitive tile-based grid
                charts. Try to fill the boxes every day and change your
                life for the better.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              icon
            </div>
            <div className="ml-3">
              <h3 className="mt-1 font-bold">Track your habits</h3>
              <p className="mt-1 text-sm text-gray-400">

                Monitor your progress with intuitive tile-based grid
                charts. Try to fill the boxes every day and change your
                life for the better.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              icon
            </div>
            <div className="ml-3">
              <h3 className="mt-1 font-bold">Track your habits</h3>
              <p className="mt-1 text-sm text-gray-400">

                Monitor your progress with intuitive tile-based grid
                charts. Try to fill the boxes every day and change your
                life for the better.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              icon
            </div>
            <div className="ml-3">
              <h3 className="mt-1 font-bold">Track your habits</h3>
              <p className="mt-1 text-sm text-gray-400">

                Monitor your progress with intuitive tile-based grid
                charts. Try to fill the boxes every day and change your
                life for the better.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              icon
            </div>
            <div className="ml-3">
              <h3 className="mt-1 font-bold">Track your habits</h3>
              <p className="mt-1 text-sm text-gray-400">

                Monitor your progress with intuitive tile-based grid
                charts. Try to fill the boxes every day and change your
                life for the better.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              icon
            </div>
            <div className="ml-3">
              <h3 className="mt-1 font-bold">Track your habits</h3>
              <p className="mt-1 text-sm text-gray-400">

                Monitor your progress with intuitive tile-based grid
                charts. Try to fill the boxes every day and change your
                life for the better.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              icon
            </div>
            <div className="ml-3">
              <h3 className="mt-1 font-bold">Track your habits</h3>
              <p className="mt-1 text-sm text-gray-400">

                Monitor your progress with intuitive tile-based grid
                charts. Try to fill the boxes every day and change your
                life for the better.
              </p>
            </div>
          </div>
          {/* characteristic */}
          <div className="flex">
            <div className="text-xl">
              icon
            </div>
            <div className="ml-3">
              <h3 className="mt-1 font-bold">Track your habits</h3>
              <p className="mt-1 text-sm text-gray-400">

                Monitor your progress with intuitive tile-based grid
                charts. Try to fill the boxes every day and change your
                life for the better.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* get it on ios and android */}
      <div className="mt-12 gap-5 flex items-center justify-center scale animate-fade-up">
        <div className="relative transition hover:scale-105">
          <a href=""> <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
            width={200}
            height={200}
            alt="Picture of the author"
            unoptimized
            className="h-16 border border-gray-300 rounded-lg"
          /></a>
        </div>
        <div className="relative transition hover:scale-105">
          <a href=""> <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
            width={200}
            height={200}
            alt="Picture of the author"
            unoptimized
            className="h-16 border border-gray-300 rounded-lg"
          /></a>
        </div>
      </div>


      {/* footer */}
      <div className="mt-5 py-10 flex flex-col justify-center items-center text-xs text-gray-300 xl:items-center">
        <div className="flex flex-row space-x-4">
          <div className="mt-4 flex flex-col sm:mt-0 space-y-2">
            <a className="ml-4 sm:ml-8 text-gray-300 underline dark:hover:text-gray-100" href="">Contact</a>
            <a className="ml-4 sm:ml-8 text-gray-300 underline dark:hover:text-gray-100" href="">Contact</a>
            <a className="ml-4 sm:ml-8 text-gray-300 underline dark:hover:text-gray-100" href="">Contact</a>
          </div>
          <div className="mt-4 flex flex-col sm:mt-0 space-y-2">
            <a className="ml-4 sm:ml-8 text-gray-300 underline dark:hover:text-gray-100" href="">Contact</a>
            <a className="ml-4 sm:ml-8 text-gray-300 underline dark:hover:text-gray-100" href="">Contact</a>
            <a className="ml-4 sm:ml-8 text-gray-300 underline dark:hover:text-gray-100" href="">Contact</a>
          </div>
          <div className="mt-4 flex flex-col sm:mt-0 space-y-2">
            <a className="ml-4 sm:ml-8 text-gray-300 underline dark:hover:text-gray-100" href="">Contact</a>
            <a className="ml-4 sm:ml-8 text-gray-300 underline dark:hover:text-gray-100" href="">Contact</a>
            <a className="ml-4 sm:ml-8 text-gray-300 underline dark:hover:text-gray-100" href="">Contact</a>
          </div>
        </div>
        <div className="mt-8">
          Made with ❤️ and ☕️ by © Hafizur Rahman 2025
        </div>
      </div>



    </main>
  );
}
