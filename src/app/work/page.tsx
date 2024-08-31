import Link from 'next/link';

export default function Work() {
  return (
    <div className="flex flex-col min-h-screen item-center justify-center">
      <div className="">My Work</div>
      <Link href="/">Homeへ</Link>
    </div>
  );
}
