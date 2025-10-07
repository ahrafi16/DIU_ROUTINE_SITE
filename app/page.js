import Image from "next/image";


export default function Home() {
  return (
    <main className="bg-black text-white h-screen flex flex-col px-10 pb-10 mx-auto md:px-30 lg:px-40 xl:px-60 2xl:px-80">
      <div className="sticky flex flex-col sm:flex-row justify-between mt-6 xl:items-center animate-fade-up">
        <a className="flex items-center text-4xl font-semibold md:leading-tight">
          Routine<span className="text-teal-600">Viewer</span>
        </a>
        <div className="flex items-center mt-2 text-sm text-gray-200 xl:mt-0 pb-2">
          <a className="ml-4 hover:text-white" href="https://www.linkedin.com/in/hafizflow/" target="_blank">
            <Image
              src="/assets/in.svg"
              width={30}
              height={30}
              alt="Picture of the author"
              className="duration-200 filter brightness-0 invert transform rounded-full shadow hover:scale-105"
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



      <div className="mt-8 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 items-center animate-fade-up">
        <Image
          src="/assets/sc4.png"
          priority
          width={500}
          height={500}
          alt="Screenshot 4"
          className="w-full transition-transform duration-700 ease-in-out hover:scale-105"
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


      {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
        <div className="flex flex-col bg-scaffold shadow-xl border border-gray-300 px-4 py-4 rounded-xl">
          <div className="flex justify-between">
            <div className="font-semibold text-xl underline">Greate Job</div>
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
            <div>Amit Chakrabarty Choton</div>
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
      </div> */}


      <div className="mt-12 animate-fade-up">
        <div className="grid gap-4 my-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
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
              <h3 className="font-bold">BBA & MCT Department</h3>
              <p className="mt-1 text-sm text-gray-400">
                Data for this department will be added soon. Stay tuned!
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
                src="/assets/pdf.png"
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
                src="/assets/growth.png"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-teal-900 to-teal-800 p-10 rounded-lg h-96  overflow-hidden">
            <h3 className="text-lg font-semibold">Home Screen Widgets</h3>
            <p className="text-sm">on iOS 17+ and Android</p>
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
            <h3 className="text-lg font-semibold">Home Screen Widgets</h3>
            <p className="text-sm">on iOS 17+ and Android</p>
            <Image
              src="/assets/mock.svg"
              width={500}
              height={500}
              priority
              alt="Picture of the author"
              className="w-full p-10 transition-transform duration-500 ease-in-out hover:scale-105 drop-shadow-[10px_0_10px_rgba(0,0,0,0.5)]"
            />
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
        <div className="mt-8">
          Made with ❤️ and ☕️ by © Hafizur Rahman 2025
        </div>
      </div>
    </main>
  );
}
