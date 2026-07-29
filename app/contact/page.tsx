"use client"

import { useState } from "react"
import { usePageTransition } from "../components/animations/TransitionProvider"
import MobileNavMenu from "../components/MobileNavMenu"
import TabNavigation from "../components/TabNavigation"
import {
  Mail,
  Phone,
  Send,
} from "lucide-react"
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { sendMessage } from "@/actions/sendMessage"

const contactInfo = {
  email: "mhasankhan1069@gmail.com",
  phone: "+92 310 4278981",
}

const socialLinks = [
  { id: 1, icon: FaFacebookF, link: "https://www.facebook.com/share/17ufPaKj6v/" },
  { id: 2, icon: FaInstagram, link: "https://www.instagram.com/codewithhas?igsh=dnlja3hsMTdqb28%3D" },
  { id: 3, icon: FaLinkedin, link: "https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BvXfeckaFSqKWoHB2YEWQiA%3D%3D" },
  { id: 4, icon: FaGithub, link: "https://github.com/hasankhan498"},
]

const page = () => {

  const { navigate } = usePageTransition()
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className="relative">
      <div className="fixed bg-background/80 inset-0 min-h-screen h-auto z-10 backdrop-blur-xs" />

      {/* <div className="absolute inset-0 text-foreground/5 font-heading font-black text-9xl uppercase text-center z-0 pt-10 pointer-events-none select-none">
        Contact
      </div> */}

        <div className="absolute inset-0 overflow-hidden text-foreground/10 font-heading font-black text-5xl sm:text-7xl md:text-9xl uppercase text-center z-0 pt-10 pointer-events-none select-none">
        Contact
      </div>

      <div className="content relative z-20 pb-24">

        <h1 className="text-foreground font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center pt-16 uppercase tracking-wider">
          GET IN <span className="text-accent">TOUCH</span>
        </h1>

        <MobileNavMenu navigate={navigate} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 mt-16 px-6 sm:px-8 max-w-6xl mx-auto">

          {/* Left Column - Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-foreground font-heading text-3xl font-extrabold uppercase mb-4">
                Don&apos;t Be Shy !
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to
                be part of your visions.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-foreground">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Mail Me
                  </p>
                  <p className="text-foreground font-semibold">
                    {contactInfo.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-foreground">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Call Me
                  </p>
                  <p className="text-foreground font-semibold">
                    {contactInfo.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-secondary
                    text-foreground
                    transition-colors
                    duration-300
                    hover:bg-accent
                    hover:text-foreground
                  "
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <form action={sendMessage} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="
                  rounded-full
                  border
                  border-foreground/10
                  bg-secondary/40
                  px-6
                  py-4
                  text-sm
                  uppercase
                  tracking-wide
                  text-foreground
                  placeholder:text-muted-foreground
                  outline-none
                  transition-colors
                  duration-300
                  focus:border-accent
                "
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="
                  rounded-full
                  border
                  border-foreground/10
                  bg-secondary/40
                  px-6
                  py-4
                  text-sm
                  uppercase
                  tracking-wide
                  text-foreground
                  placeholder:text-muted-foreground
                  outline-none
                  transition-colors
                  duration-300
                  focus:border-accent
                "
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="
                  rounded-full
                  border
                  border-foreground/10
                  bg-secondary/40
                  px-6
                  py-4
                  text-sm
                  uppercase
                  tracking-wide
                  text-foreground
                  placeholder:text-muted-foreground
                  outline-none
                  transition-colors
                  duration-300
                  focus:border-accent
                "
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows={7}
              className="
                rounded-3xl
                border
                border-foreground/10
                bg-secondary/40
                px-6
                py-5
                text-sm
                uppercase
                tracking-wide
                text-foreground
                placeholder:text-muted-foreground
                outline-none
                resize-none
                transition-colors
                duration-300
                focus:border-accent
              "
            />

            <button
              type="submit"
              className="
                group
                relative
                flex
                w-fit
                items-center
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
                  origin-right
                  scale-x-0
                  bg-accent
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:scale-x-100
                "
              />
              <span
                className="
                  relative
                  z-10
                  px-8
                  uppercase
                  font-semibold
                  tracking-[0.18em]
                  transition-colors
                  duration-500
                  group-hover:text-foreground
                "
              >
                Send Message
              </span>
              <span
                className="
                  relative
                  z-20
                  ml-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-accent
                "
              >
                <Send
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </button>
          </form>

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