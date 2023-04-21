import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/core/atoms/Dialog";
import {
  Bookmark,
  Command as CommandIcon,
  CurlyBraces,
  ExternalLink,
  Github,
  Home,
  Instagram,
  Linkedin,
  LucideIcon,
  ScanFace,
  Search,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import css from "./styles.module.css";
import { useRouter } from "next/router";
import { Input } from "@/core/atoms/Input";
import { useHotkeys } from "react-hotkeys-hook";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/core/atoms/Scrollable";

type ListItem = {
  id: number;
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
};

const links: ListItem[] = [
  {
    id: 0,
    label: "home",
    href: "/",
    icon: Home,
  },
  {
    id: 1,
    label: "about",
    href: "/about",
    icon: ScanFace,
  },
  {
    id: 2,
    label: "journals",
    href: "/journals",
    icon: Bookmark,
  },
  {
    id: 3,
    label: "projects",
    href: "/projects",
    icon: CurlyBraces,
  },
  {
    id: 4,
    href: "https://github.com/rajbirjohar",
    label: "rajbirjohar",
    icon: Github,
    external: true,
  },
  {
    id: 5,
    href: "https://www.linkedin.com/in/rajbirjohar/",
    label: "/rajbirjohar",
    icon: Linkedin,
    external: true,
  },
  {
    id: 6,
    href: "https://www.instagram.com/rajbir.johar/",
    label: "@rajbir.johar",
    icon: Instagram,
    external: true,
  },
  {
    id: 7,
    href: "https://twitter.com/rajbirjohar",
    label: "@rajbirjohar",
    icon: Twitter,
    external: true,
  },
];

const Greeting = () => {
  const currentTime = new Date().getHours();
  let greeting;
  if (currentTime >= 4 && currentTime < 12) {
    greeting = "Good morning";
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "Good afternoon";
  } else if (currentTime >= 18 && currentTime < 22) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }
  return <>{greeting}</>;
};

export default function Cmdk() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [focused, setFocused] = useState();

  const router = useRouter();
  let pathname = router.asPath || "/";
  if (pathname.includes("/journals/")) {
    pathname = "/journals";
  }

  const results = links.filter((link) => {
    if (
      link.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      link.href.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return link;
    }
  });

  useHotkeys("meta+k, ctrl+k", (event) => {
    event.preventDefault();
    setOpen(!open);
  });

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <CommandIcon />
      </DialogTrigger>
      <DialogContent className={css.cmdk}>
        <DialogHeader className={css.header}>
          <DialogTitle className={css.title}>
            <Greeting />
          </DialogTitle>
          <time>
            {time.toLocaleString("en-US", {
              timeStyle: "medium",
              hour12: false,
            })}{" "}
          </time>
        </DialogHeader>
        <div className={css.search}>
          <Search className={css.icon} />
          <Input
            className={css.input}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Explore"
          />
        </div>
        <ScrollArea
          style={{
            height: 388,
          }}
        >
          <div className={css.content}>
            {search.length > 0 ? (
              <>
                <nav className={css.navigation}>
                  <h4 className={css.heading}>Results</h4>
                  {results.length === 0 && (
                    <p className={css.empty}>Sorry, doesn&#39;t exist yet.</p>
                  )}
                  {results.map((link, index) => (
                    <Link
                      tabIndex={index}
                      key={link.href}
                      href={link.href}
                      className={
                        link.href === pathname
                          ? `${css.link} ${css.active}`
                          : css.link
                      }
                      onClick={() => setOpen(false)}
                    >
                      <span>
                        <link.icon /> {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </>
            ) : (
              <nav className={css.navigation}>
                <h4 className={css.heading}>Navigation</h4>
                {links
                  .filter((link) => !link.external)
                  .map((link) => (
                    <Link key={link.href} href={link.href} className={css.link}>
                      <div
                        tabIndex={0}
                        className={
                          link.href === pathname
                            ? `${css.item} ${css.active}`
                            : css.item
                        }
                        onClick={() => setOpen(false)}
                      >
                        <span>
                          <link.icon /> {link.label}
                        </span>
                      </div>
                    </Link>
                  ))}
                <h4 className={css.heading}>Elsewhere</h4>
                {links
                  .filter((link) => link.external)
                  .map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={css.link}
                    >
                      <div tabIndex={0} className={css.item}>
                        <span>
                          <link.icon /> {link.label}
                        </span>
                        <ExternalLink />
                      </div>
                    </Link>
                  ))}
              </nav>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
