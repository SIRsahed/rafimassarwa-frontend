"use client";
import Link from "next/link";
import PathTracker from "../../_components/PathTracker";

import { useState, useRef } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check if file is jpeg or png
    if (!file.type.match("image/jpeg") && !file.type.match("image/png")) {
      alert("Only JPEG and PNG files are allowed");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setUploadedImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    console.log("Image:", uploadedImage);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <PathTracker />

        <Link href={"/dashboard/influencers/add-influencers"}>
          <button className="bg-[#28a745] py-2 px-5 rounded-lg text-white font-semibold">
            + Add Influencers
          </button>
        </Link>
      </div>

      <div>
        <div className="border border-[#b0b0b0] rounded-lg p-4">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Influencers Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 outline-none rounded-md bg-inherit border border-[#b0b0b0]"
                  placeholder="Enter Influencer Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 outline-none rounded-md bg-inherit border border-[#b0b0b0]"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 outline-none rounded-md bg-inherit border border-[#b0b0b0]"
                  placeholder="Enter Email Address"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 outline-none rounded-md bg-inherit border border-[#b0b0b0]"
                  placeholder="Address"
                  required
                />
              </div>
            </div>

            <div>
              <h2 className="text-gray-700 mb-4">Blog Gallery</h2>
              <div
                className={`lg:h-[90%] border-2 border-dashed rounded-md flex flex-col items-center justify-center cursor-pointer ${
                  isDragging ? "border-gray-500 bg-gray-50" : "border-gray-300"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleBrowseClick}
              >
                {uploadedImage ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Uploaded image"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-gray-400 mb-2" />
                    <p className="text-gray-500 text-center">
                      Drop your imager here, or browse
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Jpeg, png are allowed
                    </p>
                  </>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/jpeg,image/png"
                  className="hidden"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
