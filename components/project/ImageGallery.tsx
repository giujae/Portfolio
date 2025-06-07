import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface GalleryImage {
    url: string;
    description?: string;
}

interface ImageGalleryProps {
    images: GalleryImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    return (
        <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.slice(0, 6).map((image, index) => (
                    <div key={index} className="flex flex-col">
                        <div
                            className="relative aspect-video cursor-pointer group overflow-hidden border border-gray-100 dark:border-gray-300/50"
                            onClick={() => setSelectedImage(image)}
                        >
                            <Image
                                src={image.url}
                                alt={image.description || `Project image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-xs">클릭하여 크게 보기</p>
                            </div>
                        </div>
                        <p className="mt-1.5 text-xs text-center text-gray-600 dark:text-gray-400 px-1">
                            {image.description || `이미지 ${index + 1}`}
                        </p>
                    </div>
                ))}
            </div>

            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-screen-xl w-full h-[90vh] p-0 overflow-hidden">
                    <DialogTitle className="sr-only">{selectedImage?.description || 'Project image'}</DialogTitle>
                    {selectedImage && (
                        <div className="relative w-full h-full flex items-center justify-center bg-black/90">
                            <div className="relative w-full h-full">
                                <Image
                                    src={selectedImage.url}
                                    alt={selectedImage.description || 'Project image'}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                                <Button
                                    size="icon"
                                    variant="outline"
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-6 right-6 z-50 h-12 w-12 !bg-gray-800/90 hover:bg-gray-900 border-2 border-white/50 hover:border-white shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] backdrop-blur-sm rounded-full transition-all duration-200"
                                >
                                    <X className="w-6 h-6 text-white" />
                                    <span className="sr-only">Close</span>
                                </Button>
                                {selectedImage.description && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                                        <p className="text-white text-center">{selectedImage.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
