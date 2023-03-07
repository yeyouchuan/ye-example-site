---
title: Create a Markdown-based Portfolio with Next.js
slug: create-markdown-portfolio-next-js
date: March 7, 2023
author: Noah Buscher
location: Palm Springs, CA
type: Post
excerpt: How to create a markdown-based portfolio site (or blog) for fun and profit with Next.js, Typescript, and Tailwind.
---

So you've set out to create a new portfolio for yourself. You start gathering inspiration from platforms like [Godly](https://godly.website) and [Minimal Gallery](https://minimal.gallery), draw some rectangles in Figma, and open your text editor. You pause. There's thousands of ways to build your website, how do you decide which to go with? You want your website to be beautiful for the users, but you also want to be able to quickly add new posts and case studies.

You decide you want to have a dynamic website (good choice!), but the dozens of CMS options weigh on you. How do you pick headless or full-stack? What if you just make a theme? So many choices.

I was faced with the same dilemma a few months ago. I finally had the motivation to create a new personal website, but wasn't sure where to start. I decided to keep things simple, I'd write it with a library I knew very well: React. That only solved half of the equation, however. When it came time to decide how to power the dynamic content on the site, I knew I wanted it to be free, easy to use, and open source. A static site powered by Next.js and markdown was the obvious choice.

