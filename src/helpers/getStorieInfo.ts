import getExtension from "./getExtension";

const supportedVideoFormat = ["mp4", "webm", "ogv"];

export function getStorieInfo(url: string): { url: string, type: string } {
  if(supportedVideoFormat.includes(getExtension(url).toLowerCase())) {
    return {
      url: url,
      type: "video"
    }
  }

  return {
    url: url,
    type: "image"
  }
}