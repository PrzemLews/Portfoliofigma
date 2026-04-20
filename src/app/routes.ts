import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CaseIng from "./pages/CaseIng";
import CaseStudy from "./pages/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "projects/ing", Component: CaseIng },
      { path: "projects/:slug", Component: CaseStudy },
    ],
  },
], { basename: "/UX-Portfolio" });
