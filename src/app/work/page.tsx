import Link from 'next/link';

const Work = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
        <div className="flex-col items-center justify-center">
          <div className="text-5xl underline underline-ofset-[12px] flex items-center justify-center">My Work</div>
          <div className="flex items-center justify-between border-2 border-solid border-yellow-300 p-3 rounded-lg ">
            <div className="flex text-xl">技術スタック</div>
            <div className="text-xl gap-5">
              <div>
                <div className="text-xl">●Java</div>
                <p>新人研修でJavaを学習し、そのまま現場へ</p>
                <p>ほぼテスト業務しかできていない...</p>
              </div>
              <div>
                <div className="text-xl">●React</div>
                <p>勉強中！</p>
              </div>
            </div>
          </div>
            <Link className="flex items-center justify-center" href="/">Homeへ</Link>
        </div>
    </div>
  );
}

export default Work;