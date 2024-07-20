import React, { useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Camera } from "react-camera-pro";
import axios from "axios";

function CaptureScreen() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState([]);
  const camera = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const canvasRef = useRef(null);
  const [aspectRatio, setAspectRatio] = useState(16 / 9);

  // change aspect ratio
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setAspectRatio(4 / 5); // Atur rasio aspek untuk layar kecil
      } else {
        setAspectRatio(16 / 9); // Atur rasio aspek untuk layar besar
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Setel rasio aspek saat komponen di-mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = async () => {
      const fileUrl = reader.result;
      setImage(fileUrl);
      await sendImageToRoboflow(file);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const openCamera = () => {
    setCameraActive(true);
  };

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto();
    setImage(photo);
    setCameraActive(false);
    sendImageToRoboflow(photo);
  };

  const sendImageToRoboflow = async (file) => {
    try {
      console.log("Sending image to Roboflow");

      if (typeof file === "string") {
        const base64String = file.replace("data:", "").replace(/^.+,/, "");

        const response = await axios.post(
          "https://detect.roboflow.com/bisindo-hiiig/2",
          base64String,
          {
            params: {
              api_key: "4iTfTnpJ1cUUR9GGZvDV",
            },
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        console.log("Response received from Roboflow:", response.data);
        setResult(response.data.predictions);
      } else {
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64String = reader.result
            .replace("data:", "")
            .replace(/^.+,/, "");

          const response = await axios.post(
            "https://detect.roboflow.com/bisindo-hiiig/2",
            base64String,
            {
              params: {
                api_key: "4iTfTnpJ1cUUR9GGZvDV",
              },
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          console.log("Response received from Roboflow:", response.data);
          setResult(response.data.predictions);
        };
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error("Error sending image to Roboflow:", error);
      setResult([]);
    }
  };

  useEffect(() => {
    if (image && result.length > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = image;

      // Variabel untuk penyesuaian mudah
      const fontSize = 40; // Ukuran font dalam piksel
      const labelPadding = 16; // Padding di sekitar teks label dalam piksel
      const boxColor = "purple"; // Warna untuk bounding box dan teks
      const boxAlpha = 0.3; // Transparansi untuk bounding box

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        result.forEach((prediction) => {
          const { x, y, width, height, class: label, confidence } = prediction;
          const xMin = x - width / 2;
          const yMin = y - height / 2;

          // Set font size
          ctx.font = `${fontSize}px Arial`;

          // Draw bounding box with transparency
          ctx.beginPath();
          ctx.rect(xMin, yMin, width, height);
          ctx.lineWidth = 5;
          ctx.strokeStyle = boxColor;
          ctx.stroke();

          // Set global alpha for transparency
          ctx.globalAlpha = boxAlpha;

          // Draw bounding box fill
          ctx.fillStyle = boxColor;
          ctx.fillRect(xMin, yMin, width, height);

          // Reset global alpha to 1 for subsequent drawing
          ctx.globalAlpha = 1;

          // Draw label background
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

          // Draw label text
          ctx.fillStyle = "white";
          ctx.fillText(labelText, xMin + labelPadding, yMin - labelPadding);
        });
      };
    }
  }, [image, result]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 mt-16">
      <h1 className="text-4xl font-bold text-white">BISINDO</h1>
      <p className="text-lg text-gray-300 mb-4">Bahasa Isyarat Indonesia</p>
      <div className="w-full max-w-3xl h-96 bg-gray-700 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
        {cameraActive ? (
          <div className="w-full h-full">
            <Camera
              ref={camera}
              numberOfCamerasCallback={setNumberOfCameras}
              aspectRatio={aspectRatio}
              videoConstraints={{ facingMode: "environment" }}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ) : image ? (
          <>
            <img
              src={image}
              alt="Captured"
              className="object-contain w-full h-full rounded-lg hidden"
            />
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
        <button
          onClick={openCamera}
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:scale-110"
        >
          Camera
        </button>
        {!cameraActive && (
          <div
            {...getRootProps()}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:scale-110 cursor-pointer"
          >
            <input {...getInputProps()} />
            Gallery
          </div>
        )}
        {cameraActive && (
          <button
            onClick={takePhoto}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:scale-110"
          >
            Snap
          </button>
        )}
        {cameraActive && numberOfCameras > 1 && (
          <button
            onClick={() => camera.current.switchCamera()}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:scale-110"
          >
            Switch Camera
          </button>
        )}
      </div>
      <p className="text-lg text-white mb-2">Detection Results</p>
      <div className="text-4xl font-bold border-2 border-gray-400 p-4 rounded text-white">
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
}

export default CaptureScreen;
