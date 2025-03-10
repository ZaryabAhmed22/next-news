import React from "react";

export default function NewsDetailsLayout({ children, modal }) {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
}
