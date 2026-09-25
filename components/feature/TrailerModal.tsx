"use client";

import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "../ui/dialog";
import { useTrailerModal } from "@/lib/store/useTrailerModal";
import { Trailer } from "./Trailer";

export function TrailerModal() {
  const { isOpen, videoId, title, closeTrailer } = useTrailerModal();
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeTrailer();
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="w-[min(calc(100vw-1rem),calc((100dvh-4.5rem)*16/9),1400px)] max-w-none sm:max-w-none max-h-dvh flex flex-col gap-1 p-0 bg-transparent ring-0 border-0 shadow-none overflow-visible"
      >
        <DialogTitle className="sr-only">
          {title ? `${title} Trailer` : "Movie Trailer"}
        </DialogTitle>
        <DialogClose
          render={
            <Button
              variant="text"
              color="base"
              size="icon-xl-3"
              className="absolute -top-12 right-0 z-1 text-white hover:text-primary-500 transition-colors cursor-pointer self-end"
              aria-label="Close trailer"
            >
              <X className="size-8" />
            </Button>
          }
        />
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-black shadow-2xl">
          {videoId && <Trailer videoId={videoId} autoplay className="size-full rounded-lg" />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
