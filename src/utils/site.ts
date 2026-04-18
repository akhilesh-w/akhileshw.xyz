export const siteConfig = {
  name: "Akhilesh Waghmare",
  url: "https://akhileshw.xyz",
  description: "Front-end Developer",
} as const;

export type SearchIndexItem = {
  title: string;
  href: string;
  type: "page" | "post";
  description?: string;
  date?: string;
};

export const staticSearchItems: SearchIndexItem[] = [
  { title: "Home", href: "/", type: "page", description: "Homepage" },
  { title: "About", href: "/about", type: "page", description: "About Akhilesh" },
  { title: "Now", href: "/now", type: "page", description: "What Akhilesh is focused on right now" },
  { title: "Blog", href: "/blog", type: "page", description: "Long-form writing and notes" },
  { title: "Logs", href: "/logs", type: "page", description: "Books, bookmarks, articles, and videos" },
  { title: "Uses", href: "/uses", type: "page", description: "Hardware and software Akhilesh uses" },
  { title: "Guestbook", href: "/guestbook", type: "page", description: "Leave a message" },
  { title: "Bookshelf", href: "/bookshelf", type: "page", description: "Books Akhilesh has read" },
  { title: "Donate", href: "/donate", type: "page", description: "Crypto donation page" },
];

export function isExternalHref(href: string) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href);
}
