interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="mt-4 p-3 border-[3px] border-black shadow-button bg-[#DAA192] font-title font-bold text-2xl antialiased hover:bg-[#AB5139] hover:text-[#F8EEEC] active:shadow-none transition-all duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
