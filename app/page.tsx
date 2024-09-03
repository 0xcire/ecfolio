import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">Hi, I'm Eric 👋</h1>
      <span className="text-sm italic text-slate-700">{`Software Engineer w/ 9 months experience`}</span>
      <p className="mb-4">
        {`Welcome! I'm a passionate self-taught software engineer with just under a year of experience. I love building robust, scalable apps and tackling the unique challenges of both the front-end and back-end. Take a look at my work to see how I craft user-facing applications from html to sql to nginx!`}
        {/* {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`} */}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
