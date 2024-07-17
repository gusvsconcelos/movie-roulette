export default function Button({ text }: { text: string }) {
  return (
    <button className='m-2 py-1 px-3 border-solid border-2 rounded-md border-black '>
      {text}
    </button>
  );
}
