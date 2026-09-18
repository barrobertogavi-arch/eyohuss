import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-5 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">404</p>
      <h1 className="text-4xl font-black">This page is not in the signal map.</h1>
      <p className="max-w-md text-muted-foreground">
        The content you requested does not exist in the EYOHUSS catalog or has moved.
      </p>
      <Link href="/" className="rounded-xl bg-primary px-4 py-2 font-medium text-primary-foreground">
        Return home
      </Link>
    </main>
  );
}
