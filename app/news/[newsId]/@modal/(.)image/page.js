"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

// this is an intercepted route. The (.)image means that it will intercep the image route and it is in the route level. The next js will show the intercepted file when I visit this page navigating through the app and if I refresh the page or go to the route directly it will show the normal page.js file on the /image route
export default function InterceptedImagePage({ params }) {
  const router = useRouter();
  const newsImageSlug = params.newsId;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsImageSlug
  );

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back}></div>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
