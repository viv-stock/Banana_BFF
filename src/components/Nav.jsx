import { Bot, Mail } from "lucide-react";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-purple-900/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <a href="#home" className="group inline-flex items-center gap-2">
                        <div className="relative">
                            <span className="absolute inset-0 blur-md bg-[#F7E71C]/60 rounded-full" aria-hidden></span>
                            <div className="relative grid place-items-center w-9 h-9 rounded-xl bg-[#F7E71C] text-purple-900 shadow-md">
                                <Bot className="w-5 h-5" />
                            </div>
                        </div>
                        <span className="font-black tracking-tight text-lg sm:text-xl">Banana Stand Systems</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a className="hover:text-[#F7E71C] transition-colors" href="#bots">Bots</a>
                        <a className="hover:text-[#F7E71C] transition-colors" href="#why">Why Us</a>
                        <a className="hover:text-[#F7E71C] transition-colors" href="#inquiry">Inquiry</a>
                        <a className="inline-flex items-center gap-2 rounded-full border border-[#F7E71C]/30 px-4 py-2 hover:bg-[#F7E71C] hover:text-purple-900 transition-colors" href="#inquiry">
                            <Mail className="w-4 h-4" /> Contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
