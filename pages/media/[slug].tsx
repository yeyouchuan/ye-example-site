import React from "react";

import { promises as fs } from "fs";
import path from "path";

// @ts-ignore
import exif from "exif";
import matter from "gray-matter";

import PhotoLayout from "../../layouts/Photo";

const POSTS_DIR = "_posts";
const MEDIA_DIR = "public";

const getImageExif = (mediaPath: string) => {
  return new Promise((resolve, reject) => {
    new exif.ExifImage({ image: mediaPath }, function (
      error: any,
      exifData: any
    ) {
      if (error) reject(error.message);

      resolve({
        camera: exifData.image.Model,
        iso: exifData.exif.ISO,
        shutterSpeed: parseFloat(
          // @ts-ignore
          Math.pow(2, parseFloat(exifData.exif.ShutterSpeedValue))
        ).toFixed(0),
        aperature: parseFloat(exifData.exif.ApertureValue).toFixed(2),
      });
    });
  });
};

export async function getStaticProps({ params }: any) {
  const postsDir = path.join(process.cwd(), POSTS_DIR);
  const files = await fs.readdir(postsDir);

  const postPaths = files.filter((file) => {
    const ext = path.extname(file);
    return ext === ".md";
  });

  const posts = await Promise.all(
    postPaths.map(async (file: string) => {
      const contents = await fs.readFile(path.join(postsDir, file), "utf8");
      const parsed = matter(contents);

      return {
        content: parsed.content,
        data: parsed.data,
      };
    })
  );

  const post = posts.find((p) => p?.data?.slug === params.slug);

  const mediaPath = path.join(MEDIA_DIR, post?.data?.images);

  console.log("blah");

  return {
    props: {
      post,
      exif: await getImageExif(mediaPath),
    },
  };
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), POSTS_DIR);
  const files = await fs.readdir(postsDir);

  const postPaths = files.filter((file) => {
    const ext = path.extname(file);
    return ext === ".md";
  });

  const posts = await Promise.all(
    postPaths.map(async (file: string) => {
      const contents = await fs.readFile(path.join(postsDir, file), "utf8");
      const parsed = matter(contents);

      return {
        content: parsed.content,
        data: parsed.data,
      };
    })
  );

  const paths = posts
    .filter((post) => post?.data?.type === "Photo")
    .map((post) => ({
      params: { slug: post?.data?.slug },
    }));

  return {
    paths,
    fallback: false,
  };
}

const Media = ({ post, exif }: any) => {
  console.log(exif);
  return <PhotoLayout exif={exif} post={post} />;
};

export default Media;
