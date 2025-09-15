import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../.env.local/firebase";
import { AnimatePresence } from "framer-motion";
import { Mail, Github } from "lucide-react";
import Alert from "./Alert";


const Contact = () => {

    const [data, setData] = useState({
        yourName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [alert, setAlert] = useState({
        isAlert: false,
        message: "",
        status: null,
    });

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }

    const sendMessage = async () => {
        if (data.email === "" || data.email === null) {
            setAlert({
                isAlert: true,
                message: "Required fields cannot be empty",
                status: "warning",
            });

            setInterval(() => {
                setAlert({
                    isAlert: false,
                    message: "",
                    status: null,
                });
            }, 4000);
        } else {
            await addDoc(collection(db, "messages"), { ...data })
                .then(() => {
                    setData({ firstName: "", lastName: "", email: "", message: "" });
                    setAlert({
                        isAlert: true,
                        message: "Thank you for contacting me",
                        status: "success",
                    });

                    setInterval(() => {
                        setAlert({
                            isAlert: false,
                            message: "",
                            status: null,
                        });
                    }, 4000);
                })
                .catch(error => {
                    setAlert({
                        isAlert: true,
                        message: `Error : ${error.message}`,
                        status: "danger",
                    });

                    setInterval(() => {
                        setAlert({
                            isAlert: false,
                            message: "",
                            status: null,
                        });
                    }, 4000);
                })
        }
    }

    return (
        <section id="inquiry" className="py-20 bg-gradient-to-b from-purple-950/60 to-purple-900/60">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Start an <span className="text-[#F7E71C]">inquiry</span>.</h2>
                        <p className="mt-2 text-zinc-300/80 max-w-prose">Tell us about your use case and timeline. We’ll follow up with a tailored plan and sandbox access.</p>


                        {/* <div className="mt-6 rounded-3xl border border-purple-400/20 bg-purple-900/40 p-6">
                            <div className="flex items-center gap-3">
                                <div className="grid place-items-center w-10 h-10 rounded-xl bg-[#F7E71C] text-purple-900"><Mail className="w-5 h-5" /></div>
                                <div>
                                    <p className="font-bold">Prefer email?</p>
                                    <p className="text-xs text-zinc-300/70">hello@bananastand.systems</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="mt-4 text-sm text-zinc-400 flex items-center gap-2">
                        <Github className="w-4 h-4" /> Starter templates available upon request
                    </div>
                </div>
                <AnimatePresence>
                    {alert.isAlert && (
                        <Alert status={alert.status} message={alert.message} />
                    )}
                </AnimatePresence>
                <div className="rounded-3xl border border-[#F7E71C]/30 bg-purple-950/50 p-6 shadow-xl">
                    <div className="grid gap-4">
                        <div>
                            <label htmlFor="name" className="text-sm text-zinc-200/90">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={data.yourName}
                                onChange={handleTextChange}
                                placeholder="Name"
                                className="mt-1 w-full rounded-xl border border-purple-400/30 bg-purple-900/40 px-4 py-3 outline-none focus:ring-4 ring-[#F7E71C]/30"
                            />
                            {/* <input
                                type="text"
                                name="lastName"
                                value={data.lastName}
                                onChange={handleTextChange}
                                placeholder="Last Name"
                                className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
                            /> */}
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm text-zinc-200/90">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleTextChange}
                                placeholder="Your Email"
                                className="mt-1 w-full rounded-xl border border-purple-400/30 bg-purple-900/40 px-4 py-3 outline-none focus:ring-4 ring-[#F7E71C]/30"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm text-zinc-200/90">Message</label>
                            <textarea
                                name="message"
                                value={data.message}
                                onChange={handleTextChange}
                                id=""
                                cols="0"
                                rows="10"
                                className="mt-1 w-full rounded-xl border border-purple-400/30 bg-purple-900/40 px-4 py-3 outline-none focus:ring-4 ring-[#F7E71C]/30"
                                placeholder="Message here..."
                            ></textarea>
                        </div>

                        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7E71C] px-5 py-3 font-semibold text-purple-900 hover:shadow-lg disabled:opacity-60"
                            onClick={sendMessage}>
                            Send
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
