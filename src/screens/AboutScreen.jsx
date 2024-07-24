import { useState, useEffect } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import SS from "../assets/SS.png";

export default function AboutScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Tentang Kami
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                BISINDO
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                BISINDO (Bahasa Isyarat Indonesia) adalah platform yang
                didedikasikan untuk mempromosikan dan mengajarkan Bahasa Isyarat
                Indonesia melalui teknologi modern, termasuk deteksi objek untuk
                terjemahan waktu nyata.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {loading ? (
            <div className="animate-pulse">
              <div className="w-[48rem] h-[30rem] bg-gray-300 rounded-xl"></div>
            </div>
          ) : (
            <img
              alt="Tangkapan Layar Aplikasi BISINDO"
              src={SS}
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          )}
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Cara Menggunakan Deteksi Objek
              </h2>
              <p className="mt-6">
                Platform kami menggunakan teknologi deteksi objek canggih untuk
                mengenali gerakan bahasa isyarat secara waktu nyata. Untuk
                menggunakan fitur ini:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Unggah Video atau Gambar:
                    </strong>{" "}
                    Pilih media yang ingin Anda analisis dengan mengunggahnya
                    melalui antarmuka kami yang mudah digunakan.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Analisis Keamanan:
                    </strong>{" "}
                    Semua data yang diunggah diproses secara aman dan dijaga
                    kerahasiaannya. Kami menghargai privasi Anda.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Hasil Cepat:
                    </strong>{" "}
                    Dalam beberapa detik, platform kami akan memberikan hasil
                    deteksi objek yang akurat, menampilkan terjemahan bahasa
                    isyarat.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Kami berdedikasi untuk terus meningkatkan teknologi kami untuk
                memberikan pengalaman belajar yang terbaik bagi semua pengguna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
