import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = "_posts";

export const getPostPaths = async (relativePostsDir: string) => {
  const files = await fs.readdir(relativePostsDir);

  return files.filter((file) => {
    const ext = path.extname(file);
    return ext === ".md";
  });
};

/**
 * Find the slugs for all the dynamic content of a given type
 */
export const getSlugsByType = async (
  type: string,
  postsDir: string = POSTS_DIR
) => {
  const relativePostsDir = path.join(process.cwd(), postsDir);
  const postPaths = await getPostPaths(relativePostsDir);

  const posts = await Promise.all(
    postPaths.map(async (file: string) => {
      const contents = await fs.readFile(
        path.join(relativePostsDir, file),
        "utf8"
      );
      const parsed = matter(contents);

      return {
        content: parsed.content,
        data: parsed.data,
      };
    })
  );

  return posts
    .filter((post) => post?.data?.type === type)
    .map((post) => post?.data?.slug);
};

/**
 * Format a list of slugs for Next.js's `getStaticPaths`
 */
export const nextifySlugs = (slugs: string[]) => ({
  paths: slugs.map((slug) => ({
    params: { slug },
  })),
  fallback: false,
});

/**
 * Get an array of all posts with their meta + content
 */
export const getPosts = async (postsDir: string = POSTS_DIR) => {
  const relativePostsDir = path.join(process.cwd(), postsDir);
  const postPaths = await getPostPaths(relativePostsDir);

  return Promise.all(
    postPaths.map(async (file: string) => {
      const contents = await fs.readFile(
        path.join(relativePostsDir, file),
        "utf8"
      );
      const parsed = matter(contents);

      return {
        content: parsed.content,
        data: parsed.data,
      };
    })
  );
};

/**
 * Get post by slug
 */
export const getPostBySlug = async (slug: string) =>
  (await getPosts()).find((p) => p?.data?.slug === slug);
