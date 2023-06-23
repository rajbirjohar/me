import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/core/ui/HoverCard";
import CopyText from "../CopyText";
import styles from "./styles.module.scss";
import { ArrowUpRightIcon } from "lucide-react";
import { getProfileData } from "@/lib/github";
import { Avatar, AvatarFallback, AvatarImage } from "@/core/ui/Avatar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default async function Footer() {
  let profile;
  try {
    profile = await getProfileData();
  } catch (error) {
    console.log(error);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.header}>Rajbir Johar</div>
        <div
          style={{
            fontFamily: inter.style.fontFamily,
          }}
        >
          UX Engineer
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.header}>Contact</div>
        <CopyText text="hello@rajbir.io" className={inter.className} />
      </div>
      <div className={styles.column}>
        <div className={styles.header}>Social</div>
        <div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                href={"https://www.linkedin.com/in/rajbirjohar/"}
                className={styles.link}
                style={{
                  fontFamily: inter.style.fontFamily,
                }}
              >
                LinkedIn <ArrowUpRightIcon size={10} />{" "}
              </a>
            </HoverCardTrigger>
            <HoverCardContent className={styles.content}>
              <h4>LinkedIn</h4>
              <p>Connect with me on LinkedIn.</p>
            </HoverCardContent>
          </HoverCard>
          ,{" "}
          {!profile ? (
            <a
              href={"https://www.github.com/rajbirjohar"}
              className={styles.link}
              style={{
                fontFamily: inter.style.fontFamily,
              }}
            >
              Github <ArrowUpRightIcon size={10} />{" "}
            </a>
          ) : (
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href={profile.html_url}
                  className={styles.link}
                  style={{
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Github <ArrowUpRightIcon size={10} />{" "}
                </a>
              </HoverCardTrigger>
              <HoverCardContent className={styles.content}>
                <Avatar>
                  <AvatarImage src={profile.avatar_url} alt="Rajbir Johar" />
                  <AvatarFallback delayMs={600}>RJ</AvatarFallback>
                </Avatar>
                <h4>{profile.name}</h4>
                <p>{profile.bio}</p>
                <div className={styles.metrics}>
                  <span>
                    <strong>{profile.followers}</strong> followers
                  </span>
                  <span>
                    <strong>{profile.following}</strong> following
                  </span>
                </div>
              </HoverCardContent>
            </HoverCard>
          )}
        </div>
      </div>
    </footer>
  );
}
