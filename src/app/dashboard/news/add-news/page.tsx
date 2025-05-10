"use client";
import PathTracker from "../../_components/PathTracker";

import type React from "react";

import { useState } from "react";
import { Upload, X } from "lucide-react";
import Image from "next/image";

const Page = () => {
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...images];
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(updatedImages[index].preview);
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <PathTracker />

        <button className="bg-[#28a745] py-2 px-5 rounded-lg text-white font-semibold">
          Save
        </button>
      </div>

      <div>
        <div className="border border-[#b0b0b0] p-4 rounded-lg">
          <div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-700"
                >
                  News Title
                </label>
                <input
                  id="title"
                  placeholder="Enter News Title"
                  className="border border-[#b0b0b0] p-4 rounded-lg bg-inherit outline-none w-full"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="text-sm font-medium text-gray-700"
                >
                  News Description
                </label>
                <textarea
                  id="description"
                  placeholder="Type Description here..."
                  className="border border-[#b0b0b0] p-4 rounded-lg bg-inherit outline-none w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  News Gallery
                </label>

                {images.length > 0 ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-square relative rounded-md overflow-hidden border border-[#b0b0b0]">
                            <Image
                              src={image.preview || "/placeholder.svg"}
                              alt={`Preview ${index}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md opacity-90 hover:opacity-100"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}

                      <label
                        htmlFor="file-upload"
                        className="aspect-square flex items-center justify-center border-2 border-dashed border-[#b0b0b0] rounded-md cursor-pointer"
                      >
                        <div className="flex flex-col items-center space-y-1 text-gray-500">
                          <Upload className="h-8 w-8" />
                          <span className="text-xs">Add more</span>
                        </div>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept="image/jpeg,image/png"
                          onChange={handleImageUpload}
                          multiple
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-12 text-center">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="h-12 w-12 text-gray-400">
                        <Upload className="mx-auto h-12 w-12" />
                      </div>
                      <div className="flex text-sm text-gray-500">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer"
                        >
                          <span>Drop your image here, or browse</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/jpeg,image/png"
                            onChange={handleImageUpload}
                            multiple
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-400">
                        Jpeg, png are allowed
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
