import React from "react";
import { motion } from "framer-motion";
import { Zap, Send } from "lucide-react";

const About = () => {
    return (
        <section id="home" className="relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#F7E71C]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#F7E71C]/30 bg-purple-900/40 px-3 py-1 text-xs text-zinc-200">
                            <Zap className="w-3.5 h-3.5 text-[#F7E71C]" /> Automations that pay for themselves
                        </div>
                        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                            Build, deploy, and scale <span className="text-[#F7E71C]">AI bots</span> without the guesswork.
                        </h1>
                        <p className="mt-4 text-zinc-200/80 max-w-prose">
                            Banana Stand Systems offers production-ready bots for trading, customer support, and operations—designed with safety, observability, and delightful UX.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#bots" className="group inline-flex items-center gap-2 rounded-xl bg-[#F7E71C] px-5 py-3 text-purple-900 font-semibold shadow hover:shadow-lg transition-shadow">
                                Explore Bots
                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a href="#inquiry" className="inline-flex items-center gap-2 rounded-xl border border-[#F7E71C]/40 px-5 py-3 font-semibold hover:bg-[#F7E71C]/10">
                                Start an Inquiry
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    );
};
export default About;
