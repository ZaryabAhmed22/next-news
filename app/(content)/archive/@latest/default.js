import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

// This file is added to support any route that is not present in the @latest folder but in the @archive folder, in this case that route is [year]. With this file we no longer need page.js file if the contents of default.js and page.js are same but I'm leaving it for the record
export default function LatestPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
