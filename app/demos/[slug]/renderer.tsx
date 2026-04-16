"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { DemoEntry } from "../registry";

type DemoRendererProps = {
  slug: DemoEntry["slug"];
};

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

type Cell = "X" | "O" | null;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

const terminalCommands: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "help, about, skills, projects, contact, date, clear, echo <text>",
  ],
  about:
    "Thandululo Nengovhela - Full Stack Developer focused on polished frontend experiences.",
  skills: "React, Next.js, TypeScript, Firebase, Tailwind CSS, UI/UX, API integration",
  projects: "Gradiate, APS Calculator, Portfolio Labs",
  contact: "Email: thandululo99@gmail.com | Phone: +27 66 550 9434",
};

function DemoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/45 p-5 shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-7">
      {children}
    </div>
  );
}

function PaymentDemo() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(350);
  const [plan, setPlan] = useState("one-time");
  const [isProcessing, setIsProcessing] = useState(false);
  const [receipt, setReceipt] = useState<{ ref: string; amount: number } | null>(null);

  const handlePay = () => {
    if (!email.trim()) {
      return;
    }

    setIsProcessing(true);
    setReceipt(null);

    setTimeout(() => {
      setIsProcessing(false);
      setReceipt({
        ref: `TX-${Math.random().toString(36).slice(2, 10).toUpperCase()}`,
        amount,
      });
    }, 1200);
  };

  return (
    <DemoCard>
      <h2 className="text-xl font-semibold text-white">Checkout Simulator</h2>
      <p className="mt-2 text-sm text-gray-300">
        Client-side payment flow preview with realistic states and transaction confirmation.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-gray-300">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-indigo-400"
          />
        </label>

        <label className="grid gap-2 text-sm text-gray-300">
          Plan
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-indigo-400"
          >
            <option value="one-time">One-Time Purchase</option>
            <option value="monthly">Monthly Subscription</option>
            <option value="yearly">Yearly Subscription</option>
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm text-gray-300">
        Amount: R{amount}
        <input
          type="range"
          min={50}
          max={2000}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="accent-emerald-400"
        />
      </label>

      <button
        onClick={handlePay}
        disabled={isProcessing || !email.trim()}
        className="mt-6 inline-flex rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>

      {receipt && (
        <div className="mt-5 rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-4 text-sm text-emerald-200">
          <p className="font-semibold">Payment Successful</p>
          <p className="mt-1">Reference: {receipt.ref}</p>
          <p>Amount Paid: R{receipt.amount}</p>
          <p className="mt-2 text-xs text-emerald-300/80">
            This is a frontend simulation for demo purposes.
          </p>
        </div>
      )}
    </DemoCard>
  );
}

function buildAssistantReply(input: string) {
  const value = input.toLowerCase();

  if (value.includes("hello") || value.includes("hi")) {
    return "Hey there. I can help with project scope, timeline, and tech stack suggestions.";
  }

  if (value.includes("price") || value.includes("cost") || value.includes("budget")) {
    return "For a solid estimate, share features, timeline, and integrations. I can break this into phases with milestone pricing.";
  }

  if (value.includes("tech") || value.includes("stack")) {
    return "I recommend Next.js + TypeScript + Tailwind for frontend speed, plus Firebase or Supabase for rapid backend setup.";
  }

  if (value.includes("deploy") || value.includes("hosting")) {
    return "A static portfolio can ship on Firebase Hosting or Vercel. API-heavy apps should run with server routes or cloud functions.";
  }

  return "Great prompt. If you share your goal and constraints, I can propose an implementation plan with steps and priorities.";
}

