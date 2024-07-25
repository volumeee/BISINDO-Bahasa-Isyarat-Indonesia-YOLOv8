import React, { useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Camera } from "react-camera-pro";
import axios from "axios";

export default function CaptureScreen() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const camera = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const canvasRef = useRef(null);
  const [aspectRatio, setAspectRatio] = useState(16 / 9);
  const [imageSelected, setImageSelected] = useState(false); // New state

  useEffect(() => {
    const handleResize = () => {
      setAspectRatio(window.innerWidth <= 600 ? 4 / 5 : 16 / 9);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = async () => {
      const fileUrl = reader.result;
      setImage(fileUrl);
      setResult([]); // Clear previous results
      setLoading(true);
      await sendImageToRoboflow(file);
      setLoading(false);
      setImageSelected(true); // Set imageSelected to true
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const openCamera = () => setCameraActive(true);

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto();
    setImage(photo);
    setResult([]); // Clear previous results
    setCameraActive(false);
    setLoading(true);
    await sendImageToRoboflow(photo);
    setLoading(false);
    setImageSelected(true); // Set imageSelected to true
  };

  const sendImageToRoboflow = async (file) => {
    try {
      const base64String =
        typeof file === "string"
          ? file.replace("data:", "").replace(/^.+,/, "")
          : await new Promise((resolve) => {
              const reader = new FileReader();
              reader.onloadend = () =>
                resolve(reader.result.replace("data:", "").replace(/^.+,/, ""));
              reader.readAsDataURL(file);
            });

      const response = await axios.post(
        "https://detect.roboflow.com/bisindo-hiiig/3",
        base64String,
        {
          params: { api_key: "4iTfTnpJ1cUUR9GGZvDV" },
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      setResult(response.data.predictions);
    } catch (error) {
      console.error("Error sending image to Roboflow:", error);
      setResult([]);
    }
  };

  useEffect(() => {
    if (image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = image;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        if (result.length > 0) {
          result.forEach(
            ({ x, y, width, height, class: label, confidence }) => {
              const xMin = x - width / 2;
              const yMin = y - height / 2;
              const fontSize = 40;
              const labelPadding = 16;
              const boxColor = "purple";
              const boxAlpha = 0.3;

              ctx.font = `${fontSize}px Arial`;
              ctx.beginPath();
              ctx.rect(xMin, yMin, width, height);
              ctx.lineWidth = 5;
              ctx.strokeStyle = boxColor;
              ctx.stroke();
              ctx.globalAlpha = boxAlpha;
              ctx.fillStyle = boxColor;
              ctx.fillRect(xMin, yMin, width, height);
              ctx.globalAlpha = 1;

              const labelText = `${label} ${Math.round(confidence * 100)}%`;
              const textWidth = ctx.measureText(labelText).width;
              const textHeight = fontSize;
              ctx.fillStyle = boxColor;
              ctx.fillRect(
                xMin,
                yMin - textHeight - labelPadding,
                textWidth + 2 * labelPadding,
                textHeight + labelPadding
              );
              ctx.fillStyle = "white";
              ctx.fillText(labelText, xMin + labelPadding, yMin - labelPadding);
            }
          );
        }
      };
    }
  }, [image, result]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 mt-16">
      <h1 className="text-4xl font-bold text-white">BISINDO</h1>
      <p className="text-lg text-gray-300 mb-4">Bahasa Isyarat Indonesia</p>
      <div className="w-full max-w-3xl h-96 bg-gray-700 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
        {cameraActive ? (
          <Camera
            ref={camera}
            numberOfCamerasCallback={setNumberOfCameras}
            aspectRatio={aspectRatio}
            videoConstraints={{ facingMode: "environment" }}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : image ? (
          <>
            <canvas
              ref={canvasRef}
              className="object-contain w-full h-full rounded-lg"
            />
          </>
        ) : (
          <p className="text-gray-500">No image selected</p>
        )}
      </div>
      <div className="flex space-x-4 mb-4">
        {!cameraActive && (
          <button
            onClick={openCamera}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105"
          >
            Camera
          </button>
        )}
        {!cameraActive && (
          <div
            {...getRootProps()}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105 cursor-pointer"
          >
            <input {...getInputProps()} />
            Gallery
          </div>
        )}
        {cameraActive && (
          <button
            onClick={takePhoto}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105"
          >
            Snap
          </button>
        )}
        {cameraActive && numberOfCameras > 1 && (
          <button
            onClick={() => camera.current.switchCamera()}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105"
          >
            Switch Camera
          </button>
        )}
      </div>
      {loading ? (
        <div className="text-white text-lg">Loading...</div>
      ) : (
        <>
          <p className="text-lg text-white mb-2">Detection Results</p>
          <div className="w-full flex flex-col md:flex-row">
            {result.length === 0 && imageSelected ? (
              <div className="w-full text-center text-lg text-red-500">
                gagal deteksi, pastikan hasil foto sesuai dan bagus, coba lagi
              </div>
            ) : (
              <>
                <div className="w-full md:w-1/2 text-2xl md:text-9xl sm:text-sm font-bold border-2 border-gray-400 p-4 rounded text-white mb-4 md:mb-0 overflow-auto flex flex-col items-center justify-center space-y-2">
                  {result.map((res, index) => (
                    <p key={index}>{res.class}</p>
                  ))}
                </div>
                <div className="w-full md:w-1/2 text-sm md:text-sm font-bold border-2 border-gray-400 p-4 rounded text-white overflow-auto">
                  <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
