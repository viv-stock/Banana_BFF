import { LineChart, MessageSquare, Shield, Send } from "lucide-react";
import { motion } from "framer-motion";

const bots = [
    {
        name: "Trading Bot",
        icon: <LineChart className="w-6 h-6" aria-hidden />,
        tagline: "Paper & live trading with risk controls",
        features: ["Multi-exchange adapters", "Backtesting suite", "Risk & SL/TP"],
        cta: "Request Demo",
    },
    {
        name: "Support Bot",
        icon: <MessageSquare className="w-6 h-6" aria-hidden />,
        tagline: "24/7 customer chat with human handoff",
        features: ["RAG knowledge base", "Multilingual", "Analytics dashboard"],
        cta: "See Capabilities",
    },
    {
        name: "Ops Guard",
        icon: <Shield className="w-6 h-6" aria-hidden />,
        tagline: "Automation for alerts & runbooks",
        features: ["On-call routing", "Health checks", "Auto-remediation"],
        cta: "Explore",
    },
];

const Bots = () => {
    return (
        <section id="bots" className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Pick your <span className="text-[#F7E71C]">bot</span>.</h2>
                        <p className="mt-2 text-zinc-300/80 max-w-prose">Production templates with guardrails, logs, and dashboards. Customize models, prompts, and integrations.</p>
                    </div>
                    <a href="#inquiry" className="hidden sm:inline-flex items-center gap-2 text-sm rounded-full border border-[#F7E71C]/30 px-4 py-2 hover:bg-[#F7E71C]/10">Need something bespoke?</a>
                </div>


                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bots.map((b) => (
                        <motion.article key={b.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="group rounded-3xl border border-purple-400/20 bg-purple-900/40 p-6 hover:border-[#F7E71C]/50 hover:bg-purple-900/60 transition-colors shadow">
                            <div className="flex items-center gap-3">
                                <div className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#F7E71C] to-amber-300 text-purple-900 shadow">{b.icon}</div>
                                <h3 className="text-xl font-bold tracking-tight">{b.name}</h3>
                            </div>
                            <p className="mt-3 text-sm text-zinc-300/80">{b.tagline}</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                {b.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F7E71C]" aria-hidden></span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-5">
                                <button className="inline-flex items-center gap-2 rounded-xl bg-[#F7E71C] px-4 py-2 text-sm font-semibold text-purple-900 group-hover:shadow-lg">{b.cta} <Send className="w-4 h-4" /></button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Bots;
