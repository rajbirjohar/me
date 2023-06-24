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
import ThemeSwitch from "../ThemeSwitch";

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
        <div>UX Engineer</div>
      </div>
      <div className={styles.column}>
        <div className={styles.header}>Contact</div>
        <CopyText text="hello@rajbir.io" />
      </div>
      <div className={styles.column}>
        <div className={styles.header}>Social</div>
        <div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                href={"https://www.linkedin.com/in/rajbirjohar/"}
                className={styles.link}
              >
                LinkedIn <ArrowUpRightIcon size={10} />{" "}
              </a>
            </HoverCardTrigger>
            <HoverCardContent className={styles.content}>
              <h5>LinkedIn</h5>
              <p>Connect with me on LinkedIn.</p>
            </HoverCardContent>
          </HoverCard>
          ,{" "}
          {!profile ? (
            <a
              href={"https://www.github.com/rajbirjohar"}
              className={styles.link}
            >
              Github <ArrowUpRightIcon size={10} />{" "}
            </a>
          ) : (
            <HoverCard>
              <HoverCardTrigger asChild>
                <a href={profile.html_url} className={styles.link}>
                  Github <ArrowUpRightIcon size={10} />{" "}
                </a>
              </HoverCardTrigger>
              <HoverCardContent className={styles.content}>
                <Avatar>
                  <AvatarImage src={profile.avatar_url} alt="Rajbir Johar" />
                  <AvatarFallback delayMs={600}>RJ</AvatarFallback>
                </Avatar>
                <h5>{profile.name}</h5>
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
      <div className={styles.column}>
        <ThemeSwitch />
      </div>
    </footer>
  );
}
