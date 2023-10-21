export default function SubmitButton({ loading, children }: { loading: boolean, children: any }) {
  return (
    <button
      type="submit"
      aria-disabled={loading}
      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      {children}
    </button>
  );
}