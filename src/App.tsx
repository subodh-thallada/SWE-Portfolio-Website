import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* Header/Banner */}
      <header className="w-full flex flex-col items-center py-6 border-b border-neutral-800">
        <div className="flex items-center justify-between w-full max-w-6xl px-4">
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="david haz initials" className="h-10 w-10" />
            <span className="text-xl font-bold tracking-tight">David Haz</span>
          </div>
          <nav className="flex gap-8 text-lg">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="https://davidhaz.blog/" target="_blank" rel="noopener noreferrer" className="hover:underline">Blog</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-4xl mx-auto text-center py-16" id="hero">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Equal parts creative developer & designer</h1>
        <p className="text-lg md:text-2xl text-neutral-400">Building high quality web experiences through clean code and thoughtful design.</p>
      </section>

      {/* Stats Carousel Placeholder */}
      <section className="w-full max-w-4xl mx-auto py-8" id="stats-carousel">
        <div className="flex justify-center gap-8">
          {/* TODO: Implement carousel logic and animation */}
          <div className="text-center">
            <h2 className="text-3xl font-bold">132</h2>
            <p className="text-neutral-400">Liters of coffee consumed this year</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">0K</h2>
            <p className="text-neutral-400">Total lines of code written</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">3,744</h2>
            <p className="text-neutral-400">Critical bugs fixed ...and counting</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="text-neutral-400">Major projects delivered successfully</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">160K</h2>
            <p className="text-neutral-400">Developers inspired worldwide</p>
          </div>
        </div>
      </section>

      {/* Articles/Projects Carousel Placeholder */}
      <section className="w-full max-w-4xl mx-auto py-8" id="articles-carousel">
        <div className="flex justify-center gap-8">
          {/* TODO: Implement carousel logic and animation */}
          <div className="text-center max-w-xs">
            <img src="/article1.svg" alt="WebGL shaders" className="mx-auto mb-2" />
            <p className="text-neutral-400">Getting started with WebGL shaders in JavaScript.</p>
          </div>
          <div className="text-center max-w-xs">
            <img src="/article2.svg" alt="Next.JS routing" className="mx-auto mb-2" />
            <p className="text-neutral-400">Mastering dynamic routing in Next.JS, step by step.</p>
          </div>
          <div className="text-center max-w-xs">
            <img src="/article3.svg" alt="Tailwind CSS design system" className="mx-auto mb-2" />
            <p className="text-neutral-400">Building a responsive design system with Tailwind CSS.</p>
          </div>
          <div className="text-center max-w-xs">
            <img src="/article4.svg" alt="React 19 performance" className="mx-auto mb-2" />
            <p className="text-neutral-400">Performance optimization for React 19 - all you need.</p>
          </div>
          <div className="text-center max-w-xs">
            <img src="/article5.svg" alt="Scalable React apps" className="mx-auto mb-2" />
            <p className="text-neutral-400">The 7 steps of building scalable React apps.</p>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="w-full max-w-4xl mx-auto py-8" id="projects">
        <h2 className="text-2xl font-bold mb-6">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://reacthaiku.dev/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition">
            <h3 className="text-xl font-semibold">Haiku</h3>
            <p className="text-neutral-400">React Utility Library</p>
          </a>
          <a href="https://reactbits.dev/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition">
            <h3 className="text-xl font-semibold">React Bits</h3>
            <p className="text-neutral-400">Animated UI Components</p>
          </a>
          <a href="https://ip-tracker-dhdev.netlify.app" target="_blank" rel="noopener noreferrer" className="block p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition">
            <h3 className="text-xl font-semibold">IP Wire</h3>
            <p className="text-neutral-400">Straightforward IP Tracker</p>
          </a>
          <a href="https://github.com/DavidHDev" target="_blank" rel="noopener noreferrer" className="block p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition">
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p className="text-neutral-400">See More On</p>
          </a>
        </div>
      </section>

      {/* About/Contact Section */}
      <section className="w-full max-w-4xl mx-auto py-8" id="about">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="mb-4 text-neutral-400">I'm a web developer & designer based in Cluj-Napoca! I specialize in Frontend Engineering, focusing on building high quality web experiences through clean code and thoughtful design.</p>
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="px-4 py-2 bg-neutral-800 rounded">Web development</span>
          <span className="px-4 py-2 bg-neutral-800 rounded">Interface design</span>
          <span className="px-4 py-2 bg-neutral-800 rounded">3D web experiences</span>
          <span className="px-4 py-2 bg-neutral-800 rounded">Creative coding</span>
          <span className="px-4 py-2 bg-neutral-800 rounded">Solid engineering</span>
        </div>
        <a href="#contact" className="inline-block px-6 py-3 bg-blue-600 rounded text-white font-semibold hover:bg-blue-500 transition">✦ Get in touch ✦</a>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-4xl mx-auto py-8" id="contact">
        <h2 className="text-2xl font-bold mb-4">Wanna create something awesome together?</h2>
        <a href="mailto:contact@davidhaz.com" className="inline-block px-6 py-3 bg-pink-600 rounded text-white font-semibold hover:bg-pink-500 transition mb-2">✦ Let's talk ✦</a>
        <p className="text-neutral-400">Don't like flashy buttons? Reach out at <a href="mailto:contact@davidhaz.com" className="underline">contact@davidhaz.com</a></p>
      </section>

      {/* Footer/Outro */}
      <footer className="w-full text-center py-6 border-t border-neutral-800 text-neutral-500 mt-8">
        &copy; {new Date().getFullYear()} David Haz. Clone for educational purposes.
      </footer>
    </div>
  );
}

export default App;
