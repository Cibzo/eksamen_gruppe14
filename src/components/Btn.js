export default function Btn({ atr, link, name, hide, cls }) {
  return (
    <button hidden={hide} id={atr} className={cls}>
      <a hidden={hide} href={link}>
        {name}
      </a>
    </button>
  );
}
