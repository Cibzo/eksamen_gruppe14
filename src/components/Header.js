import { Link } from "react-router-dom";
import Image from "./Image";
import Nav from "./Nav";

export default function Header({ logo, nav }) {
  return (
    <>
      <header>
        <Link to="/">
          <Image bilde={logo} imgCls={"imgHead"} />
        </Link>
        <Nav page_title={nav} />
      </header>
    </>
  );
}
