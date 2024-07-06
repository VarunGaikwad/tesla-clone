import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import tesla from "../assets/tesla.svg";
import { AiOutlineGlobal } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

export default function Navbar() {
  const liClass = "font-medium text-sm cursor-pointer",
    iconClass = "size-6";
  return (
    <nav className="absolute top-0 w-full flex items-center justify-between px-10">
      <img src={tesla} className="w-32 h-16" />
      <ul className="flex gap-4">
        <li className={liClass}>Vehicle</li>
        <li className={liClass}>Energy</li>
        <li className={liClass}>Charging</li>
        <li className={liClass}>Discover</li>
        <li className={liClass}>Shop</li>
      </ul>
      <div className="flex gap-4">
        <HiOutlineQuestionMarkCircle className={iconClass} />
        <AiOutlineGlobal className={iconClass} />
        <RxAvatar className={iconClass} />
      </div>
    </nav>
  );
}
