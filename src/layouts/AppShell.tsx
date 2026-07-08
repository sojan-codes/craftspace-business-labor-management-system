import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { NavItem } from "../data/mockData";
import { logoutItem } from "../data/mockData";

export function AppShell({ nav, portal }: { nav: NavItem[]; portal: "Business" | "Labor" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090b] text-white">
      <div className="flex">
        <Sidebar nav={nav} portal={portal} mobile={false} />
        <AnimatePresence>
          {open ? (
            <motion.div className="fixed inset-0 z-50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <button aria-label="Close navigation" className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
              <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} className="relative h-full w-72">
                <Sidebar nav={nav} portal={portal} mobile onNavigate={() => setOpen(false)} />
              </motion.aside>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <main className="min-w-0 flex-1 lg:pl-72">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/10 bg-[#08090b]/78 px-4 backdrop-blur-xl sm:px-6">
            <button aria-label="Open navigation" onClick={() => setOpen(true)} className="rounded-xl border border-white/10 bg-white/[0.05] p-2 text-zinc-300 lg:hidden">
              <Menu size={20} />
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">{portal} Portal</p>
              <p className="text-sm text-zinc-300">Business-labor production workspace</p>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-zinc-300 sm:block">Team CraftSpace</div>
          </header>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar({ nav, portal, mobile, onNavigate }: { nav: NavItem[]; portal: string; mobile: boolean; onNavigate?: () => void }) {
  const navigate = useNavigate();
  return (
    <aside className={`${mobile ? "h-full" : "fixed hidden h-screen lg:flex"} w-72 flex-col border-r border-white/10 bg-zinc-950/94 p-4`}>
      <div className="flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-3 rounded-xl p-2 text-left transition hover:bg-white/[0.06]">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-bold text-zinc-950">C</div>
          <div className="cursor-pointer">
            <p className="font-semibold">CraftSpace</p>
            <p className="text-xs text-zinc-500">{portal} Portal</p>
          </div>
        </button>
        {mobile ? (
          <button aria-label="Close navigation" onClick={onNavigate} className="rounded-lg p-2 text-zinc-400">
            <X size={18} />
          </button>
        ) : null}
      </div>
      <nav className="mt-8 flex flex-1 flex-col gap-1">
        {nav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/business" || item.path === "/labor"}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                isActive ? "bg-white text-zinc-950" : "text-zinc-400 hover:bg-white/[0.07] hover:text-white"
              }`
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={() => {
          onNavigate?.();
          navigate(logoutItem.path);
        }}
        className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-400 transition hover:bg-white/[0.07] hover:text-white cursor-pointer"
      >
        <logoutItem.icon size={18}/>
        {logoutItem.label}
      </button>
    </aside>
  );
}
