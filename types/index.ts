/**
 * Posts
 */
export const CATEGORIES: { [type: string]: string } = {
  Post: "Post",
  Work: "Work",
  Photo: "Photo",
};

export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];

export type Post = {
  content: string;
  data: {
    author: string;
    excerpt?: string;
    caption?: string;
    date: string;
    image?: string;
    location?: string;
    slug: string;
    title?: string;
    type?: Category;
    skills?: string;
    link?: string;
  };
};

/**
 * Photos
 */
export type ExifData = {
  camera?: string;
  iso?: string;
  shutterSpeed?: string;
  aperature?: string;
};
