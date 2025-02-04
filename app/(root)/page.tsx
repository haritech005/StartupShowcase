import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      author: {
        _id: 1,
        name: "Hariharan",
      },
      description:
        "this is description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum nihil iste deserunt perspiciatis illo quisquam, sint exercitationem necessitatibus ullam, ipsa distinctio facere atque ea alias earum. Culpa, soluta dolorem.",
      category: "Robots",
      title: "WE Robots",
      image: "https://i.ytimg.com/vi/Mu-eK72ioDk/maxresdefault.jpg",
      views: 45,
    },
  ];
  return (
    <>
      <section className="pink_container">
        <p className="tag">Pitch vote and grow</p>
        <h1 className="heading">
          Pitch Your Startups, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
