interface Props {
  title: string;
}

export function PageTitle(prop: Props) {
  return (
    <h2 className='pb-12 font-title font-black text-5xl italic drop-shadow-white'>
      {prop.title}
    </h2>
  );
}
