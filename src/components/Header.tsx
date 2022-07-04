import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-5 px-8 flex items-between justify-between bg-gray-500">
      <div>
        <h3 className="font-semibold">FORMULA 1 ROLEX GROSSER PREIS VON ÖSTERREICH 2022</h3>
        <p>AUSTRIA</p>
      </div>
      <Logo/>
    </header>
  )
}