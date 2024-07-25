export function Button({ text }: { text: string }) {
  return (
    <button className='m-2 py-1 px-5 border-2 border-black bg-green-200 font-ui font-semibold text-xl hover:shadow-button active:bg-green-300'>
      {text}
    </button>
  );
}
