"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login", { email, password });
  };

  useEffect(() => {
  const canvas = document.getElementById("web3-bg") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  const nodes = Array.from({ length: 60 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
  }));

  function animate() {
    ctx.clearRect(0, 0, w, h);

    // DRAW LINES
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];

        const dist = Math.hypot(a.x - b.x, a.y - b.y);

        if (dist < 150) {
          const alpha = 1 - dist / 150;

          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.6})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // DRAW POINTS / DOTS
    nodes.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,255,255,0.9)";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#00ffff";
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    });

    requestAnimationFrame(animate);
  }

  animate();
}, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
  {/* WEB3 NETWORK BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none">
    <canvas id="web3-bg" className="w-full h-full"></canvas>
  </div>
      
      {/* NEON GLOW WRAPPER */}
  <div className="relative p-[3px] rounded-2xl neon-wrapper">
      <Card className="w-full max-w-sm bg-black/80 border border-gray-800 shadow-xl shadow-white rounded-2xl backdrop-blur-md">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl font-semibold text-white tracking-wide">
            Selamat Datang
          </CardTitle>
          <CardDescription className="text-gray-400">
            Masukkan Email dan Password Anda
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-gray-300 font-medium tracking-wide"
              >
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="masukkan email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-9 bg-transparent border-gray-700 text-white placeholder-gray-500 focus-visible:ring-1 focus-visible:ring-white"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-gray-300 font-medium tracking-wide"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="masukkan password anda"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-9 pr-10 bg-transparent border-gray-700 text-white placeholder-gray-500 focus-visible:ring-1 focus-visible:ring-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Tombol Login */}
            <Button
              type="submit"
              className="w-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-200 rounded-lg"
            >
              Masuk
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 text-center text-sm text-gray-400">
          <p>
            Lupa password?{" "}
            <a href="/reset" className="text-white hover:underline font-medium">
              Atur Ulang
            </a>
          </p>
          <p>
            Belum punya akun?{" "}
            <a
              href="/daftar"
              className="text-white hover:underline font-medium"
            >
              Daftar Sekarang
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
    </div>
  );
}
