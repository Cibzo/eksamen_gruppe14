import Image from "./Image";
import Titles from "./Titles";

export default function ProductDesc({ pic, name, sjanger, clstit}) {
  return (
    <>
      
      <Image bilde={pic} imgCls={"imgGame"} />
      <describe className={clstit}>
      <Titles clsTit={"game"} titleTag={"h3"} titleName={name} />
      <span className={clstit}>{sjanger}</span>
      </describe>
    </>
  );
}