function ChatDemo() {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Welcome. Ask me about project planning, architecture, or deployment.",
    },
  ]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) {
      return;
    }

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: buildAssistantReply(trimmed) }]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <DemoCard>
      <h2 className="text-xl font-semibold text-white">AI Chat Demo</h2>
      <p className="mt-2 text-sm text-gray-300">
        Interactive chat with contextual replies and a realistic response delay.
      </p>

      <div className="mt-5 h-[340px] overflow-y-auto rounded-2xl border border-white/10 bg-black/40 p-4">
        <div className="space-y-3">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                message.role === "assistant"
                  ? "bg-sky-500/20 text-sky-100"
                  : "ml-auto bg-indigo-500/20 text-indigo-100"
              }`}
            >
              {message.text}
            </div>
          ))}
          {isTyping && (
            <div className="max-w-[85%] rounded-2xl bg-sky-500/20 px-4 py-3 text-sm text-sky-100">
              Assistant is typing...
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask something..."
          className="flex-1 rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-sky-400"
        />
        <button
          onClick={sendMessage}
          className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-sky-400"
        >
          Send
        </button>
      </div>
    </DemoCard>
  );
}

const wins: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board: Cell[]) {
  for (const [a, b, c] of wins) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function findCriticalMove(board: Cell[], mark: "X" | "O") {
  for (const [a, b, c] of wins) {
    const line: Cell[] = [board[a], board[b], board[c]];
    const markCount = line.filter((item) => item === mark).length;
    const emptyCount = line.filter((item) => item === null).length;

    if (markCount === 2 && emptyCount === 1) {
      if (board[a] === null) {
        return a;
      }
      if (board[b] === null) {
        return b;
      }
      if (board[c] === null) {
        return c;
      }
    }
  }
  return null;
}

function TicTacToeDemo() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [isThinking, setIsThinking] = useState(false);

  const winner = useMemo(() => getWinner(board), [board]);
  const isDraw = board.every((cell) => cell !== null) && !winner;
  const isLocked = Boolean(winner) || isDraw || isThinking;

  const makeAiMove = (nextBoard: Cell[]) => {
    const winningMove = findCriticalMove(nextBoard, "O");
    const blockingMove = findCriticalMove(nextBoard, "X");

    let move: number | null = winningMove ?? blockingMove;

    if (move === null && nextBoard[4] === null) {
      move = 4;
    }

    if (move === null) {
      const corners = [0, 2, 6, 8].filter((index) => nextBoard[index] === null);
      if (corners.length > 0) {
        move = corners[0];
      }
    }

    if (move === null) {
      const free = nextBoard
        .map((cell, index) => (cell === null ? index : -1))
        .filter((index) => index >= 0);
      if (free.length > 0) {
        move = free[0];
      }
    }

    if (move !== null) {
      const updated = [...nextBoard];
      updated[move] = "O";
      setBoard(updated);
    }

    setIsThinking(false);
  };

  const onCellClick = (index: number) => {
    if (board[index] || isLocked) {
      return;
    }

    const nextBoard = [...board];
    nextBoard[index] = "X";
    setBoard(nextBoard);

    if (getWinner(nextBoard) || nextBoard.every((cell) => cell !== null)) {
      return;
    }

    setIsThinking(true);
    setTimeout(() => makeAiMove(nextBoard), 450);
  };

  const status = winner
    ? winner === "X"
      ? "You win"
      : "AI wins"
    : isDraw
    ? "Draw"
    : isThinking
    ? "AI is thinking..."
    : "Your turn";

  return (
    <DemoCard>
      <h2 className="text-xl font-semibold text-white">Tic Tac Toe</h2>
      <p className="mt-2 text-sm text-gray-300">Play as X. The AI plays as O and actively blocks wins.</p>

      <div className="mt-5 grid w-full max-w-xs grid-cols-3 gap-2">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => onCellClick(index)}
            className="aspect-square rounded-xl border border-white/15 bg-black/50 text-2xl font-bold text-white transition hover:border-fuchsia-400"
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <p className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-200">{status}</p>
        <button
          onClick={() => {
            setBoard(Array(9).fill(null));
            setIsThinking(false);
          }}
          className="rounded-lg border border-white/20 px-3 py-2 text-sm text-white transition hover:bg-white/10"
        >
          Reset
        </button>
      </div>
    </DemoCard>
  );
}

function Experience3dDemo() {
  return (
    <DemoCard>
      <h2 className="text-xl font-semibold text-white">3D Perspective Playground</h2>
      <p className="mt-2 text-sm text-gray-300">Hover the scene to inspect layered depth and perspective transforms.</p>

      <div className="mt-8 flex justify-center">
        <div className="perspective-distant">
          <div className="relative h-64 w-64 rounded-3xl border border-white/20 bg-linear-to-br from-orange-500/40 to-indigo-500/40 shadow-2xl transition-transform duration-500 transform-3d hover:rotate-x-18 hover:-rotate-y-18">
            <div className="absolute inset-6 rounded-2xl border border-white/25 bg-black/35 translate-z-16" />
            <div className="absolute left-8 top-8 h-8 w-8 rounded-full bg-orange-300/80 blur-[2px] translate-z-10" />
            <div className="absolute bottom-10 right-10 rounded-lg border border-white/30 bg-white/15 px-3 py-2 text-xs text-white translate-z-14">
              Layered Depth
            </div>
          </div>
        </div>
      </div>
    </DemoCard>
  );
}

function ParticleDemo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const pointer = { x: -999, y: -999 };
    let animationFrame = 0;

    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      size: 1.4 + Math.random() * 2,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * window.devicePixelRatio);
      canvas.height = Math.floor(rect.height * window.devicePixelRatio);
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      particles.forEach((particle) => {
        particle.x = Math.min(particle.x, rect.width);
        particle.y = Math.min(particle.y, rect.height);
      });
    };

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const onLeave = () => {
      pointer.x = -999;
      pointer.y = -999;
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (const particle of particles) {
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          particle.vx -= dx * 0.00008;
          particle.vy -= dy * 0.00008;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= rect.width) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= rect.height) {
          particle.vy *= -1;
        }

        particle.vx *= 0.995;
        particle.vy *= 0.995;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(251, 191, 36, 0.85)";
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <DemoCard>
      <h2 className="text-xl font-semibold text-white">Particle Effects</h2>
      <p className="mt-2 text-sm text-gray-300">Move your cursor over the canvas to influence particle motion.</p>

      <canvas
        ref={canvasRef}
        className="mt-6 h-[360px] w-full rounded-2xl border border-white/10 bg-black/40"
      />
    </DemoCard>
  );
}

function AudioVisualizerDemo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<{
    context: AudioContext;
    stream: MediaStream;
    analyser: AnalyserNode;
    raf: number;
  } | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [running, setRunning] = useState(false);

  const stop = () => {
    const current = audioRef.current;
    if (!current) {
      return;
    }

    cancelAnimationFrame(current.raf);
    current.stream.getTracks().forEach((track) => track.stop());
    current.context.close();
    audioRef.current = null;
    setRunning(false);
  };

  const start = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const context = new AudioContext();
      const analyser = context.createAnalyser();
      analyser.fftSize = 128;

      const source = context.createMediaStreamSource(stream);
      source.connect(analyser);

      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }

      const draw = () => {
        const data = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(data);

        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "rgba(8, 11, 20, 0.95)";
        ctx.fillRect(0, 0, width, height);

        const barWidth = width / data.length;

        data.forEach((value, index) => {
          const barHeight = (value / 255) * (height - 20);
          const x = index * barWidth;
          const y = height - barHeight;
          const hue = 300 - index * 2.2;

          ctx.fillStyle = `hsla(${hue}, 90%, 60%, 0.95)`;
          ctx.fillRect(x + 1, y, Math.max(2, barWidth - 2), barHeight);
        });

        const raf = requestAnimationFrame(draw);
        if (audioRef.current) {
          audioRef.current.raf = raf;
        }
      };

      audioRef.current = {
        context,
        stream,
        analyser,
        raf: 0,
      };

      setRunning(true);
      draw();
    } catch {
      setError("Microphone permission was denied or unavailable.");
    }
  };

  useEffect(() => {
    return () => stop();
  }, []);

  return (
    <DemoCard>
      <h2 className="text-xl font-semibold text-white">Audio Visualizer</h2>
      <p className="mt-2 text-sm text-gray-300">
        Start the microphone stream to visualize live audio frequencies.
      </p>

      <canvas
        ref={canvasRef}
        width={960}
        height={280}
        className="mt-6 h-[280px] w-full rounded-2xl border border-white/10 bg-black"
      />

      <div className="mt-5 flex gap-3">
        {!running ? (
          <button
            onClick={start}
            className="rounded-xl bg-rose-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-rose-400"
          >
            Start Visualizer
          </button>
        ) : (
          <button
            onClick={stop}
            className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Stop
          </button>
        )}
      </div>

      {error && <p className="mt-3 text-sm text-rose-300">{error}</p>}
    </DemoCard>
  );
}

function QrGeneratorDemo() {
  const [text, setText] = useState("https://gradiate.co.za");
  const [size, setSize] = useState(220);
  const [fg, setFg] = useState("000000");
  const [bg, setBg] = useState("ffffff");

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    text || "https://example.com"
  )}&color=${fg}&bgcolor=${bg}`;

  return (
    <DemoCard>
      <h2 className="text-xl font-semibold text-white">QR Code Generator</h2>
      <p className="mt-2 text-sm text-gray-300">Customize content, size, and colors to generate a QR code instantly.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-gray-300 md:col-span-2">
          Text / URL
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="https://your-link.com"
            className="rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-violet-400"
          />
        </label>

        <label className="grid gap-2 text-sm text-gray-300">
          Size: {size}px
          <input
            type="range"
            min={120}
            max={360}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="accent-violet-400"
          />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="grid gap-2 text-sm text-gray-300">
            Foreground
            <input
              value={fg}
              onChange={(e) => setFg(e.target.value.replace("#", ""))}
              className="rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-white outline-none transition focus:border-violet-400"
            />
          </label>
          <label className="grid gap-2 text-sm text-gray-300">
            Background
            <input
              value={bg}
              onChange={(e) => setBg(e.target.value.replace("#", ""))}
              className="rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-white outline-none transition focus:border-violet-400"
            />
          </label>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-4">
        <Image
          src={url}
          alt="Generated QR code"
          width={size}
          height={size}
          unoptimized
          className="rounded-2xl border border-white/10 bg-white p-3"
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          Open Image In New Tab
        </a>
      </div>
    </DemoCard>
  );
}

