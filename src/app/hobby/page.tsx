import Link from 'next/link';
import { YouTubeEmbed } from "@next/third-parties/google";

const Hobby = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-yellow-100 gap-5">
      <div className="text-5xl underline underline-offset-[12px]">My Hobby</div>
      <div className="flex gap-5">
        <div className="w-52 rouded overflow-hidden shadow-lg bg-yellow-300">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">音楽</div>
            <div className="text-gray-700 text-base">
              <li>
                SKRYU
                <YouTubeEmbed videoid="S42d2MkQyIk"/>
              </li>
            </div>
          </div>
        </div>
      </div>
      <Link href="/">Homeへ</Link>
    </div>
  );
}

export default Hobby;