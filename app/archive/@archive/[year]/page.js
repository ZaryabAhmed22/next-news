import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";
import React from "react";

export default function FilteredNewsPage({ params }) {
  const filteredNews = getNewsForYear(params.year);
  return <NewsList news={filteredNews} />;
}
