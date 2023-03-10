// @ts-ignore
import exif from "exif";
import type { ExifData } from "@/types";

/**
 * Attempt to retrieve image EXIF data (only for JPEGs)
 */
export const getImageExif = (mediaPath: string): Promise<ExifData | null> =>
  new Promise((resolve) => {
    new exif.ExifImage({ image: mediaPath }, function (
      error: Error,
      exifData: any
    ) {
      if (error) resolve(null);

      resolve({
        camera: exifData?.image.Model,
        iso: exifData?.exif.ISO,
        shutterSpeed: parseFloat(
          // @ts-ignore
          Math.pow(2, parseFloat(exifData?.exif.ShutterSpeedValue))
        ).toFixed(0),
        aperature: parseFloat(exifData?.exif.ApertureValue).toFixed(2),
      });
    });
  });