function TerminalDemo() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "thandululo-terminal v1.0",
    "Type help to list commands.",
  ]);

  const execute = () => {
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    const [command, ...args] = trimmed.split(" ");
    const value = command.toLowerCase();

    if (value === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    let output: string | string[] = "Command not found. Type help.";

    if (value === "date") {
      output = new Date().toString();
    } else if (value === "echo") {
      output = args.join(" ") || "";
    } else if (terminalCommands[value]) {
      output = terminalCommands[value];
    }

    setLines((prev) => [
      ...prev,
      `$ ${trimmed}`,
      ...(Array.isArray(output) ? output : [output]),
    ]);
    setInput("");
  };

  return (
    <DemoCard>
      <h2 className="text-xl font-semibold text-white">Terminal Emulator</h2>
      <p className="mt-2 text-sm text-gray-300">Try commands like help, skills, projects, date, or echo hello.</p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black p-4 font-mono text-sm text-green-300">
        <div className="h-80 overflow-y-auto space-y-1">
          {lines.map((line, index) => (
            <p key={`${line}-${index}`} className="whitespace-pre-wrap wrap-break-word">
              {line}
            </p>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
          <span className="text-green-400">$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                execute();
              }
            }}
            className="flex-1 bg-transparent text-green-200 outline-none"
            placeholder="Enter command"
          />
          <button
            onClick={execute}
            className="rounded-lg border border-green-500/35 px-3 py-1 text-xs text-green-300 transition hover:bg-green-500/10"
          >
            Run
          </button>
        </div>
      </div>
    </DemoCard>
  );
}

export default function DemoRenderer({ slug }: DemoRendererProps) {
  switch (slug) {
    case "payment-integration":
      return <PaymentDemo />;
    case "ai-chat-assistant":
      return <ChatDemo />;
    case "tic-tac-toe":
      return <TicTacToeDemo />;
    case "experience-3d":
      return <Experience3dDemo />;
    case "particle-effects":
      return <ParticleDemo />;
    case "audio-visualizer":
      return <AudioVisualizerDemo />;
    case "qr-code-generator":
      return <QrGeneratorDemo />;
    case "terminal-emulator":
      return <TerminalDemo />;
    default:
      return null;
  }
}
