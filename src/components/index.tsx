import { lazy } from "preact/compat";
const ReactKeys = lazy(() => import("./React-keys/ReactKeys"));
const SolidPrinciple1 = lazy(
  () => import("./Solid-Principles/SolidPrinciple1")
);
const SolidPrinciple2 = lazy(
  () => import("./Solid-Principles/SolidPrinciple2")
);
const SolidPrinciple3 = lazy(
  () => import("./Solid-Principles/SolidPrinciple3")
);
const SolidPrinciple4 = lazy(
  () => import("./Solid-Principles/SolidPrinciple4")
);
const SolidPrinciple5 = lazy(
  () => import("./Solid-Principles/SolidPrinciple5")
);
const Home = lazy(() => import("./Home"));
import Navbar from "./Navbar/Navbar";
import Loading from "./Common/Loading";
export {
  ReactKeys,
  Loading,
  SolidPrinciple1,
  Navbar,
  SolidPrinciple2,
  SolidPrinciple3,
  SolidPrinciple4,
  SolidPrinciple5,
  Home,
};
