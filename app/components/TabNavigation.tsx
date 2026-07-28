import {
  HomeIcon,
  User,
  BriefcaseBusiness,
  Mail,
  Bot
} from "lucide-react";


interface TabNavigationProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: (path: string) => void;
}


export const navItems = [
  { id: 1, link: "/", title: "Home", icon: HomeIcon },
  { id: 2, link: "/about", title: "About", icon: User },
  { id: 3, link: "/portfolio", title: "Portfolio", icon: BriefcaseBusiness },
  { id: 4, link: "/contact", title: "Contact", icon: Mail },
  { id: 5, link: "/ai", title: "ChatBot", icon: Bot },
];



const TabNavigation = ({setIsMenuOpen, navigate}:TabNavigationProps) => {
    return (
        <nav className="hidden lg:flex flex-col items-end gap-5">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => {
                        setIsMenuOpen(false)
                        navigate(item.link)
                    }}
                    className="group relative flex justify-end"
                >
                    {/* Sliding Label */}
                    <span className="absolute right-8 top-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap">
                        <span className="block translate-x-full rounded-full bg-accent px-8 py-4 pr-16 text-base font-bold uppercase tracking-widest text-foreground opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                            {item.title}
                        </span>
                    </span>

                    {/* Icon */}
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-foreground">
                        <item.icon size={24} />
                    </div>
                </button>
            ))}
        </nav>)
}

export default TabNavigation