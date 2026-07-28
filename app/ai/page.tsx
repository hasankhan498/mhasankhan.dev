"use client"

import { useEffect, useState } from "react"
import { usePageTransition } from "../components/animations/TransitionProvider"
import MobileNavMenu from "../components/MobileNavMenu"
import TabNavigation from "../components/TabNavigation"
import { Bot, Send, Sparkles, FolderKanban, Briefcase, Code2, GraduationCap } from "lucide-react"

const suggestedPrompts = [
    { id: 1, icon: FolderKanban, text: "What projects have you built?" },
    { id: 2, icon: Briefcase, text: "Tell me about your experience" },
    { id: 3, icon: Code2, text: "What are your core skills?" },
    { id: 4, icon: GraduationCap, text: "Your educational background?" },
]


const page = () => {

    const { navigate } = usePageTransition()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            role: "ai",
            message:
                "Hi! I'm Hasan's AI assistant. I can answer questions about his projects, technical skills, work experience, education, and services. Feel free to ask anything.",
        },
    ]);

    const [userMessage, setUserMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!userMessage.trim()) return;

        const currentMessage = userMessage;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                message: currentMessage,
            },
        ]);

        setUserMessage("");

        const response = await fetch("/api/ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: currentMessage,
            }),
        });

        const data = await response.json();

        setMessages((prev) => [
            ...prev,
            {
                role: "ai",
                message: data.response,
            },
        ]);
    };

    return (
        <div className="relative">
            <div className="fixed bg-background/80 inset-0 min-h-screen h-auto z-10 backdrop-blur-xs" />

            <div className="absolute inset-0 text-foreground/5 font-heading font-black text-9xl uppercase text-center z-0 pt-10 pointer-events-none select-none">
                Ask AI
            </div>

            <div className="content relative z-20 pb-24">

                <h1 className="text-foreground font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center pt-16 uppercase tracking-wider">
                    ASK MY AI <span className="text-accent">ANYTHING</span>
                </h1>

                <MobileNavMenu navigate={navigate} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 mt-16 px-6 sm:px-8 max-w-6xl mx-auto">

                    {/* Left Column - Info */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-foreground font-heading text-3xl font-extrabold uppercase mb-4">
                                Chat With My Portfolio AI              </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Trained on my projects, experience and skills. Ask it anything
                                you&apos;d normally ask me, and get an answer instantly — no
                                scrolling, no waiting.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-foreground">
                                <Bot size={20} />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                                    Status
                                </p>
                                <p className="text-foreground font-semibold">
                                    Online & Ready to Chat
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                                <Sparkles size={13} className="text-accent" />
                                Try Asking
                            </p>
                            <div className="flex flex-col gap-2.5">
                                {suggestedPrompts.map((prompt) => (
                                    <button
                                        key={prompt.id}
                                        type="button"
                                        className="
                      flex
                      items-center
                      gap-3
                      rounded-full
                      bg-secondary
                      px-5
                      py-3
                      text-left
                      text-sm
                      text-foreground
                      transition-colors
                      duration-300
                      hover:bg-accent
                      hover:text-foreground
                    "
                                    >
                                        <prompt.icon size={15} className="shrink-0" />
                                        {prompt.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Chat */}
                    <div className="flex flex-col gap-4">

                        <div className="flex h-[440px] flex-col gap-5 overflow-y-auto rounded-3xl border border-foreground/10 bg-secondary/40 p-6 sm:p-8">
                            {messages.map((msg, i) =>
                                msg.role === "ai" ? (
                                    <div key={i} className="flex items-start gap-3 font-sans">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-foreground">
                                            <Bot size={16} />
                                        </span>
                                        <p className="max-w-[85%] rounded-3xl rounded-tl-md bg-background/60 px-6 py-4 text-sm leading-relaxed text-foreground">
                                            {msg.message}
                                        </p>
                                    </div>
                                ) : (
                                    <div key={i} className="flex justify-end">
                                        <p className="max-w-[85%] rounded-3xl rounded-tr-md bg-accent px-6 py-4 text-sm leading-relaxed text-foreground">
                                            {msg.message}
                                        </p>
                                    </div>
                                )
                            )}

                            {/* Typing indicator */}
                            <div className="flex items-start gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-foreground">
                                    <Bot size={16} />
                                </span>
                                <div className="flex items-center gap-1.5 rounded-3xl rounded-tl-md bg-background/60 px-6 py-5">
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-full border border-foreground/10 bg-secondary/40 py-2 pl-6 pr-2 transition-colors duration-300 focus-within:border-accent">
                            <input
                                type="text"
                                placeholder="Ask anything about Hasan..., skills, or experience..."
                                onChange={(e) => setUserMessage(e.target.value)}
                                value={userMessage}
                                className="w-full bg-transparent text-sm uppercase tracking-wide text-foreground outline-none placeholder:text-muted-foreground"
                            />
                            <button
                                type="submit"
                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-foreground transition-transform duration-300 hover:scale-105"
                                aria-label="Send message"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Right Navigation (Desktop only) */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100]">
                <TabNavigation setIsMenuOpen={setIsMenuOpen} navigate={navigate} />
            </div>

        </div>
    )
}

export default page