import { PostCard } from "../components/posts/PostCard";

// Exemplo de dados (em um projeto real viriam de uma API)
const mockPosts = [
  {
    id: "1",
    title: "Getting Started with React 19",
    subtitle: "Learn about the newest features in React's latest version",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    likes: 42,
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    subtitle: "Tips and tricks to level up your Tailwind skills",
    imageUrl:
      "https://images.unsplash.com/photo-1618788372246-79faff717c5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    likes: 28,
  },
  {
    id: "3",
    title: "TypeScript Best Practices",
    subtitle: "Write more maintainable and bug-free code with these patterns",
    imageUrl:
      "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    likes: 35,
  },
];

export function HomePage() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Latest Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured Categories
          </h2>
          <a
            href="/categories"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["React", "TypeScript", "CSS", "Web Development"].map((category) => (
            <a
              key={category}
              href={`/category/${category.toLowerCase().replace(" ", "-")}`}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow"
            >
              <span className="text-gray-900 dark:text-white font-medium">
                {category}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
