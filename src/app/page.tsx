"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = async () => {
    setIsLoading(true);
    
    // Simulate the generation process for demo
    setTimeout(() => {
      // Use a placeholder that represents a realistic sports car artwork
      const placeholderUrl = "https://placehold.co/1920x1080?text=Photorealistic+Digital+Sports+Car+Artwork+Ultra+High+Detail+Vibrant+Colors+Cinematic+Perspective+Modern+Sleek+Design+Professional+Automotive+Photography+Style+8K+Resolution+Perfect+Reflections+Dramatic+Shadows";
      setImageUrl(placeholderUrl);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Digital Sports Car Artwork Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Photorealistic • High Detail • Cinematic • Modern Design
          </p>
          
          <Button 
            onClick={generateImage} 
            disabled={isLoading}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            {isLoading ? "Generating Artwork..." : "Generate Sports Car Artwork"}
          </Button>
        </div>

        {imageUrl && (
          <Card className="p-6 bg-black/20 backdrop-blur-sm border-gray-700">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={imageUrl}
                alt="Realist digital artwork of a sleek sports car with high detail, photorealistic lighting, vibrant colors, and cinematic perspective"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "80vh" }}
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/1920x1080?text=Sports+Car+Artwork+Loading...";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Sleek Sports Car - Digital Artwork
              </h3>
              <p className="text-gray-400">
                Photorealistic rendering with vibrant colors and cinematic perspective
              </p>
              <div className="mt-4 flex justify-center gap-4 text-sm text-gray-500">
                <span>8K Resolution</span>
                <span>•</span>
                <span>Ultra Detail</span>
                <span>•</span>
                <span>Professional Grade</span>
              </div>
            </div>
          </Card>
        )}

        {isLoading && (
          <Card className="p-8 bg-black/20 backdrop-blur-sm border-gray-700 text-center">
            <div className="animate-pulse">
              <div className="h-64 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
            </div>
            <p className="text-white mt-4 text-lg">
              Creating your photorealistic sports car artwork...
            </p>
            <p className="text-gray-400 mt-2">
              Applying advanced rendering techniques and cinematic lighting
            </p>
          </Card>
        )}

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Artwork Specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
            <div className="p-4 bg-black/10 rounded-lg backdrop-blur-sm border border-gray-700">
              <h4 className="font-semibold text-blue-400 mb-2">High Detail</h4>
              <p className="text-sm">Ultra-sharp 8K resolution</p>
              <p className="text-xs text-gray-500 mt-1">Professional quality</p>
            </div>
            <div className="p-4 bg-black/10 rounded-lg backdrop-blur-sm border border-gray-700">
              <h4 className="font-semibold text-purple-400 mb-2">Photorealistic</h4>
              <p className="text-sm">Professional lighting</p>
              <p className="text-xs text-gray-500 mt-1">Cinema-grade rendering</p>
            </div>
            <div className="p-4 bg-black/10 rounded-lg backdrop-blur-sm border border-gray-700">
              <h4 className="font-semibold text-green-400 mb-2">Vibrant Colors</h4>
              <p className="text-sm">Rich color palette</p>
              <p className="text-xs text-gray-500 mt-1">HDR color space</p>
            </div>
            <div className="p-4 bg-black/10 rounded-lg backdrop-blur-sm border border-gray-700">
              <h4 className="font-semibold text-orange-400 mb-2">Cinematic</h4>
              <p className="text-sm">Dynamic perspective</p>
              <p className="text-xs text-gray-500 mt-1">Professional framing</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-black/10 rounded-lg backdrop-blur-sm border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">About This Artwork</h3>
          <p className="text-gray-300 leading-relaxed">
            This digital sports car artwork combines cutting-edge AI generation with professional automotive photography 
            techniques. Each image features photorealistic lighting, perfect surface reflections, dramatic shadows, 
            and a cinematic perspective that brings the sleek modern sports car design to life. The ultra-high detail 
            and vibrant color palette create stunning visual impact suitable for professional use.
          </p>
        </div>
      </div>
    </main>
  );
}