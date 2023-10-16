export function Footer () {
  return (
    <footer className="bg-black text-white text-sm flex items-center justify-between px-5 py-3">
      <div>@CopyRight</div>
      <ul className="flex items-center sm:gap-1 md:gap-2 lg:gap-3 cursor-pointer">
        <li>About</li>
        <li>Help</li>
        <li>Press</li>
      </ul>
    </footer>
  )
}