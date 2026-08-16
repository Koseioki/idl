// not needed

const localResourceImages = import.meta.glob("../assets/img/resources/*.{png,jpg,jpeg,webp,avif,svg,gif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const localSeminarImages = import.meta.glob("../assets/img/events/*.{png,jpg,jpeg,webp,avif,svg,gif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const localSrcAssetImages = {
  ...localResourceImages,
  ...localSeminarImages,
};

export function resolveResourceImageUrl(image?: string): string | undefined {
  if (!image) {
    return undefined;
  }

  if (/^(https?:)?\/\//i.test(image) || image.startsWith("data:")) {
    return image;
  }

  if (image.startsWith("/src/assets/")) {
    const fileName = image.split("/").pop();
    if (!fileName) {
      return undefined;
    }

    const matchedEntry = Object.entries(localSrcAssetImages).find(([path]) =>
      path.endsWith(`/${fileName}`),
    );

    return matchedEntry?.[1];
  }

  const baseUrl = import.meta.env.BASE_URL;
  const normalizedPath = image.startsWith("/") ? image.slice(1) : image;
  return `${baseUrl}${normalizedPath}`;
}