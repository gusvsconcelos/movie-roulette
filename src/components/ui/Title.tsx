export default function Title({ styles }: { styles: string }) {
  return (
    <h1 className={`mb-1 font-title font-black ${styles}`}>
      <a href='#'>MOVIE SORTER</a>
    </h1>
  );
}
