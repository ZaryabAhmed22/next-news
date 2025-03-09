import React from "react";

export default function ArchiveLayout({ archive, latest }) {
  // since this layout is dealing with parallel routing, it will receive archive and layout props for the contents of @archive and @layout pages
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="arcive-latest">{latest}</section>
    </div>
  );
}
