export function BookSkeleton() {
  const bookCards = Array.from({ length: 10 });

  return (
    <>
      {bookCards.map((_, index) => (
        <div
          key={index}
          className="animate-pulse-custom h-16 w-64 animate-pulse rounded-md bg-gray-300"
        ></div>
      ))}
    </>
  );
}
