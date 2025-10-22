'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = ['Singing', 'Swimming', 'Badminton', 'Programming'];

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  const imagesByCategory = useMemo(() => {
    const grouped: Record<string, ImagePlaceholder[]> = {};
    PlaceHolderImages.forEach((image) => {
      if (!grouped[image.category]) {
        grouped[image.category] = [];
      }
      grouped[image.category].push(image);
    });
    return grouped;
  }, []);

  return (
    <>
      <Tabs defaultValue="Singing" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {imagesByCategory[category]?.map((image) => (
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
             {(!imagesByCategory[category] || imagesByCategory[category].length === 0) && (
                <div className="text-center py-16 text-muted-foreground">
                    <p>No images in this category yet.</p>
                </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-4">
          {selectedImage && (
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-full max-h-[80vh]">
                    <Image
                        src={selectedImage.imageUrl}
                        alt={selectedImage.description}
                        width={1200}
                        height={800}
                        className="object-contain w-full h-full"
                        data-ai-hint={selectedImage.imageHint}
                    />
                </div>
                <div className="text-center p-4 bg-background/50 rounded-b-lg w-full">
                    <DialogTitle className="text-lg font-bold font-headline mb-2">{selectedImage.description}</DialogTitle>
                    <div>
                        <h3 className="text-xs font-semibold mb-1 text-muted-foreground">AI Image Hint</h3>
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
