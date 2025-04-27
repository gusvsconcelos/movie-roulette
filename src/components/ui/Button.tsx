interface ButtonProps {
  text: string
  onClick?: () => void
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="mt-4 p-3 border-[3px] border-black shadow-button bg-[#DAA192] font-title font-bold text-2xl antialiased  active:shadow-none active:bg-[#AB5139] active:text-[#F8EEEC] transition-all"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
