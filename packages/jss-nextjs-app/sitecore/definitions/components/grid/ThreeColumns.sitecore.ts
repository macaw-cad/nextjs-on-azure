import { SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

/**
 * Adds the ThreeColumns component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest: Manifest): void {
  manifest.addComponent({
    name: "ThreeColumns",
    icon: SitecoreIcon.DocumentTag,
    placeholders: ["col1", "col2", "col3"],
  });
}
