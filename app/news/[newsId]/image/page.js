import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

export default function ImagePage({ params }) {
  const newsImageSlug = params.newsId;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsImageSlug
  );

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
