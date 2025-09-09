const Service = () => {
    return (
        <section id="why" className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-6">
                    {[{
                        title: "Safety-first",
                        desc: "Rate limits, guardrails, and audit logs built-in so you stay in control.",
                    }, {
                        title: "Observability",
                        desc: "Dashboards and tracing so you can debug prompts and flows like code.",
                    }, {
                        title: "Flexible Stack",
                        desc: "Adapters for popular LLMs, vector stores, and devops pipelines.",
                    }].map((card) => (
                        <div key={card.title} className="rounded-3xl border border-purple-400/20 bg-purple-900/40 p-6">
                            <h3 className="font-bold text-lg text-[#F7E71C]">{card.title}</h3>
                            <p className="mt-2 text-zinc-300/80 text-sm">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Service;
