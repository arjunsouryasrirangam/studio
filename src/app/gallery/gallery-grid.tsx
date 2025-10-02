'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  const galleryImages = PlaceHolderImages.filter(img => img.id !== 'hero');

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.imageUrl}
              alt={image.description}
              width={400}
              height={400}
              className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-3">
              <p className="text-xs font-semibold text-white/90 line-clamp-2">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          {selectedImage && (
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                 <div className="relative h-[50vh] md:h-[60vh]">
                    <Image
                        src={selectedImage.imageUrl}
                        alt={selectedImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={selectedImage.imageHint}
                    />
                 </div>
                 <div className="flex flex-col justify-center p-8 bg-background">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold font-headline mb-4">Image Details</DialogTitle>
                      <DialogDescription className="text-muted-foreground mb-4 flex-grow">{selectedImage.description}</DialogDescription>
                    </DialogHeader>
                    <div>
                      <h3 className="text-sm font-semibold mb-2">AI Image Hint</h3>
                      <p className="font-mono text-xs bg-muted px-2 py-1 rounded-md inline-block">{selectedImage.imageHint}</p>
                    </div>
                 </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
