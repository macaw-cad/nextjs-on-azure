// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Faq component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest: Manifest): void {
  manifest.addComponent({
    name: 'Faq',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'question', type: CommonFieldTypes.SingleLineText },
      { name: 'answer', type: CommonFieldTypes.RichText }
    ]
  });
}
