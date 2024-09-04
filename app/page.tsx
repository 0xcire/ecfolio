import { BlogPosts } from "./components/posts";
import { HOME_CONTENT } from "./utils/enums";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">{HOME_CONTENT.HEADING}</h1>
      <span className="text-sm italic text-slate-700">{`Software Engineer w/ 9 months experience`}</span>
      <p className="mb-4">
        {`Welcome! I'm a passionate self-taught software engineer with just under a year of experience. I love building robust, scalable apps and tackling the unique challenges of both the front-end and back-end. Take a look at my work to see how I craft user-facing applications from html to sql to nginx!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
