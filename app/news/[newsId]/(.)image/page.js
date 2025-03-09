import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

// this is an intercepted route. The (.)image means that it will intercep the image route and it is in the same folder. The next js will show the intercepted file when I visit this page navigating through the app and if I refresh the page or go to the route directly it will show the normal page.js file on the /image route
export default function InterceptedImagePage({ params }) {
  const newsImageSlug = params.newsId;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsImageSlug
  );

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <h2>Intercepted!!</h2>
      <div className="modal-backdrop"></div>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
