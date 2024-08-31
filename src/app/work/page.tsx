import Link from 'next/link';

const Work = () => {
  return (
    <div className="flex flex-col min-h-screen item-center pt-10 bg-yellow-50 gap-5">
      <div className="text-5xl underline underline-ofset-[12px]">My Work</div>
      <div className="w-1/2 flex items-center justify-between border-2 border-solid border-yellow-300 p-3 rouded-lg">
        <div className="flex text-xl">技術スタック</div>
        <div className="text-xl gap-5">
          <div className="text-xl">●Java</div>
          <p>研修でJavaを学習し、そのまま現場へ</p>
          <p>開発工程が終わりかけの時期の参画だったので、ほとんど開発できず...</p>
        </div>
        <div className="text-xl gap-5">
          <div className="text-xl">●React</div>
          <p>勉強中！</p>
        </div>
      </div>
      <Link href="/">Homeへ</Link>
    </div>
  );
}

export default Work;