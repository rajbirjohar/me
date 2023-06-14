import styles from "./page.module.scss";
import {
  ApertureIcon,
  ArrowUpRightIcon,
  Code2Icon,
  EggFriedIcon,
  EyeIcon,
  KeyboardIcon,
  MountainSnowIcon,
  MusicIcon,
  PaintbrushIcon,
  PaletteIcon,
  PenToolIcon,
  Wand2Icon,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/core/ui/HoverCard";
import { getRepo, getProfileData } from "@/lib/github";
import { Avatar, AvatarFallback, AvatarImage } from "@/core/ui/Avatar";
import { formatDistance } from "date-fns";
import Hello from "./Hello";

export const revalidate = 60;

export default async function Home() {
  let profile, repo;
  try {
    [profile, repo] = await Promise.all([getProfileData(), getRepo()]);
  } catch (error) {
    console.log(error);
  }

  return (
    <section className={styles.hero}>
      <Hello />
      {/* <p>
        I&#39;m an <Code2Icon name="Code Icon" /> engineer and{" "}
        <PenToolIcon name="Pen Tool Icon" /> designer.
      </p>
      <p>
        I also take <ApertureIcon name="Aperture Icon" /> photos,{" "}
        <MusicIcon name="Music Icon" /> play bass, and{" "}
        <MountainSnowIcon name="Mountain Snow Icon" /> get lost on canyon
        drives.
      </p>
      <p>
        Currently building <PaintbrushIcon name="Paint brush Icon" /> slick and{" "}
        <EyeIcon name="Eye Icon" /> accessible interfaces at Inventives.
        Aspiring <PaletteIcon name="Palette Icon" /> CSS wizard.{" "}
        <EggFriedIcon name="Egg Fried Icon" /> Breaking things and learning
        along the way.
      </p>
      <p>
        Working on Snow Mouse Studio on the side, a collaborative effort to
        create <Wand2Icon name="Wand 2 Icon" /> brilliant ideas.
      </p>
      <div className={styles.other}>
        {repo && (
          <span
            style={{
              color: "var(--secondary-foreground)",
            }}
          >
            Updated{" "}
            {formatDistance(new Date(repo.updated_at), new Date(), {
              addSuffix: true,
            })}
          </span>
        )}
        <div className={styles.contact}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                href={"https://www.linkedin.com/in/rajbirjohar/"}
                className={styles.link}
              >
                LinkedIn <ArrowUpRightIcon size={20} />{" "}
              </a>
            </HoverCardTrigger>
            <HoverCardContent className={styles.content} side="top">
              <h4>LinkedIn</h4>
              <p>Connect with me on LinkedIn.</p>
            </HoverCardContent>
          </HoverCard>
          {!profile ? (
            <a
              href={"https://www.github.com/rajbirjohar"}
              className={styles.link}
            >
              Github <ArrowUpRightIcon size={20} />{" "}
            </a>
          ) : (
            <HoverCard>
              <HoverCardTrigger asChild>
                <a href={profile.html_url} className={styles.link}>
                  Github <ArrowUpRightIcon size={20} />{" "}
                </a>
              </HoverCardTrigger>
              <HoverCardContent className={styles.content} side="top">
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
      </div> */}
    </section>
  );
}
