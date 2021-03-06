import { Route } from "../types/route";
import Home from "../components/pages/Home";
import Chunk from "../components/pages/Chunk";
import Concat from "../components/pages/Concat";
import Difference from "../components/pages/Difference";
import Compact from "../components/pages/Compact";
import Drop from "../components/pages/Drop";
import DropRight from "../components/pages/DropRight";
import Remove from "../components/pages/Remove";
import Uniq from "../components/pages/Uniq";
import ForIn from "../components/pages/ForIn";
import ForInRight from "../components/pages/ForInRight";
import Has from "../components/pages/Has";

const paths: Route[] = [
  {
    label: "Home",
    path: "/",
    component: Home,
  },
  {
    label: "Chunk",
    path: "/chunk",
    component: Chunk,
  },
  {
    label: "Concat",
    path: "/concat",
    component: Concat,
  },
  {
    label: "Difference",
    path: "/difference",
    component: Difference,
  },
  {
    label: "Compact",
    path: "/compact",
    component: Compact,
  },
  {
    label: "Drop",
    path: "/drop",
    component: Drop,
  },
  {
    label: "Drop Right",
    path: "/drop-right",
    component: DropRight,
  },
  {
    label: "Remove",
    path: "/remove",
    component: Remove,
  },
  {
    label: "Uniq",
    path: "/uniq",
    component: Uniq,
  },
  {
    label: "For In",
    path: "/forin",
    component: ForIn,
  },
  {
    label: "For in Right",
    path: "/forin-right",
    component: ForInRight,
  },
  {
    label: "Has",
    path: "/has",
    component: Has,
  },
];

export default paths;
