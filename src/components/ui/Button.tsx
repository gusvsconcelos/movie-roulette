export function Button({ text }: { text: string }) {
  return (
    <button className='m-2 py-2 px-5 border-2 border-black bg-yellow-300 font-ui font-medium text-xl hover:drop-shadow-brute active:bg-yellow-400'>
      {text}
    </button>
  );
}
