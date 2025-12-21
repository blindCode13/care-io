import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <h2 className="font-bold text-8xl text-(--primary-color)">404</h2>
      <div className="text-center">
        <h2 className="font-bold text-2xl mb-2">Page not found!</h2>
        <p>The page you’re trying to access doesn’t exist<br/>or may have been moved.</p>
      </div>
      <Link href="/" className="btn-primary">Go back home</Link>
    </div>
  );
};

export default NotFound;