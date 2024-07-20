import React, { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Camera } from "react-camera-pro";
import axios from "axios";

function CaptureScreen() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("No result yet");
  const camera = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [numberOfCameras, setNumberOfCameras] = useState(0);

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

      const formData = new FormData();
      formData.append("image", file); // Use the file object directly

      const response = await axios.post(
        "https://detect.roboflow.com/bisindo-hiiig/2?api_key=4iTfTnpJ1cUUR9GGZvDV", // API key included in the URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response received from Roboflow:", response.data);
      setResult(JSON.stringify(response.data.predictions, null, 2));
    } catch (error) {
      console.error("Error sending image to Roboflow:", error);
      setResult("Error: " + error.message);
    }
  };

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
              aspectRatio={16 / 9}
              videoConstraints={{ facingMode: "environment" }}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ) : image ? (
          <img
            src={image}
            alt="Captured"
            className="object-contain w-full h-full rounded-lg"
          />
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
        <pre>{result}</pre>
      </div>
    </div>
  );
}

export default CaptureScreen;
