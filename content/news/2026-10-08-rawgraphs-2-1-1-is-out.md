---
title: "RAWGraphs 2.1.1 is out"
date: 2026-10-08T00:00:00
---

We finally had the time to meet again and we decided to fix some old bugs and improve some elements of our tool. Here are the main updates of RAWGraph 2.1.1.

## Better axes management

We reorganised the way RAWGraphs draws x and y axes. All charts now share the same helpers, which also gets rid of duplicated ticks. On top of that, the **Axes** panel has three new options for both x and y: you can let RAWGraphs auto-place the ticks, set a maximum number of ticks, or show the min and max values at the ends of the axis.

These controls are available in the line chart, streamgraph, bump chart, horizon graph, contour plot, hexagonal binning, voronoi diagram, convex hull, bubble chart, beeswarm, gantt chart and violin plot. While we were at it, we also fixed how ticks are handled on band and ordinal axes.

## Gantt and beeswarm

In the Gantt chart you can now choose whether the x axis sits at the top or at the bottom. In the beeswarm, a new option lets dots move only along the y axis.

## Try it out

RAWGraphs 2.1.1 is already live at [app.rawgraphs.io](https://app.rawgraphs.io). As always, if you find a bug or have an idea for a new feature, let us know on GitHub. Thanks to everyone who keeps using RAWGraphs and sending us feedback!

---

## Why Should you Consider Sponsoring RAWGraphs?

This release has been made possible by the past and current sponsors of the project.  In order to keep RAWGraphs open, free, updated, and live, join us in this journey by visiting our [GitHub sponsor page](/news/2023-09-18-become-a-sponsor-of-rawgraphs) to learn more about sponsorship levels and perks. 

Whether you're an individual who has benefited from RAWGraphs or an organization that values open-source tools, your support matters. If you want to hire us or request ad-hoc in-house training, check our “[support us](https://www.rawgraphs.io/support-us)” page. Together, we can ensure that RAWGraphs continues to flourish, innovate, and empower individuals and organizations to visualize data creatively and effectively.