[View the source on GitHub](https://github.com/noahbuscher/markdown-portfolio-tutorial).

To get started on creating your portfolio, run the following commands. I'm using [pnpm](https://pnpm.io), but feel free to use `yarn` or `npm`!

```text
pnpm dlx create-next-app@latest --typescript
```

`cd` into your new project and run the following commands to install the necessary packages and bootstrap Tailwind:

```text
pnpm install dayjs
pnpm install gray-matter react-markdown tailwindcss postcss autoprefixer -D
pnpm dlx tailwindcss init -p
```

That's a _lot_ of packages. Let's break them down...

- [gray-matter](https://www.npmjs.com/package/gray-matter) will be used to parse "front-matter" from our markdown files (we'll read more about this later!)
- [react-markdown](https://www.npmjs.com/package/react-markdown) is a React component to render markdown content
- `tailwindcss postcss autoprefixer` are requirements for [installing Tailwind](https://tailwindcss.com/docs/guides/nextjs) for Next.js

Phew! Let's continue our setup by finishing the Tailwind install...

Add the following to the `module.exports` in the generated `tailwind.config.js` file:

```text
content: [
	"./pages/**/*.{js,ts,jsx,tsx}",
	"./components/**/*.{js,ts,jsx,tsx}",
	"./layouts/**/*.{js,ts,jsx,tsx}",
	"./utils/**/*.{js,ts,jsx,tsx}"
],
```

To bring the styles into your project, add the following to the `styles/globals.css` file:

```text
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Great! Finally, let's create our new directories by running the following in the root:

```text
mkdir _projects
mkdir public/projects
mkdir layouts
mkdir components
mkdir utils
```

We're finally ready to start coding!

To get started, create a new layout file, `ProjectCard.tsx` in the `components` directory. This component will be displayed for each project on the home page's grid.

In `components/ProjectCard.tsx` add:

```tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  slug,
  photo,
}: {
  title: string;
  description: string;
  slug: string;
  photo: string;
}) => (
  <Link href={`/project/${slug}`}>
    <div className="flex-1 flex flex-col gap-2">
      <Image
        src={photo}
        alt={title}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-full aspect-square object-cover"
        priority
      />
      <h3 className="text-black font-bold text-xs">{title}</h3>
      <p className="text-gray-500 text-xs">{description}</p>
    </div>
  </Link>
);

export default ProjectCard;
```

Now we need a place to display all of our project cards. Create a new layout called `Grid.tsx` in the `layouts` directory.

In `layouts/Grid.tsx`, add the following:

```tsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../layouts/Project";

const Grid = ({ projects }: { projects: Project[] }) => (
  <div className="flex flex-col gap-12 max-w-screen-md mx-auto">
    <h2 className="text-black font-bold text-lg">Projects</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {projects.map(({ meta }) => (
        <ProjectCard
          key={meta.slug}
          title={meta.title}
          description={meta.description}
          slug={meta.slug}
          photo={meta.photo}
        />
      ))}
    </div>
  </div>
);

export default Grid;
```

Let's add a demo project now! In the `_projects` at your root, create a new file. The name doesn't matter, but I find it helpful to make it the same as the URL slug. In that file, add soemthing similar to the following:

```md
---
title: Example Project
slug: example-project
date: February 1, 2023
description: Just an example project!
photo: /projects/example-project.jpg
---

Something about Example Project...
```

The area between the `---`'s is called "front-matter", and it's what we brought `gray-matter` in to parse for us. Everything under the second seperator is the content of the case study. It can be any valid markdown.

Save the file and let's move on to tying things together!

In your `pages/index.tsx` file that Next.js generated, replace the content with the following. Feel free to ignore the missing `Project` type for now. We'll add that soon!

```tsx
import React from "react";
import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";
import dayjs from "dayjs";
import Grid from "../layouts/Grid";
import type { Project } from "../layouts/Project";

const PROJECTS_DIR = "_projects";

export async function getStaticProps() {
  const projectsDir = path.join(process.cwd(), PROJECTS_DIR);
  const files = await fs.readdir(projectsDir);

  const postPaths = files.filter((file) => {
    const ext = path.extname(file);
    return ext === ".md";
  });

  const projects = await Promise.all(
    postPaths.map(async (file: string) => {
      const contents = await fs.readFile(path.join(projectsDir, file), "utf8");
      const parsed = matter(contents);

      const project = {
        content: parsed.content,
        meta: parsed.data,
      };

      return project;
    })
  );

  const sortedProjects = projects.sort((a, b) =>
    dayjs(a.meta.date).isAfter(dayjs(b.meta.date)) ? -1 : 1
  );

  return {
    props: {
      projects: sortedProjects,
    },
  };
}

export default function Home({ projects }: { projects: Project[] }) {
  return (
    <main className="mx-10 sm:mx-0 my-10">
      <Grid projects={projects} />
    </main>
  );
}
```

This may look a little confusing if you've never seen `getStaticProps` before, but you can read more about it [here](https://nextjs.org/docs/basic-features/data-fetching/get-static-props). All it's doing here is getting an array of Projects that we then use `dayjs` to sort from a human-readable date in the metadata and pass that array as a prop to our `Grid`.

Now just run `pnpm dev` and you should see your project on the home page!

![Our first project rendered to the home page](/media/posts/markdown-portfolio/example-project-home.png)

Feel free to add more projects and see how it sorts by date and adds them to the grid.

Now, if you try and click on a project, you'll notice it takes you to a `404` page. Let's go ahead and add a single project layout by creating a file called `Project.tsx` in `layouts`. In `Project.tsx`, add the following:

```tsx
import React from "react";
import Image from "next/image";

export type ProjectMeta = {
  title: string;
  description: string;
  slug: string;
  date: string;
  photo: string;
};

export type Project = {
  meta: ProjectMeta;
  content: string;
};

const Project = ({
  project,
  renderedProjectContent,
}: {
  project: Project;
  renderedProjectContent: string;
}) => (
  <div className="flex flex-col gap-8 max-w-screen-md mx-auto">
    <h2 className="text-black font-bold text-lg">{project.meta.title}</h2>
    <h3 className="text-gray-500 text-md">{project.meta.description}</h3>
    <Image
      src={project.meta.photo}
      alt={project.meta.title}
      width="0"
      height="0"
      sizes="100vw"
      className="w-full h-full"
      priority
    />
    <div
      className="flex flex-col gap-8"
      dangerouslySetInnerHTML={{ __html: renderedProjectContent }}
    />
  </div>
);

export default Project;
```

⚠️ Note the `dangerouslySetInnerHTML`. It's ok to use here as the only user's content that will be rendered there is your's. Note this is not a great practice, however, and you should not do this on a platform that other's are able to post content to.

In the next step, we are going to actually be writing a util to generate that HTML. To do so, create a new file called `markdown.tsx` in the `utils` directory and add the following:

```tsx
import React from "react";
import Link from "next/link";
import * as ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";

const Img = ({ ...props }: any) => (
  <img className="rounded-md max-w-screen-lg mx-auto w-full" {...props} />
);

const Text = ({ children, node }: { children: React.ReactNode; node: any }) => {
  if (node.children[0].tagName === "img") {
    const image: any = node.children[0];
    return <Img src={image.properties.src} />;
  }

  return (
    <p className="flex-1 flex-grow w-full text-sm leading-7 max-w-screen-md mx-auto">
      {children}
    </p>
  );
};

const Anchor = ({ children, href }: any) => (
  <Link href={href} className="inline underline">
    {children}
  </Link>
);

export const renderMarkdownToHTML = (markup: string) => {
  return ReactDOMServer.renderToStaticMarkup(
    <ReactMarkdown
      components={{
        p: Text,
        img: Img,
        a: Anchor,
      }}
    >
      {markup.trim()!}
    </ReactMarkdown>
  );
};
```

This component uses `react-markdown` to enable us to define JSX component mappings for markdown elements! Feel free to get creative here and expand upon what's already in there.

So far so good! We're getting close. Now we just need to create a new file called `[slug].tsx` in `pages/project` that will pull that new component in. In `[slug.tsx]`, add the following:

```tsx
import React from "react";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import ProjectLayout from "../../layouts/Project";
import { renderMarkdownToHTML } from "../../utils/markdown";
import type { Project } from "../../layouts/Project";

const PROJECTS_DIR = "_projects";

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const projectsDir = path.join(process.cwd(), PROJECTS_DIR);
  const files = await fs.readdir(projectsDir);

  const projectPaths = files.filter((file) => {
    const ext = path.extname(file);
    return ext === ".md";
  });

  const projects = await Promise.all(
    projectPaths.map(async (file: string) => {
      const contents = await fs.readFile(path.join(projectsDir, file), "utf8");
      const parsed = matter(contents);

      return {
        content: parsed.content,
        meta: parsed.data,
      };
    })
  );

  const project = projects.find((p) => p?.meta?.slug === params.slug);

  const renderedProjectContent = renderMarkdownToHTML(project?.content!);

  return {
    props: {
      project,
      renderedProjectContent,
    },
  };
}

export async function getStaticPaths() {
  const projectsDir = path.join(process.cwd(), PROJECTS_DIR);
  const files = await fs.readdir(projectsDir);

  const projectPaths = files.filter((file) => {
    const ext = path.extname(file);
    return ext === ".md";
  });

  const projects = await Promise.all(
    projectPaths.map(async (file: string) => {
      const contents = await fs.readFile(path.join(projectsDir, file), "utf8");
      const parsed = matter(contents);

      return {
        content: parsed.content,
        meta: parsed.data,
      };
    })
  );

  const paths = projects.map((project) => ({
    params: { slug: project?.meta?.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

const Project = ({
  project,
  renderedProjectContent,
}: {
  project: Project;
  renderedProjectContent: string;
}) => (
  <main className="mx-10 sm:mx-0 my-10">
    <ProjectLayout
      project={project}
      renderedProjectContent={renderedProjectContent}
    />
  </main>
);

export default Project;
```

Similar to the `index.tsx` page, we are grabbing the list of projects again, however this time we are filtering to find the single project whose slug matches that in the dynamic page's URL. Then, we are defining a function called `getStaticPaths` that is another special Next.js feature to dynamically create the static paths for generated content (in this case, our Projects!). You can read more about that [here](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths).

Great! If you go back to the home page and click a project, you should now see it takes you to a single project page!

![A single project page](/media/posts/markdown-portfolio/example-project-single.png)

That's really all you need to get started! You now have a simple markdown-powered portfolio! You can use this as a jumping-off point to continue building out the (easy-to-update) portfolio of your dreams! Here's some ideas to get you started:

- Use [next-sitemap](https://www.npmjs.com/package/next-sitemap) to generate a sitemap to all of your dynamic routes to make it easier for search engines to index your site
- As you probably noted, some of the code we wrote isn't very [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself); maybe extract some of the repeated code into more utils
- Add more types to make your development life easier
- Add more pages to tell visitors more about yourself or how to get in touch with you

Looking foward to see what y'all create!

[View the source on GitHub](https://github.com/noahbuscher/markdown-portfolio-tutorial)
