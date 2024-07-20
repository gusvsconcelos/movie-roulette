export default function ToggleSwitch() {
  return (
    <label className='absolute right-20 inline-flex items-center cursor-pointer'>
      <input type='checkbox' value='' className='sr-only peer' />
      <div className="w-11 h-6 rounded-full border-2 border-black bg-sky-100  peer-checked:bg-sky-950 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:w-4 after:h-4 after:bg-yellow-300 peer-checked:after:bg-slate-300 after:rounded-full after:border-2 after:border-black after:transition-all peer-checked:after:translate-x-5 "></div>
    </label>
  );
}
