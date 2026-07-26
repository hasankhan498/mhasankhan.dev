"use client"

import { getMessages } from "@/actions/getMessages";
import {
  Search,
  Mail,
  MailOpen,
  Trash2,
  CheckCheck,
  Archive,
  ChevronLeft,
  ChevronRight,
  Inbox,
} from "lucide-react";
import { useState, useEffect } from "react";
import { deleteMessage } from "./messageActions/deleteMessage";
import { putArchive } from "./messageActions/putArchive";
import { markRead } from "./messageActions/markRead";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  isRead: boolean;
  isArchived: boolean;
  createdAt: Date | string;
}

const FILTERS = ["All", "Unread", "Read", "Archived"] as const;
type Filter = (typeof FILTERS)[number];

const page = () => {

  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState(1);
  const [messages, setMessages] = useState<ContactMessage[] | null>(null);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  useEffect(() => {
    async function fetchMessages() {
      const mes = await getMessages(page);
      setMessages(mes.messages);
      setTotalPages(mes.totalPages)
    }
    fetchMessages();
  }, [page]);

  const total = messages?.length;
  const unreadCount = messages?.filter((m) => !m.isRead && !m.isArchived).length;
  const readCount = messages?.filter((m) => m.isRead && !m.isArchived).length;
  const archivedCount = messages?.filter((m) => m.isArchived).length;

  const summaryCards = [
    { label: "Total", value: total, icon: Inbox },
    { label: "Unread", value: unreadCount, icon: Mail },
    { label: "Read", value: readCount, icon: MailOpen },
    { label: "Archived", value: archivedCount, icon: Archive },
  ];

  const filteredMessages = messages?.filter((m) => {
    switch (activeFilter) {
      case "Unread":
        return !m.isRead && !m.isArchived;
      case "Read":
        return m.isRead && !m.isArchived;
      case "Archived":
        return m.isArchived;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-background px-6 py-10 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">

        {/* Header */}
        <div>
          <p className="text-sm uppercase tracking-widest text-accent">Contact</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-wide text-foreground">
            Contact <span className="text-accent">Messages</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage and respond to messages from your portfolio&apos;s contact form.
          </p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {summaryCards.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-3xl border border-foreground/10 bg-secondary/30 p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Icon size={17} />
              </span>
              <div>
                <p className="font-heading text-xl font-black text-foreground">{value}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters + Search */}
        <div className="flex flex-col gap-4 rounded-3xl border border-foreground/10 bg-secondary/30 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${activeFilter === filter
                    ? "bg-accent text-foreground"
                    : "bg-background/40 text-muted-foreground hover:text-foreground"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/40 px-5 py-2.5">
            <Search size={15} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-48 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Messages List */}
        <div className="flex flex-col gap-3">
          {filteredMessages?.map((msg) => {
            const status = msg.isArchived ? "Archived" : msg.isRead ? "Read" : "Unread";

            return (
              <form
                key={msg.id}
                className={`flex flex-col gap-5 rounded-3xl border p-6 transition-colors duration-300 hover:border-accent sm:flex-row sm:items-start ${msg.isArchived
                    ? "border-foreground/10 bg-secondary/10 opacity-70"
                    : msg.isRead
                      ? "border-foreground/10 bg-secondary/20"
                      : "border-accent/40 bg-accent/5"
                  }`}
              >
                <input type="hidden" name="id" value={msg.id} />

                {/* Avatar */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${msg.isRead || msg.isArchived
                      ? "bg-foreground/10 text-muted-foreground"
                      : "bg-accent text-foreground"
                    }`}
                >
                  {msg.isRead || msg.isArchived ? <MailOpen size={18} /> : <Mail size={18} />}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className={`font-heading text-base font-bold ${msg.isRead || msg.isArchived ? "text-muted-foreground" : "text-foreground"}`}>
                        {msg.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{msg.email}</p>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        {new Intl.DateTimeFormat("en-US", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        }).format(new Date(msg.createdAt))}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${status === "Unread"
                            ? "bg-accent/15 text-accent"
                            : status === "Archived"
                              ? "bg-foreground/10 text-muted-foreground"
                              : "bg-foreground/5 text-muted-foreground"
                          }`}
                      >
                        {status}
                      </span>
                    </div>
                  </div>

                  <p className={`mb-1 text-sm font-semibold ${msg.isRead || msg.isArchived ? "text-muted-foreground" : "text-accent"}`}>
                    {msg.subject}
                  </p>

                  <p className="mb-4 text-sm text-muted-foreground line-clamp-1">
                    {msg.message}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2">
                    {!msg.isRead && (
                      <button
                        type="submit"
                        formAction={markRead}
                        className="flex items-center gap-1.5 rounded-full border border-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                      >
                        <CheckCheck size={13} />
                        Mark Read
                      </button>
                    )}

                    <button
                      type="submit"
                      formAction={putArchive}
                      className="flex items-center gap-1.5 rounded-full border border-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      <Archive size={13} />
                      Archive
                    </button>

                    <button
                      type="submit"
                      formAction={deleteMessage}
                      className="flex items-center gap-1.5 rounded-full border border-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:border-red-400 hover:text-red-400"
                    >
                      <Trash2 size={13} />
                      Delete
                    </button>
                  </div>
                </div>
              </form>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredMessages?.length === 0 && (
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-foreground/15 py-20 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Mail size={24} />
            </span>
            <p className="font-semibold text-foreground">No messages here</p>
            <p className="max-w-xs text-sm text-muted-foreground">
              {activeFilter === "All"
                ? "Messages from your contact form will show up here."
                : `You have no ${activeFilter.toLowerCase()} messages.`}
            </p>
          </div>
        )}

        {/* Pagination */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-6 sm:flex-row">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Showing 1–{filteredMessages?.length ?? 0} of {filteredMessages?.length ?? 0} messages
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => page > 1 && setPage(page - 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <ChevronLeft size={15} />
            </button>

            {Array.from({ length: totalPages }).map((n, i) => (
              <button
                key={i + 1}
                type="button"
                onClick={() => setPage(i + 1)}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${page === i + 1
                    ? "bg-accent text-foreground"
                    : "border border-foreground/10 text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              type="button"
              disabled={page == totalPages}
              onClick={() => setPage(page + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;