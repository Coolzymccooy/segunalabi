export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12">
      {children}
    </div>
  );
}
