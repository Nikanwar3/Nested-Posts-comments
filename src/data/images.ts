export interface Image {
  id: string;
  title: string;
  imageUrl: string;
  generationDate: string;
  aiModel: string;
  tags: string[];
}

export const images: Image[] = [
  {
    id: "1",
    title: "Abstract Landscape",
    imageUrl: "/api/placeholder/400/300",
    generationDate: "2025-01-26T10:30:00Z",
    aiModel: "Stable Diffusion",
    tags: ["landscape", "abstract"]
  },
  {
    id: "2",
    title: "Futuristic City",
    imageUrl: "/api/placeholder/400/300",
    generationDate: "2025-01-26T11:45:00Z",
    aiModel: "DALL-E",
    tags: ["city", "futuristic"]
  },
  {
    id: "3",
    title: "Digital Portrait",
    imageUrl: "/api/placeholder/400/300",
    generationDate: "2025-01-26T12:15:00Z",
    aiModel: "Midjourney",
    tags: ["portrait", "digital"]
  }
];

export const aiModels = ["All", "Stable Diffusion", "DALL-E", "Midjourney"];