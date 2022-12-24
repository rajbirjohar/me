import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import css from "./styles.module.css";
import { IconHeart } from "@tabler/icons";
import { motion, Variants, AnimatePresence } from "framer-motion";

const emojis = ["👍", "🙏", "🥰", "👏", "😄", "🤘", "🤪", "🙌", "🥹", "🎉"];

export default function LikeButton(props: { slug: string }) {
  const emoji: Variants = {
    initial: {
      translateY: -20,
      opacity: 0,
    },
    animate: {
      translateY: [-40, -60, -80],
      opacity: [0, 1, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const { data, error } = useSWR(`/api/likes/${props.slug}`, fetcher, {
    refreshInterval: 10000,
    dedupingInterval: 60000,
  });
  const { trigger } = useSWRMutation(`/api/likes/${props.slug}`, like);

  async function like(url: string) {
    return fetch(url, {
      method: "POST",
      headers: {
        contentType: "application/json",
      },
    }).then((data) => data.json);
  }

  if (!data || error) {
    return <></>;
  }

  return (
    <AnimatePresence>
      <motion.button
        key={props.slug}
        initial={{ scale: 0, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        onClick={() => {
          const liked: number = data.likes + 1;
          const userLiked: number =
            data.userLikes === null ? 0 : data.userLikes + 1;
          // Limits user likes to 10
          if (userLiked < 11) {
            trigger(liked, {
              // TODO: Reconcile data types
              optimisticData: (data) =>
                ({ ...data, likes: liked, userLiked: userLiked } as any),
              rollbackOnError: true,
            });
          }
        }}
        className={css.button}
      >
        <div className={css.emojiwrapper}>
          <div className={css.emojis}>
            {emojis.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className={css.emoji}
                  animate={data.userLikes === index + 1 ? "animate" : "initial"}
                  variants={emoji}
                  initial="initial"
                >
                  {item}
                </motion.div>
              );
            })}
          </div>
        </div>
        <IconHeart className={data.userLikes ? css.filled : ""} /> {data.likes}
      </motion.button>
    </AnimatePresence>
  );
}
