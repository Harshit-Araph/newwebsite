import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-black px-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-serif text-brand-gold/20 mb-4">404</p>
        <h1 className="text-2xl font-serif text-brand-white mb-4">Page not found</h1>
        <p className="text-brand-gray mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-black text-sm font-medium rounded-sm hover:bg-brand-gold-light transition-all duration-300"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
