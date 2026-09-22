"use client";

import { useState } from "react";
import PlayIcon from "../../public/icons/play.svg";

export function Trailer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "22w7z_lT6YM";

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-lg rounded-b-none bg-black">
      {!isPlaying ? (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group relative size-full cursor-pointer focus:outline-none"
          aria-label="Play trailer"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Trailer cover"
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-[82px] items-center justify-center rounded-full text-white shadow-lg transition-transform group-hover:scale-110 border border-primary-50 backdrop-blur-xs">
              <PlayIcon/>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          className="size-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </div>
  );
}
