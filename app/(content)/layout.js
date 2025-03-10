import MainHeader from "@/components/main-header";
import "../globals.css";

// export const metadata = {
//   title: "Next.js Page Routing & Rendering",
//   description: "Learn how to route to different pages.",
// };

export const metadata = {
  title: "News App",
  description: "News App created with Next JS routing",
};

export default function ContentLayout({ children }) {
  return (
    <div id="page">
      <MainHeader />
      {children}
    </div>
  );
}
