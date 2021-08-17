import { getFileAsset } from "@sanity/asset-utils";
import sanityConfig from "../cms/sanity.json"

export function videoAssetFor(source) {
  return getFileAsset(source, sanityConfig.api);
}
