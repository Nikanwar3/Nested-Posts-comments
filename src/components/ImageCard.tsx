import { format } from 'date-fns';
import { Image } from '../data/images';
import { cn } from '../lib/utils';

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
  className?: string;
}

export function ImageCard({ image, onClick, className }: ImageCardProps) {
  return (
    <div 
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer",
        className
      )}
      onClick={() => onClick(image)}
    >
      <div className="aspect-[4/3] relative">
        <img
          src={image.imageUrl}
          alt={image.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{image.title}</h3>
        <div className="flex flex-col gap-1 text-sm text-gray-500 dark:text-gray-400">
          <p>{format(new Date(image.generationDate), 'PPP')}</p>
          <p>Model: {image.aiModel}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {image.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}