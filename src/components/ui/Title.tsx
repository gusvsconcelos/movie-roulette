export function Title({ styles }: { styles: string }) {
  return (
    <h1 className={`font-title font-black italic ${styles}`}>
      <a href='#'>MOVIE SORTER</a>
    </h1>
  );
}
