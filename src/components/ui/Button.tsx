export default function Button({ text }: { text: string }) {
  return (
    <button className='m-2 py-1 px-5 rounded-md border-2 border-black bg-yellow-300 font-ui font-medium text-2xl hover:drop-shadow-brute active:bg-yellow-400'>
      {text}
    </button>
  );
}
