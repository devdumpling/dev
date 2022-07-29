# Dev's Journal

Hi, I'm Dev, and if you're reading this, you've stumbled across my "journal". It's really a blog, but I'm not sure if it's a good one. So it's a journal.

I built it to be:

- a Place for experimenting with new technologies
- a place for writing down my thoughts

## Posts

- [Fire Emblem's Pacing Problem]()
- [Stop Trying to Monetize Everything]()
- [The Legend of Chrono Cross]()
- [Remembering Maplestory]()
- [Valve's Language Filter is a Cheap Bandage for Toxicity]()
- [What I Learned in 6000 Hours of Dota 2]()
- [How The Next Give Up Narrative Failed Me]()
- [Nostalgia Review Final Fantasy X]()
- [A Letter to my past vegan self]()

## Implementation

### Core

The core project is a NextJS app, which I built with [TypeScript](https://www.typescriptlang.org/).

I knew I wanted to write all the posts with Markdown and frontmatter, so I'm using `next-mdx-remote` and `graymatter` to handle that. 
Originally I tried `@next/mdx` but ran into some issues when I wanted to use frontmatter. There's probably a solve, but I'm familiar with `next-mdx-remote`, 
so I'm sticking with that for now. 

The initial load of posts were pulled over from my retired Medium blog using the Medium posts export and all the assets. There's some scrubbing and formatting that has to be done to get them to pristine markdown, for which I use a tool I forked and slightly changed called [Medium-2-Md](https://github.com/devdumpling/medium-2-md).

### Data

I'm not using a CMS, instead all of the posts are stored in a folder called `posts`. Maybe I'll swap them out later, but at the moment this is fine.

The entire site can be rendered with SSG (either fully static or HTML + JSON via `getStaticProps`), so pages should load virtually instantly. 

### API

There is a single api route `/api/latest` that handles getting the latest post for rendering the homepage. 

### Styles and Design System

Styling and view components are all [mantine](https://mantine.dev/guides/next/). In the past, I've used Chakra, but I wanted to change it up.

### Deployment

Free tier, [Vercel](https://vercel.com/).
