import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
