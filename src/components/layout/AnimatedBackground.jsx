// components/layout/AnimatedBackground.jsx

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-50/20 rounded-full blur-3xl animate-pulse delay-500" />
    </div>
  );
}