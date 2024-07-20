import { useState, useEffect } from "react";

export default function ReferenceScreen() {
  const [loading, setLoading] = useState(true);
  const references = [
    {
      title: "Understanding Sign Language Recognition: An Overview",
      authors: "John Doe, Jane Smith",
      journal: "Journal of Sign Language Studies",
      year: 2021,
      link: "https://example.com/reference1",
    },
    {
      title: "Advancements in Object Detection for Sign Language",
      authors: "Alice Johnson, Bob Brown",
      journal: "International Journal of Computer Vision",
      year: 2022,
      link: "https://example.com/reference2",
    },
    {
      title: "Integrating AI in Sign Language Translation Systems",
      authors: "Charlie Davis, Diana Evans",
      journal: "IEEE Transactions on Neural Networks",
      year: 2020,
      link: "https://example.com/reference3",
    },
    {
      title: "Integrating AI in Sign Language Translation Systems",
      authors: "Charlie Davis, Diana Evans",
      journal: "IEEE Transactions on Neural Networks",
      year: 2020,
      link: "https://example.com/reference3",
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
