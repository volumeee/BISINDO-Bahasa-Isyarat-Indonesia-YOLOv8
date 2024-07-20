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
    // Simulasi loading delay
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
                      Langkah 1:
                    </strong>{" "}
                    Buka aplikasi BISINDO dan navigasi ke bagian deteksi objek.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Langkah 2:
                    </strong>{" "}
                    Izinkan akses kamera saat diminta.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Langkah 3:
                    </strong>{" "}
                    Posisikan tangan Anda di depan kamera untuk mulai mendeteksi
                    gerakan.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Teknologi deteksi objek kami akan menerjemahkan gerakan yang
                dikenali menjadi teks secara waktu nyata, membuat komunikasi
                menjadi mulus dan mudah diakses.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Pembuat
              </h2>
              <div className="p-4 bg-gray-100 rounded-lg shadow-lg mt-5">
                <div className="flex items-center gap-x-4">
                  <div className="h-16 w-16 overflow-hidden rounded-lg border border-gray-300">
                    <img
                      className="h-full w-full object-cover"
                      src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f468-200d-1f393.png"
                      alt="Profil Pembuat"
                    />
                  </div>
                  <div className="">
                    <h3 className=" text-gray-900">
                      Nama:
                      <span className="ml-2 text-gray-600">Jane Doe</span>
                    </h3>
                    <p className="text-gray-900">
                      NIM:
                      <span className="ml-2 text-gray-600">12345678</span>
                    </p>
                    <p className="text-gray-900">
                      Jurusan:
                      <span className="ml-2 text-gray-600">Ilmu Komputer</span>
                    </p>
                    <p className="text-gray-900">
                      Fakultas:
                      <span className="ml-2 text-gray-600">
                        Fakultas Teknologi Informasi
                      </span>
                    </p>
                    <p className="text-gray-900">
                      Judul Penelitian:
                      <span className="ml-2 text-gray-600">
                        Deteksi Objek untuk Bahasa Isyarat Indonesia
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-8">
                “Guard well your thoughts when alone and your words when
                accompanied.”
                <span className="font-semibold text-sm">― Roy T. Bennett</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}