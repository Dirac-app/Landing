/** Full-bleed break between major page acts */
export function ActDivider() {
  return (
    <div className="relative w-full h-[2px] bg-black" aria-hidden>
      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.05) 12%, rgba(249,115,22,0.14) 50%, rgba(255,255,255,0.05) 88%, transparent 100%)",
        }}
      />
    </div>
  );
}
