import {
  Bookmark,
  Command as CommandIcon,
  CornerUpLeft,
  CurlyBraces,
  ExternalLink,
  Github,
  Home,
  Instagram,
  LightbulbOff,
  Linkedin,
  LucideIcon,
  Moon,
  Palette,
  ScanFace,
  Search,
  SunMedium,
  SunMoon,
  Sunrise,
  Sunset,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import css from "./styles.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/core/atoms/Tooltip";

type ListItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
};

const links: ListItem[] = [
  {
    label: "home",
    href: "/",
    icon: Home,
  },
  {
    label: "journals",
    href: "/journals",
    icon: Bookmark,
  },
  {
    label: "projects",
    href: "/projects",
    icon: CurlyBraces,
  },
  {
    href: "https://github.com/rajbirjohar",
    label: "rajbirjohar",
    icon: Github,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/rajbirjohar/",
    label: "/rajbirjohar",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://www.instagram.com/rajbir.johar/",
    label: "@rajbir.johar",
    icon: Instagram,
    external: true,
  },
  {
    href: "https://twitter.com/rajbirjohar",
    label: "@rajbirjohar",
    icon: Twitter,
    external: true,
  },
];

const themes: ListItem[] = [
  {
    href: "system",
    label: "Auto",
    icon: SunMoon,
  },
  {
    href: "light",
    label: "Day",
    icon: Sunrise,
  },
  {
    href: "afternoon",
    label: "Afternoon",
    icon: SunMedium,
  },
  {
    href: "evening",
    label: "Evening",
    icon: Moon,
  },
  {
    href: "dark",
    label: "Lights Out",
    icon: LightbulbOff,
  },
];

const Greeting = () => {
  const currentTime = new Date().getHours();
  let greeting;
  if (currentTime >= 4 && currentTime < 12) {
    greeting = (
      <>
        <Sunrise /> Good Morning
      </>
    );
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = (
      <>
        <SunMedium /> Good Afternoon
      </>
    );
  } else if (currentTime >= 18 && currentTime < 22) {
    greeting = (
      <>
        <Sunset /> Good Evening
      </>
    );
  } else {
    greeting = (
      <>
        <Moon /> Good Night
      </>
    );
  }
  return greeting;
};

export default function Cmdk() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [pages, setPages] = useState<string[]>([]);
  const page = pages[pages.length - 1];

  const router = useRouter();
  let pathname = router.asPath || "/";
  if (pathname.includes("/journals/")) {
    pathname = "/journals";
  }

  const goBack = () => {
    setPages((pages) => pages.slice(0, -1));
  };

  const setPage = (page: string) => {
    setPages([...pages, page]);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && e.metaKey) || (e.key === "k" && e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => setOpen(!open)}
            className={css.button}
            aria-label="Menu Button"
          >
            <CommandIcon />
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom">⌘ + K</TooltipContent>
      </Tooltip>
      <Command.Dialog
        onKeyDown={(e) => {
          if (pages.length > 0) {
            if (e.key === "Escape") {
              e.preventDefault();
              goBack();
            }
          }
        }}
        open={open}
        onOpenChange={setOpen}
        label="Command Menu"
        value={search}
        onValueChange={setSearch}
        filter={(value, search) => {
          if (value.includes(search)) return 1;
          return 0;
        }}
        className={css.command}
        loop
      >
        <header>
          <h1 className={css.greeting}>
            <Greeting />
          </h1>
          <time>
            {time.toLocaleString("en-US", {
              timeStyle: "medium",
              hour12: false,
            })}{" "}
          </time>
        </header>
        <div className={css.search}>
          <Search className={css.icon} />
          <Command.Input placeholder="Explore" />
        </div>
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          {!page && (
            <>
              <Command.Group heading="Navigation">
                {links
                  .filter((link) => !link.external)
                  .map((link) => (
                    <Link key={link.href} href={link.href} className={css.link}>
                      <Command.Item
                        onSelect={() => {
                          setOpen(false);
                          router.push(link.href);
                        }}
                        className={link.href === pathname ? css.selected : ""}
                      >
                        <span>
                          <link.icon /> {link.label}
                        </span>
                      </Command.Item>
                    </Link>
                  ))}
              </Command.Group>
              <Command.Group heading="Elsewhere">
                {links
                  .filter((link) => link.external)
                  .map((link) => (
                    <Link key={link.href} href={link.href} className={css.link}>
                      <Command.Item
                        onSelect={() => {
                          setOpen(false);
                          router.push(link.href);
                        }}
                      >
                        <span>
                          <link.icon /> {link.label}
                        </span>
                        <ExternalLink />
                      </Command.Item>
                    </Link>
                  ))}
              </Command.Group>
              <Command.Separator />
              <Command.Group heading="Ambience">
                <Command.Item
                  onSelect={() => {
                    setPage("ambience");
                    setSearch("");
                  }}
                >
                  <span>
                    <Palette /> Theme
                  </span>
                </Command.Item>
              </Command.Group>
            </>
          )}
          {page === "ambience" && (
            <>
              <Command.Item onSelect={goBack}>
                <span>
                  <CornerUpLeft /> Head Back
                </span>
                <div cmdk-shortcuts="">
                  <kbd>Esc</kbd>
                </div>
              </Command.Item>
              <Command.Group heading="Ambience">
                {themes.map((item) => (
                  <Command.Item
                    key={item.href}
                    onSelect={() => setTheme(item.href)}
                    className={theme === item.href ? css.selected : ""}
                  >
                    <span>
                      <item.icon /> {item.label}
                    </span>
                  </Command.Item>
                ))}
              </Command.Group>
            </>
          )}
        </Command.List>
      </Command.Dialog>
    </>
  );
}
