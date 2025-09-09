import { motion } from "framer-motion";
import { LineChart } from "lucide-react";

const Card = () => {
    return (
        <div id="home" className="relative overflow-hidden">
            < motion.div initial={{ opacity: 0, y: 20 }
            } animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                <div className="relative rounded-3xl p-1 bg-gradient-to-br from-[#F7E71C] via-[#F7E71C]/40 to-violet-500/40 shadow-2xl">
                    <div className="rounded-[22px] bg-purple-950/70 backdrop-blur p-6">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 grid place-items-center rounded-xl bg-[#F7E71C] text-purple-900"><LineChart className="w-5 h-5" /></div>
                                <div>
                                    <p className="font-bold">Trading Bot</p>
                                    <p className="text-xs text-zinc-300/70">Banana v2.1 • Risk-aware</p>
                                </div>
                            </div>
                            <span className="text-xs rounded-full bg-violet-500/20 border border-violet-400/30 px-2 py-1">Live</span>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                            {[
                                { k: "Sharpe (YTD)", v: "1.42" },
                                { k: "Max DD", v: "-6.1%" },
                                { k: "Win Rate", v: "57%" },
                                { k: "Avg Hold", v: "4.2h" },
                            ].map((m) => (
                                <div key={m.k} className="rounded-xl bg-purple-900/40 p-3 border border-purple-400/20">
                                    <p className="text-zinc-300/70 text-xs">{m.k}</p>
                                    <p className="font-bold">{m.v}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-xs text-zinc-300/70">Sim data for illustration</div>
                            <button className="rounded-lg bg-[#F7E71C] text-purple-900 text-sm font-semibold px-4 py-2">View Strategy</button>
                        </div>
                    </div>
                </div>
            </motion.div >
        </div >
    );
};
export default Card;
