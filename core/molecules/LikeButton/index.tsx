import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import css from "./styles.module.scss";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/core/atoms/Tooltip";

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

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`/api/likes/${props.slug}`, {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
      });
      const data = await response.json();
      return data;
    },
    // When mutate is called:
    onMutate: async (newLike) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["likes", props.slug] });

      // Snapshot the previous value
      const previousLikes: { likes: number; userLikes: number } | undefined =
        queryClient.getQueryData(["likes", props.slug]);

      if (previousLikes && previousLikes.userLikes < 10) {
        // Optimistically update to the new value
        queryClient.setQueryData(["likes", props.slug], {
          likes: previousLikes.likes + 1,
          userLikes: previousLikes.userLikes + 1,
        });
      }

      // Return a context object with the snapshotted value
      return { previousLikes };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newLike, context) => {
      queryClient.setQueryData(["likes", props.slug], context?.previousLikes);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["likes", props.slug] });
    },
  });

  const fetchLikes = async () => {
    const response = await fetch(`/api/likes/${props.slug}`);
    const data = await response.json();
    return data;
  };

  const likes = useQuery<{ likes: number; userLikes: number }>({
    queryKey: ["likes", props.slug],
    queryFn: fetchLikes,
  });

  if (likes.isLoading || likes.isError) {
    return <></>;
  }

  return (
    <AnimatePresence>
      {likes.data && (
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.button
              key={props.slug}
              initial={{ scale: 0, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className={css.button}
              onClick={() => mutation.mutate()}
            >
              <div className={css.emojiwrapper}>
                <div className={css.emojis}>
                  {emojis.map((item, index) => {
                    return (
                      <motion.div
                        key={index}
                        className={css.emoji}
                        animate={
                          likes.data.userLikes === index + 1
                            ? "animate"
                            : "initial"
                        }
                        variants={emoji}
                        initial="initial"
                      >
                        {item}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <Heart
                className={likes.data.userLikes === 10 ? css.filled : ""}
              />
              {likes.data.likes}
            </motion.button>
          </TooltipTrigger>
          <TooltipContent>
            If you like what I write, let me know.
          </TooltipContent>
        </Tooltip>
      )}
    </AnimatePresence>
  );
}
