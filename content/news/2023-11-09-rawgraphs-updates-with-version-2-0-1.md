---
title: 'RAWGraphs 2.0.1 public release'
date: 2023-11-09T00:00:00
---

With the release of RawGraphs 2.0.1, a world of new possibilities opened up for users. In this blog post, we'll take a closer look at the latest features, improvements, and the addition of a new chart type.

## New Features

### Custom Charts: Add your own visual model

![](/uploads/news/2023-11-09-rawgraphs-updates-with-version-2-0-1-1.gif)

One of the additions we are most proud of in RawGraphs 2.0.1 is the support for custom charts. Now, you can load your own custom charts locally without the need to download, compile, and host RAWGraphs. This feature empowers users to bring their unique visualization ideas to life and to share them with others. To learn more about how to create custom charts (and test a couple already produced) check out [this blog post](/news/2023-07-07-introducing-a-new-feature-in-rgraphs-on-the-fly-custom-chart).

All the custom visual models that will be shared with us will be added to this brand new section of our website: [https://www.rawgraphs.io/custom-charts](https://www.rawgraphs.io/custom-charts)

If you want to develop a custom visual model and share it with others, please let us know by sending an email to hello@rawgraphs.io. We would be more than happy to provide support in the development of new visual models and to share them with the community.

### New charts: Chord Diagram

![](/uploads/news/2023-11-09-rawgraphs-updates-with-version-2-0-1-2.avif)

RawGraphs 2.0.1 introduces the Chord Diagram among the basic visual models. Chord Diagram allows you to represent relationships in an elegant and intuitive manner. This addition is thanks to the collaborative efforts of the open-source community, specifically by @blindguardian50, @steve1711, @TheAlmightySpaceWarrior, @wizardry8, and @kandrews99. The Chord Diagram is a powerful addition to the RawGraphs repertoire, offering new ways to visualize connections and dependencies in your data.

## Changes in RAWGraphs 2.0.1

The new version also includes some notable changes:

- Update rawgraphs-charts to 1.0.1: This update ensures that you have access to the latest chart options and functionalities.
- Updated rawgraphs-core dependencies: Keeping the core dependencies up to date is crucial for maintaining the stability and security of RawGraphs.
- Moved to SASS instead of node-sass: This change in the styling process enhances the development and design flexibility within RawGraphs.

### New Features in Existing Charts

The RawGraphs team has not only introduced new chart types but has also enhanced existing ones. Here are some of the highlights:

- **Barchart:** Padding in horizontal bar charts now works as expected.
- **Beeswarm Plot:** You'll receive an error message if you attempt to use negative values for size.
- **Bump Chart:** Labels now display correctly when using padding.
- **Calendar heatmap:** added tutorial and data example
- **Circle Packing:** An error message will appear if you try to use negative values for size.
- **Circular Dendrogram:** An error message now prevents the use of negative values for size.
- **Grouped Barcharts:** Date formats have been fixed, and axis ticks appear more aesthetically when using dates.
- **Linear Dendrogram:** An error message will appear when using negative values for size.
- **Matrix Plot:** Visual options labeling has been improved.
- **Sankey Diagram:** Visual options labeling has been refined.
- **Stacked Barcharts:** Date formats have been fixed, and axis ticks have been made more polished when using dates.
- **Voronoi Treemap:** Label styles have been fixed. You can now control area fitting more precisely by adjusting the minimum weight ratio.
- **Fixed Some Typos:** Thanks to the vigilant eyes of @SaarthakMaini and @TomFevrier, various typos have been corrected to enhance the overall user experience.

---

## Why Should you Consider Sponsoring RAWGraphs?

This release has been made possible by the past and current sponsors of the project. 

In order to keep RAWGraphs open, free, updated, and live, join us in this journey by visiting our [GitHub sponsor page](/news/2023-09-18-become-a-sponsor-of-rawgraphs) to learn more about sponsorship levels and perks. 

Whether you're an individual who has benefited from RAWGraphs or an organization that values open-source tools, your support matters.

If you want to hire us or request ad-hoc in-house training, check our “[support us](https://www.rawgraphs.io/support-us)” page.

Together, we can ensure that RAWGraphs continues to flourish, innovate, and empower individuals and organizations to visualize data creatively and effectively.
