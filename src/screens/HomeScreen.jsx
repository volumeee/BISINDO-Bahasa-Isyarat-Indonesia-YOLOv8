import { useState, useEffect } from "react";
import introImage from "../assets/intro.png";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-7 bg-gray-900 min-h-screen flex items-center justify-center">
      {loading ? (
        <div className="relative isolate overflow-hidden px-10 pt-24 mt-10 pb-20 sm:px-16 lg:px-9 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-1">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Komunikasi Tanpa Batas dengan Bahasa Isyarat Indonesia
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              BISINDO adalah platform belajar Bahasa Isyarat Indonesia dengan
              teknologi deteksi objek YOLO v8. Akses berbagai materi untuk semua
              tingkatan dan ciptakan komunikasi inklusif bersama kami.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/bisindo"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:scale-110"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="mt-4 sm:mt-0 text-sm font-semibold leading-6 text-white rounded-lg px-3 py-2 hover:shadow-sm hover:shadow-white duration-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <div className="animate-pulse">
              <div className="w-full h-80 bg-gray-700 rounded-md"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative isolate overflow-hidden px-10 pt-24 mt-10 pb-20 sm:px-16 lg:px-9 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-1">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Komunikasi Tanpa Batas dengan Bahasa Isyarat Indonesia
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              BISINDO adalah platform belajar Bahasa Isyarat Indonesia dengan
              teknologi deteksi objek YOLO v8. Akses berbagai materi untuk semua
              tingkatan dan ciptakan komunikasi inklusif bersama kami.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/bisindo"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:scale-110"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="mt-4 sm:mt-0 text-sm font-semibold leading-6 text-white rounded-lg px-3 py-2 hover:shadow-sm hover:shadow-white duration-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <img
              alt="App screenshot"
              src={introImage}
              className="w-full rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      )}
    </div>
  );
}
