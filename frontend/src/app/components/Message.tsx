export default function Message({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
      <p className="flex justify-center items-center text-purple-700 p-2">
        {message}
      </p>
    </div>
  );
}
