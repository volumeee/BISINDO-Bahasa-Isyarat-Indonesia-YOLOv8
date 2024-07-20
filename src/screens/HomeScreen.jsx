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
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
      {loading ? (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-4 max-sm:mt-20 max-sm:pt-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Komunikasi Tanpa Batas dengan Bahasa Isyarat Indonesia
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              BISINDO adalah platform belajar Bahasa Isyarat Indonesia dengan
              teknologi deteksi objek YOLO v8. Akses berbagai materi untuk semua
              tingkatan dan ciptakan komunikasi inklusif bersama kami.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-6 max-[768px]:items-center max-[768px]:justify-center">
              <Link
                to="/bisindo"
                className="bg-white text-gray-900 rounded-md px-4 py-2 text-sm font-semibold shadow-sm hover:bg-gray-100 transition-transform transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold text-white rounded-md px-4 py-2 mt-4 sm:mt-0 hover:underline"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <div className="w-full h-80 bg-gray-700 rounded-md animate-pulse"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-4  max-sm:mt-20 max-sm:pt-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Komunikasi Tanpa Batas dengan Bahasa Isyarat Indonesia
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              BISINDO adalah platform belajar Bahasa Isyarat Indonesia dengan
              teknologi deteksi objek YOLO v8. Akses berbagai materi untuk semua
              tingkatan dan ciptakan komunikasi inklusif bersama kami.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-6 max-[768px]:items-center max-[768px]:justify-center">
              <Link
                to="/bisindo"
                className="bg-white text-gray-900 rounded-md px-4 py-2 text-sm font-semibold shadow-sm hover:bg-gray-100 transition-transform transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold text-white rounded-md px-4 py-2 mt-4 sm:mt-0 hover:underline"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <img
              alt="App screenshot"
              src={introImage}
              className="w-full rounded-md bg-white/10 ring-1 ring-white/10"
            />
          </div>
        </div>
      )}
    </div>
  );
}
