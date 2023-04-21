import { RefObject, useState, useCallback, useEffect } from "react";

const useKeyPress = function (
  targetKey: string,
  ref: RefObject<HTMLInputElement>
) {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = useCallback(
    ({ key }: { key: string }) => {
        console.log(key);
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },

    [targetKey]
  );

  const upHandler = useCallback(
    ({ key }: { key: string }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
    [targetKey]
  );

  useEffect(() => {
    const attachment = ref.current;
    attachment?.addEventListener("keydown", downHandler);
    attachment?.addEventListener("keyup", upHandler);

    return () => {
      attachment?.removeEventListener("keydown", downHandler);
      attachment?.removeEventListener("keyup", upHandler);
    };
  }, [downHandler, ref, upHandler]);

  return keyPressed;
};

export default useKeyPress;
