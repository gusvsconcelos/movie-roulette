export interface Props {
  styles: string;
}

export default function Title(props: Props) {
  return <h1 className={props.styles}>Movie Sorter</h1>;
}
