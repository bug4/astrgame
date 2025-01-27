import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Gamepad2, Rocket, Loader2, Sparkles, Twitter, MessageCircle, ExternalLink, Coins } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0a0a1f]">
      {/* Loading Screen */}
      <div className={`fixed inset-0 z-50 bg-[#0a0a1f] transition-opacity duration-1000 flex items-center justify-center ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative">
          {/* Animated Rings */}
          <div className="absolute inset-0 m-auto w-48 h-48 animate-ping-slow rounded-full bg-cyan-500/20"></div>
          <div className="absolute inset-0 m-auto w-48 h-48 animate-ping-slower rounded-full bg-blue-500/20"></div>
          
          {/* Center Content */}
          <div className="relative flex flex-col items-center z-10 p-16">
            <Rocket className="w-16 h-16 text-cyan-400 animate-bounce" />
            <h2 className="mt-8 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Loading Space
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
              <span className="text-cyan-200/80 text-sm">Preparing for launch...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Game Title and Description */}
      <div className={`fixed top-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="relative flex flex-col items-center">
          <div className="flex items-center gap-4 bg-black/20 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                ASTRO GAME
              </h1>
              <p className="text-sm text-cyan-200/60 tracking-widest mt-1">$ASTR</p>
            </div>
          </div>
          <div className="mt-4 max-w-lg text-center bg-black/20 backdrop-blur-md p-4 rounded-xl border border-white/10">
            <p className="text-cyan-200/80">
              Embark on an epic space adventure! Collect crystals, dodge obstacles, and become the ultimate cosmic explorer in this thrilling play-to-earn experience on Solana.
            </p>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"></div>
        </div>
      </div>

      {/* Main Content */}
      <Spline 
        scene="https://prod.spline.design/pXP5NYFSVko-UJ-X/scene.splinecode"
        style={{ 
          width: '100vw', 
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        onLoad={() => {
          setTimeout(() => setIsLoading(false), 1000);
        }}
      />
      
      {/* Controls Guide */}
      <div className={`fixed left-8 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-2xl transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex items-center gap-3 mb-8">
          <Gamepad2 className="w-8 h-8 text-cyan-400" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Controls</h2>
        </div>
        
        <div className="space-y-8">
          {/* WASD Keys */}
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-2 w-fit">
              <div className="col-start-2">
                <kbd className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-lg border border-white/20 font-bold text-cyan-400 text-xl shadow-lg hover:bg-white/10 transition-all">W</kbd>
              </div>
              <div className="col-start-1 col-end-4 flex gap-2 mt-2">
                <kbd className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-lg border border-white/20 font-bold text-cyan-400 text-xl shadow-lg hover:bg-white/10 transition-all">A</kbd>
                <kbd className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-lg border border-white/20 font-bold text-cyan-400 text-xl shadow-lg hover:bg-white/10 transition-all">S</kbd>
                <kbd className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-lg border border-white/20 font-bold text-cyan-400 text-xl shadow-lg hover:bg-white/10 transition-all">D</kbd>
              </div>
            </div>
            <span className="text-base text-cyan-200/80 ml-1">Movement</span>
          </div>

          {/* Space Bar */}
          <div className="flex flex-col gap-3">
            <kbd className="w-48 h-14 flex items-center justify-center bg-white/5 rounded-lg border border-white/20 font-bold text-cyan-400 text-xl shadow-lg hover:bg-white/10 transition-all">
              Space
            </kbd>
            <div className="flex items-center gap-2 ml-1">
              <span className="text-base text-cyan-200/80">Jump</span>
              <Rocket className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl -top-24 -left-12"></div>
        <div className="absolute -z-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -bottom-24 -right-12"></div>
      </div>

      {/* Social Links and Buy Button */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://x.com/AstroGameSOL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 text-cyan-400 hover:bg-white/5 transition-all group"
            >
              <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Twitter</span>
            </a>
            <a 
              href="https://t.me/astrogamesol" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 text-cyan-400 hover:bg-white/5 transition-all group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Telegram</span>
            </a>
          </div>

          {/* Buy Button */}
          <a 
            href="https://pump.fun" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
          >
            <Coins className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span className="text-lg">Buy $ASTR</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 blur-xl opacity-50 -z-10 group-hover:opacity-75 transition-opacity"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;