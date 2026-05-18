export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!basePath || !path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}

export function thumbnailPath(path: string) {
  if (!path.startsWith("/assets/")) {
    return path;
  }

  const fileName = path.split("/").pop();

  if (!fileName || !/\.(png|jpe?g)$/i.test(fileName)) {
    return path;
  }

  return `/assets/thumbs/${fileName.replace(/\.(png|jpe?g)$/i, ".jpg")}`;
}
