"use client"

import { Mail, Lock, ArrowRight, ShieldCheck, LayoutDashboard, Sparkles } from "lucide-react"
import { useActionState, useEffect } from "react"
import { logIn } from "@/actions/logInAction"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"



const initials = {
    success: false,
    message: ""
}

const page = () => {

    const router = useRouter();
    const { status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            router.replace("/admin/dashboard");
        }
    }, [status]);
    const [state, formAction, pending] = useActionState(logIn, initials)


    return (
        <div className="relative min-h-screen overflow-hidden bg-background">

            {/* Ambient glow blobs */}
            <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />

            {/* Yellow diagonal strip, echoing homepage */}
            <div className="pointer-events-none absolute -left-48 top-0 hidden h-[1200px] w-[28rem] rotate-[-12deg] bg-accent/90 lg:block" />

            <div className="relative z-10 min-h-screen flex flex-col lg:flex-row lg:justify-center">

                {/* Left - Brand / Statement panel */}
                <div className="relative hidden flex-col justify-between p-16 lg:flex">
                    <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-foreground">
                            <Sparkles size={20} />
                        </span>
                        <span className="font-heading text-xl font-black uppercase tracking-widest text-foreground">
                            M Hasan Khan
                        </span>
                    </div>

                    <div className="flex flex-col gap-6">
                        <span className="flex items-center gap-4 uppercase">
                            <span className="h-1.5 w-16 rounded-full bg-accent" />
                            <span className="text-sm font-semibold tracking-[0.3em] text-accent">
                                Admin Access
                            </span>
                        </span>
                        <h1 className="font-heading text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-wide text-foreground">
                            Control<br />Your<br /><span className="text-accent">Portfolio</span>
                        </h1>
                        <p className="max-w-md text-base leading-8 text-muted-foreground">
                            Sign in to manage projects, update your resume, and publish
                            new content — all from one dashboard.
                        </p>
                    </div>

                    <div className="flex items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground">
                        <span className="flex items-center gap-2">
                            <ShieldCheck size={16} className="text-accent" />
                            Secure Access
                        </span>
                        <span className="flex items-center gap-2">
                            <LayoutDashboard size={16} className="text-accent" />
                            Full Dashboard
                        </span>
                    </div>
                </div>

                {/* Right - Form panel */}
                <div className="flex items-center justify-center p-6 sm:p-10">
                    <div
                        className="
w-full
max-w-md
rounded-[2rem]
border
border-foreground/10
bg-secondary/40
p-8
shadow-2xl
backdrop-blur-md
sm:p-10
"
                    >
                        {/* Mobile-only brand mark */}
                        <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground">
                                <Sparkles size={18} />
                            </span>
                            <span className="font-heading text-lg font-black uppercase tracking-widest text-foreground">
                                M Hasan Khan
                            </span>
                        </div>

                        <div className="mb-8 flex flex-col items-center gap-3 text-center">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/30">
                                <ShieldCheck size={24} />
                            </span>
                            <h2 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-foreground">
                                Admin <span className="text-accent">Login</span>
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Enter your credentials to access the dashboard
                            </p>
                        </div>

                        <form action={formAction} className="flex flex-col gap-5">

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                    Email
                                </label>
                                <div className="flex items-center gap-3 rounded-full border border-foreground/10 bg-background/50 px-6 py-4 transition-colors duration-300 focus-within:border-accent">
                                    <Mail size={18} className="shrink-0 text-accent" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="admin@yoursite.com"
                                        className="
                      w-full
                      bg-transparent
                      text-sm
                      text-foreground
                      placeholder:text-muted-foreground
                      outline-none
                    "
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-2">
                                <label className="px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                    Password
                                </label>
                                <div className="flex items-center gap-3 rounded-full border border-foreground/10 bg-background/50 px-6 py-4 transition-colors duration-300 focus-within:border-accent">
                                    <Lock size={18} className="shrink-0 text-accent" />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="••••••••"
                                        className="
                      w-full
                      bg-transparent
                      text-sm
                      text-foreground
                      placeholder:text-muted-foreground
                      outline-none
                    "
                                    />
                                </div>
                            </div>

                            {
                                !state.success && <p className="text-red-600 font-medium text-lg">
                                    {
                                        state?.message
                                    }
                                </p>
                            }

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={pending}
                                className="
group
relative
mt-2
flex
w-full
items-center
justify-center
overflow-hidden
rounded-full
border-2
border-accent
"
                            >
                                <span
                                    className="
                    absolute
                    inset-0
                    origin-left
                    scale-x-100
                    bg-accent
                    transition-transform
                    duration-500
                    ease-in-out
                    group-hover:scale-x-[1.02]
                  "
                                />
                                <span
                                    className="
                    relative
                    z-10
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    px-8
                    py-4
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-foreground
                  "
                                >
                                    {
                                        pending ? "Accessing Dashboard..." : "Access Dashboard"
                                    }
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </button>
                        </form>

                        <p className="mt-8 text-center text-xs uppercase tracking-widest text-muted-foreground">
                            Restricted Area · Authorized Personnel Only
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page