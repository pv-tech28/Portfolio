"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black/20 relative z-10">
      <div className="max-w-7xl mx-auto flex justify-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Pratha Varshney.
        </p>
      </div>
    </footer>
  );
}
