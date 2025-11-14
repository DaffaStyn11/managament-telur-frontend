"use client";

import { useState } from "react";
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
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
  );
}
