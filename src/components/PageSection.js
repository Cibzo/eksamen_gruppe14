import Btn from "./Btn";
import { randIndex } from "./Functions";
import ProductCard from "./ProductCard";
import Title from "./Title";

export default function PageSection({
  libaryName,
  enterBtn,
  games,
  antall,
  show,
}) {
  return (
    <>
      <section className={enterBtn}>
        <Title text={libaryName} />
        <Btn name={enterBtn} />
        {randIndex
          .map((randIndex) => (
            <ul key={games[randIndex].id}>
              <ProductCard
                title={games[randIndex].title}
                generes={games[randIndex].genres}
                bilde={games[randIndex].img}
              />
              <Btn
                atr={games[randIndex].id}
                link={games[randIndex].link}
                name={"Buy"}
                hide={show}
              />
            </ul>
          ))
          .slice(0, antall)}
      </section>
    </>
  );
}
