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
        className="w-full grid-rows-[auto_1fr] gap-0 bg-transparent ring-0 max-w-[calc(100%-1rem)]! p-0 min-[1400px]:max-h-[calc(100dvh)] aspect-video border-0! rounded-lg overflow-visible"
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
              className="text-white hover:text-primary-500 transition-colors cursor-pointer justify-self-end"
              aria-label="Close trailer"
            >
              <X className="size-8" />
            </Button>
          }
        />
        <div className="rounded-[inherit] overflow-hidden aspect-video min-[1400px]:h-full  min-[1400px]:justify-self-center">
          {videoId && <Trailer videoId={videoId} autoplay />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
