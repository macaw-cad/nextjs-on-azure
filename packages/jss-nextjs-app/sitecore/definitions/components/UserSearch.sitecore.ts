import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest: Manifest): void {
  manifest.addComponent({
    name: "UserSearch",
    icon: SitecoreIcon.DocumentTag,
    fields: [{ name: "searchTerm", type: CommonFieldTypes.SingleLineText }],
  });
}
