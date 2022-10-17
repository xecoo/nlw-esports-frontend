export function GameBanner() {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Warcraft</strong>
            <span className="text-zinc-300 text-sm mt-1">4 anúncions</span>
          </div>
        </a>
  )
}