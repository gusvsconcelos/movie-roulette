export interface Props {
  styles: string;
}

export default function Title(props: Props) {
  return (
    <h1 className={`mb-1 font-title font-black italic ${props.styles}`}>
      Movie Sorter
    </h1>
  );
}
