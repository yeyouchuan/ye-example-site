---
title: New Beginnings
slug: new-beginnings
date: January 10, 2023
author: Noah Buscher
location: Palm Springs, CA
type: Post
excerpt: I finally stopped procrasinating and actually make a new (imperfect) website for myself.
---

After having effectively not touched my site in over two years, I knew I needed to put in the work to design and develop something. Unfortunately, that is much easier said than done. I've gone through at least four (and likely more) revisions of designs before settling on what you're using now.

It's not perfect - far from it. I'm not about to break into a preachy "just ship it" rant, however it was out of my comfort zone to publish this without getting all the bells and whistles figured out. Ironically enough, that longing to figure out what I wanted out of a site, along with going back and forth on what it should look like, served as inspiration. I attempted to make the site extremely flexible, with a modular feed/blocks concept that's a cross between a blog, portfolio site, and social platform. As I attain new interests, I can create new post styles that will incorporate nicely into the site's context, creating what I hope one day will be a collage of me.

![Photo preview on the new site](/media/new-beginnings/website.jpeg)

From a technical perspective, the site is rather uninteresting. It's a React site built on Next.js and styled with Tailwind CSS. For dynamic content, I opted to not go with a CMS and instead just a `/posts` directory of markdown files. I am able to attach metadata to posts using `gray-matter`'s YAML-style header and serve the pages/posts with SSG. If you're curious, the site is set in Monument Grotesk by [Dinamo](https://abcdinamo.com/typefaces/monument-grotesk).

I hope you enjoy looking around the site, and I'm excited to see what 2023 has in store.
