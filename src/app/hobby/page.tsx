import Link from 'next/link';

export default function Hoby() {
  return (
    <div className="flex flex-col min-h-screen item-center justify-center">
      <div className="">My Hoby</div>
      <Link href="/">Homeへ</Link>
    </div>
  );
}
