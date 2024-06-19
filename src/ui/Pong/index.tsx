"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./styles.module.css";

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  angle: number;
}

interface Paddle {
  x: number;
  y: number;
}

const emojies = ["🙂", "🤡", "👹", "🤖", "👾"];

const ballSize = 40;
const paddleWidth = 100;
const paddleHeight = 10;
const speedFactor = 1.05;

const Pong = () => {
  const [highScore, setHighScore] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedHighScore = localStorage.getItem("rj_high_score") || 0;
      if (storedHighScore) {
        setHighScore(parseInt(storedHighScore, 10));
      }
    }
  }, []);

  const [ball, setBall] = useState<Ball>({
    x: 50,
    y: 50,
    dx: 5,
    dy: 5,
    angle: 0,
  });

  const [paddle, setPaddle] = useState<Paddle>({ x: 50, y: 450 });
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("🙂");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const paddleRef = useRef<Paddle>({ x: 50, y: 450 });
  const lastBounce = useRef<number>(0);

  const saveHighScore = (score: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("rj_high_score", score.toString());
      setHighScore(score);
    }
  };

  const updateBallPosition = useCallback(() => {
    setBall((ball) => {
      const container = containerRef.current;
      if (!container) return ball;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      let { x, y, dx, dy, angle } = ball;
      x += dx;
      y += dy;

      // Bounce off left wall
      if (x <= 0) {
        x = 0;
        dx = -dx;
        angle += 180;
      }

      // Bounce off right wall
      if (x >= containerWidth - ballSize) {
        x = containerWidth - ballSize;
        dx = -dx;
        angle += 180;
      }

      // Bounce off top wall
      if (y <= 0) {
        y = 0;
        dy = -dy;
        angle += 180;
      }

      // Reset ball if it hits the bottom
      if (y >= containerHeight - ballSize) {
        setGameStarted(false);
        setGameOver(true);
        if (score > highScore) {
          saveHighScore(score);
        }
        return {
          x: containerWidth / 2,
          y: containerHeight / 2,
          dx: 2,
          dy: 2,
          angle: 0,
        };
      }

      // Bounce off the paddle
      const paddle = paddleRef.current;
      if (
        y + ballSize >= paddle.y &&
        y + ballSize <= paddle.y + paddleHeight &&
        x + ballSize >= paddle.x &&
        x <= paddle.x + paddleWidth
      ) {
        dy = -dy;
        dx *= speedFactor;
        dy *= speedFactor;

        // Prevent double counting
        const now = Date.now();
        if (now - lastBounce.current > 100) {
          setScore((prevScore) => prevScore + 1);
          lastBounce.current = now;
        }
      }

      return { x, y, dx, dy, angle };
    });
  }, [score, highScore]);

  useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(updateBallPosition, 1000 / 60);
    return () => clearInterval(interval);
  }, [gameStarted, updateBallPosition]);
  const handleMouseMove = (event: MouseEvent) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      let newPaddleX = event.clientX - rect.left - paddleWidth / 2;
      newPaddleX = Math.max(
        0,
        Math.min(newPaddleX, container.clientWidth - paddleWidth)
      );
      paddleRef.current.x = newPaddleX;
      setPaddle((prev) => ({ ...prev, x: newPaddleX }));
    }
  };

  const handleTouchMove = (event: TouchEvent) => {
    const container = containerRef.current;
    if (container && event.touches.length > 0) {
      const rect = container.getBoundingClientRect();
      let newPaddleX = event.touches[0].clientX - rect.left - paddleWidth / 2;
      newPaddleX = Math.max(
        0,
        Math.min(newPaddleX, container.clientWidth - paddleWidth)
      );
      paddleRef.current.x = newPaddleX;
      setPaddle((prev) => ({ ...prev, x: newPaddleX }));
    }
  };

  const startGame = (emoji: string) => {
    const container = containerRef.current;
    if (!container) return;
    setSelectedEmoji(emoji);
    setScore(0);
    const containerWidth = container.clientWidth;
    const randomX = Math.random() * (containerWidth - 20);
    const randomAngle = Math.random() * 360;
    setBall({ x: randomX, y: 50, dx: 5, dy: 5, angle: randomAngle });
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      window.addEventListener("touchmove", handleTouchMove);
      return () => {
        window.removeEventListener("touchmove", handleTouchMove);
      };
    } else {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div className={styles.board} ref={containerRef}>
      {!gameStarted && !gameOver && (
        <div className={styles.selection}>
          <h2>Let&#39;s have some fun.</h2>
          <div className={styles.emojis}>
            {emojies.map((emoji) => (
              <button
                key={emoji}
                onClick={() => startGame(emoji)}
                className={styles.emoji}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}
      {gameOver && (
        <div className={styles.gameover}>
          <h2>Game Over!</h2>
          <strong>{score} Bounces</strong>
          <button onClick={() => setGameOver(false)} className={styles.button}>
            Play Again
          </button>
        </div>
      )}
      {gameStarted && !gameOver && (
        <>
          <div className={styles.highScore}>
            <h3>HI {highScore}</h3>
          </div>
          <div
            style={{
              top: `${ball.y}px`,
              left: `${ball.x}px`,
              fontSize: `${ballSize}px`,
              transform: `rotate(${ball.angle}deg)`,
            }}
            className={styles.ball}
          >
            {selectedEmoji}
          </div>
          <div
            style={{
              top: `${paddle.y}px`,
              left: `${paddle.x}px`,
              width: `${paddleWidth}px`,
              height: `${paddleHeight}px`,
            }}
            className={styles.paddle}
          />
          <div className={styles.score}>{score}</div>
        </>
      )}
    </div>
  );
};

export { Pong };
