import { useState } from 'react';
import emailjs from "@emailjs/browser";


export const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = "service_dvr16vj";
        const templateId = "template_zbqbwkj";
        const publicKey = "JFgaj1ItBc1BJV1_8";

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Jorge",
            message: message,
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setName("");
                setEmail("");
                setMessage("");
                alert("Mensaje enviado correctamente");
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert("Error al enviar el mensaje. Inténtalo de nuevo más tarde.");
            });
    }

    return (
        <section className="bg-light-mode-secondary-bg dark:bg-dark-mode-secondary-bg py-16" id="contact">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-10 px-4">
                <div className="flex-1 flex justify-center items-start md:items-start">
                    <div className="md:text-left text-center w-full">
                        <h2 className="text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-2">
                            ¡Hablemos!
                        </h2>
                        <p className="text-light-mode-text dark:text-dark-mode-text text-lg font-medium">
                            ¿Tienes una idea, proyecto o simplemente quieres saludar? <br />
                            Completa el formulario y me pondré en contacto contigo.
                        </p>
                    </div>
                </div>
                <form
                    className="flex-1 bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 space-y-6"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-bold text-light-mode-text dark:text-dark-mode-text mb-4 md:text-left text-center">
                        Contáctame
                    </h2>
                    <div>
                        <label className="block text-sm font-medium text-light-mode-text dark:text-dark-mode-text mb-1 md:text-left text-center">
                            Nombre
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded bg-light-mode-bg dark:bg-dark-mode-bg border border-zinc-200 dark:border-zinc-700 text-light-mode-text dark:text-dark-mode-text focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-light-mode-text dark:text-dark-mode-text mb-1 md:text-left text-center">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded bg-light-mode-bg dark:bg-dark-mode-bg border border-zinc-200 dark:border-zinc-700 text-light-mode-text dark:text-dark-mode-text focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-light-mode-text dark:text-dark-mode-text mb-1 md:text-left text-center">
                            Mensaje
                        </label>
                        <textarea
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            rows={4}
                            required
                            className="w-full px-4 py-2 rounded bg-light-mode-bg dark:bg-dark-mode-bg border border-zinc-200 dark:border-zinc-700 text-light-mode-text dark:text-dark-mode-text focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </section>
    );
};