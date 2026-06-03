export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <p className="text-sm text-text-tertiary">
          © {new Date().getFullYear()} Estefania Tortoledo
        </p>
        <p className="text-sm text-text-tertiary">Portfolio placeholder</p>
      </div>
    </footer>
  );
}
