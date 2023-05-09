export default function Image({ id, bilde, imgCls }) {
  return <img id={id} alt={bilde} src={bilde} className={imgCls} />;
}
