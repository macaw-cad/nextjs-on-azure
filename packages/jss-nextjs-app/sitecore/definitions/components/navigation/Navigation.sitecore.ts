// eslint-disable-next-line no-unused-vars
import { SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";
import fs from "fs";

const query = fs.readFileSync(
  "sitecore/definitions/components/navigation/navigation.sitecore.graphql",
  "utf8"
);

export default function (manifest: Manifest): void {
  manifest.addComponent({
    name: "Navigation",
    icon: SitecoreIcon.DocumentTag,
    graphQLQuery: query,
  });
}
