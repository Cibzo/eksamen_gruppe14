import Image from "./Image";
import Nav from "./Nav";

export default function Header({ logo, nav }) {
  return (
    <>
      <header>
        <Image bilde={logo} />
        <Nav page_title={nav} />
      </header>
    </>
  );
}
