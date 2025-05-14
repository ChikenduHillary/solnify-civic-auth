"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import Image from "next/image";

interface UploadAreaProps {
  onFileSelect: (file: File) => void;
}

export function UploadArea({ onFileSelect }: UploadAreaProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onFileSelect(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-2xl p-8 text-center ${
        isDragging ? "border-purple-600 bg-purple-600/10" : "border-gray-700"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {preview ? (
        <div className="relative aspect-square max-w-md mx-auto">
          <Image
            src={preview || "/placeholder.svg"}
            alt="Preview"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="w-16 h-16 bg-[#242435] rounded-full flex items-center justify-center mx-auto">
            <Upload className="w-8 h-8 text-purple-600" />
          </div>
          <div>
            <p className="text-gray-400">
              Drag and drop your file here, or{" "}
              <label className="text-purple-600 hover:text-purple-500 cursor-pointer">
                browse
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handleFile(e.target.files[0]);
                    }
                  }}
                />
              </label>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Supported formats: JPG, PNG, GIF • Max size: 100 MB
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
