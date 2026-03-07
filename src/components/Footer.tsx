export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} ConsultPro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
