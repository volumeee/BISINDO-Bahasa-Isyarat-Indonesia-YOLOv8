import { useState, useEffect } from "react";

export default function ReferenceScreen() {
  const [loading, setLoading] = useState(true);
  const references = [
    {
      title: "Tuna wicara biasanya diikuti dengan kelainan lainnya",
      authors: "Pemerintahan Kota Surakarta",
      journal: "Surakarta Government Website",
      year: 2022,
      link: "https://surakarta.go.id/?p=28196",
    },
    {
      title: "Bahasa Isyarat Indonesia adalah bentuk komunikasi manual",
      authors: "D. Rina, F. Fauziah, and N. Hayati",
      journal: "",
      year: 2021,
      link: "",
    },
    {
      title: "Platform mengenai pembelajaran pengenalan huruf",
      authors: "I.P. Sari, Salamun, and Sukri",
      journal: "",
      year: 2021,
      link: "",
    },
    {
      title:
        "Analisis dan Perancangan Kamus Interaktif Bahasa Isyarat Indonesia dengan Speech Recognition",
      authors: "Z. Amrullah and K. E. Saputro",
      journal: "J. Bumigora Inf. Technol.",
      year: 2019,
      link: "https://doi.org/10.30812/bite.v1i2.604",
    },
    {
      title:
        "Aplikasi Spoxtech Untuk Penyandang Tuna Rungu – Wicara Menggunakan Algoritma Hidden Markov Model dan Metode Finite State Automata (FSA)",
      authors: "D. Rina, F. Fauziah, and N. Hayati",
      journal: "STRING (Satuan Tulisan Ris. dan Inov. Teknol.)",
      year: 2021,
      link: "https://doi.org/10.30998/string.v5i3.7690",
    },
    {
      title:
        "Indonesian Sign Language Recognition using Convolutional Neural Network and Fingertip Detection",
      authors: "Siahaan, U., Suhendra, A., & Handrizal",
      journal: "Jurnal Ilmu Komputer dan Informasi",
      year: 2022,
      link: "https://doi.org/10.21609/jiki.v15i1.1115",
    },
    {
      title:
        "Real-Time Indonesian Sign Language Recognition with Deep Learning and MediaPipe",
      authors: "Nugroho, S. P., Akbar, M. A., & Sunarya, U.",
      journal:
        "International Conference on Information and Communications Technology (ICOIACT)",
      year: 2021,
      link: "",
    },
    {
      title:
        "Pendidikan dan Pengembangan Keterampilan bagi Penyandang Tuna Rungu Wicara: Tantangan dan Peluang",
      authors: "Wulandari, R., & Budiyanto, B.",
      journal: "Jurnal Pendidikan Inklusi",
      year: 2022,
      link: "",
    },
    {
      title:
        "Strategi Komunikasi bagi Penyandang Tuna Rungu Wicara dalam Interaksi Sosial",
      authors: "Sari, D. P., & Darmawan, D.",
      journal: "Jurnal Ilmiah Komunikasi",
      year: 2022,
      link: "",
    },
    {
      title:
        "Bahasa Isyarat sebagai Media Komunikasi bagi Penyandang Tuna Rungu Wicara",
      authors: "Rahayu, S., & Hermawati, D.",
      journal: "Jurnal Pendidikan Bahasa dan Sastra",
      year: 2022,
      link: "",
    },
    {
      title:
        "Peran Bahasa Isyarat dalam Komunikasi dan Pendidikan bagi Penyandang Tuna Rungu Wicara",
      authors: "Pratama, A. R., & Susilawati, S.",
      journal: "Jurnal Pendidikan Bahasa dan Sastra Indonesia",
      year: 2021,
      link: "",
    },
    {
      title: "Pengenalan Handpose untuk Aplikasi Augmented Reality",
      authors: "Pratama, A. R., & Widyawan, W.",
      journal: "Jurnal Teknologi Informasi dan Ilmu Komputer",
      year: 2021,
      link: "",
    },
    {
      title: "Pengenalan Fingerpose untuk Aplikasi Penerjemah Bahasa Isyarat",
      authors: "Sari, D. P., & Wibowo, A. T.",
      journal: "Jurnal Teknik Informatika",
      year: 2021,
      link: "",
    },
    {
      title:
        "Penerapan TensorFlow untuk Pengenalan Handpose dan Fingerpose dalam Bahasa Isyarat",
      authors: "Nugroho, S. P., & Sunarya, U.",
      journal: "Jurnal Teknologi Informasi dan Ilmu Komputer",
      year: 2022,
      link: "",
    },
    {
      title:
        "Studi literatur dilakukan dengan mengkaji jurnal, artikel penelitian",
      authors: "Ristyawati et al.",
      journal: "",
      year: 2020,
      link: "",
    },
    {
      title:
        "HandSignDetector: A Hybrid CNN Approach for Hand Gesture Recognition from Complex Backgrounds",
      authors: "Khubaib Amjad Alam, dkk.",
      journal: "",
      year: 2021,
      link: "",
    },
    {
      title:
        "Evaluasi Metode Pengajaran Bisindo di Sekolah Luar Biasa: Suatu Studi Kasus",
      authors: "Prabowo, A., Sunardi, & Iswari, M.",
      journal: "Jurnal Pendidikan Khusus",
      year: 2022,
      link: "",
    },
    {
      title:
        "Deep Learning untuk Deteksi Objek pada Citra Drone untuk Aplikasi Pertanian Presisi",
      authors: "Putra, I.G.B.A., & Wirayuda, T.A.B.",
      journal: "Jurnal Sistem Informasi",
      year: 2022,
      link: "",
    },
    {
      title: "Implementasi Metode YOLO pada Deteksi Objek Berbahasa Indonesia",
      authors: "Ramadhani Djohar, Bayu Priyambadha, dan Riries Rulaningtyas",
      journal: "",
      year: 2019,
      link: "",
    },
  ];

  useEffect(() => {
    // Simulate fetching data from server
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-7 bg-gray-900 min-h-screen pt-24 mt-20">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl font-bold">References</h1>
        <p className="mt-6 text-lg leading-8">
          Di sini, Anda dapat menemukan berbagai referensi dan sumber belajar
          Bahasa Isyarat Indonesia yang digunakan dalam platform ini.
        </p>
      </div>
      <div className="mt-12 max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: references.length }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 text-gray-400 animate-pulse"
              >
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                <div className="h-6 bg-gray-700 rounded w-1/3 mt-4"></div>
              </div>
            ))
          : references.map((reference, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-gray-900"
              >
                <h2 className="text-xl font-bold">{reference.title}</h2>
                <p className="mt-2 text-gray-700">
                  Authors: {reference.authors}
                </p>
                <p className="mt-2 text-gray-700">
                  Journal: {reference.journal}
                </p>
                <p className="mt-2 text-gray-700">Year: {reference.year}</p>
                <a
                  href={reference.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
                >
                  Read More
                </a>
              </div>
            ))}
      </div>
    </div>
  );
}
