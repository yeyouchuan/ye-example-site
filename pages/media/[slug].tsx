import React from "react";
import path from "path";
import PhotoLayout from "@/layouts/Photo";
import SEO from "@/components/SEO";
import { getPostBySlug, getSlugsByType, nextifySlugs } from "@/utils/posts";
import { getImageExif } from "@/utils/photos";
import type { Post, ExifData } from "@/types";

const MEDIA_DIR = "public";

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
      exif: post?.data.image
        ? (await getImageExif(path.join(MEDIA_DIR, post.data.image))) || null
        : null,
    },
  };
};

export const getStaticPaths = async () =>
  nextifySlugs(await getSlugsByType("Photo"));

const Media: React.FC<{ post: Post; exif: ExifData }> = ({ post, exif }) => (
  <>
    <SEO
      title={`${post.data.title} | Noah Buscher`}
      description={post.data.caption}
      image={`https://noahbuscher.com${post.data.image}`}
    />
    <PhotoLayout exif={exif} post={post} />
  </>
);

export default Media;
