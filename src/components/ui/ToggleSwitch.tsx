export function ToggleSwitch() {
  return (
    <label className='absolute right-16 inline-flex items-center cursor-pointer'>
      <input type='checkbox' value='' className='sr-only peer' />
      <div className="w-11 h-6 rounded-full border-2 border-black bg-sky-50  peer-checked:bg-sky-950 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:w-4 after:h-4 after:bg-yellow-300 peer-checked:after:bg-slate-300 after:rounded-full after:border-2 after:border-black after:transition-all peer-checked:after:translate-x-5 "></div>
      <span className='invisible absolute z-10 w-24 top-full left-0 ml-[-60%] mt-2 p-2 bg-black text-white-alt text-center font-ui antialiased peer-hover:visible'>
        Dark Mode
      </span>
    </label>
  );
}
