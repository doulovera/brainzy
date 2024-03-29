export default function Comments ({ comments }: { comments: string }) {
  return (
    <section className="mt-6">
      <label htmlFor="comment" className="block mb-2 text-md font-medium text-white">Your comments about the Movie/Show</label>
      <textarea
        id="comment"
        rows={12}
        className="block p-2.5 w-full text-md rounded-lg border bg-zinc-900 border-gray-600 placeholder-gray-400 text-white focus:outline-none"
        placeholder="Write your thoughts here..."
        defaultValue={comments}
      ></textarea>
    </section>
  )
}
