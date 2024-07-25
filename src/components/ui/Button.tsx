export function Button({ text }: { text: string }) {
  return (
    <button className='m-2 py-1 px-5 border-2 border-black bg-green-200 font-ui font-medium text-xl hover:shadow-brute active:bg-green-300'>
      {text}
    </button>
  );
}
