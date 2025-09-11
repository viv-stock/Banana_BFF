import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../.env.local/firebase";
import { AnimatePresence } from "framer-motion";

const Contact = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    // const [alert, setAlert] = useState({
    //     isAlert: false,
    //     message: "",
    //     status: null,
    // });

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
        <section id="contact" className="py-20 bg-gradient-to-b from-purple-950/60 to-purple-900/60">
            <AnimatePresence>
                {alert.isAlert && (
                    <Alert status={alert.status} message={alert.message} />
                )}
            </AnimatePresence>
            <div className="w-full flex flex-col items-center justify-start gap-4">
                <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            value={data.firstName}
                            onChange={handleTextChange}
                            placeholder="First Name"
                            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={data.lastName}
                            onChange={handleTextChange}
                            placeholder="Last Name"
                            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleTextChange}
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
                    />
                    <textarea
                        name="message"
                        value={data.message}
                        onChange={handleTextChange}
                        id=""
                        cols="0"
                        rows="10"
                        className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
                        placeholder="Message here..."
                    ></textarea>
                    <div className="w-full flex items-center justify-center lg:justify-end">
                        <button className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:-primary hover:text-primary"
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
