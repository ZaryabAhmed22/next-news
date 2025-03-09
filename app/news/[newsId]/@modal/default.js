import React from "react";

// This file is added to tell Next Js to not render anything for the parallel route @modal if we are on the route /news/[newsId]. The @modal/(.)image will only be shown if intercepted
export default function ModalDefaultPage() {
  return null;
}
