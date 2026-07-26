import { ThemeToggle } from "./common/ThemeToggle"
import { navItems } from "./TabNavigation";
import {
  Menu,
  X,
} from "lucide-react";
import { useState } from "react"
import { usePageTransition } from "../components/animations/TransitionProvider"



const MobileNavMenu = () => {
    const { navigate } = usePageTransition()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className="fixed top-6 right-6 z-50 flex items-center gap-3">

                <ThemeToggle />

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-xl transition-all duration-300 hover:scale-110 lg:hidden"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 bg-background/95 backdrop-blur-sm transition-all duration-300 lg:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
            >
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            setIsMenuOpen(false)
                            navigate(item.link)
                        }}
                        className="group flex items-center gap-4 rounded-full px-8 py-4 transition-colors duration-300 hover:bg-accent"
                    >
                        <item.icon size={22} />
                        <span className="text-lg font-bold uppercase tracking-widest">
                            {item.title}
                        </span>
                    </button>
                ))}
            </div>
        </>
    )
}

export default MobileNavMenu