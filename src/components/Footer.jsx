const Footer = () => {
    return (
        <footer className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
                    <p>© {new Date().getFullYear()} Banana Stand Systems. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-[#F7E71C]">Privacy</a>
                        <a href="#" className="hover:text-[#F7E71C]">Terms</a>
                        <a href="#inquiry" className="hover:text-[#F7E71C]">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )

};
export default Footer;
