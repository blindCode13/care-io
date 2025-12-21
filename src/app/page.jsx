import Link from "next/link";


export default function Home() {
  return (
    <div className="p-top global-px">
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-6xl mb-4">
            Trusted Care for the<br/>
            People <span className="text-(--primary-color)">You Love</span>
          </h1>
          <p>Reliable, compassionate care for children, elders, and family members<br/>right where they feel safest: at home.</p>
        </div>
        <Link href="/" className="btn-primary">Book a service</Link>
      </div>
    </div>
  );
}
