interface PostCardProps {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  likes: number;
}

export function PostCard({
  id,
  title,
  subtitle,
  imageUrl,
  likes,
}: PostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <a href={`/posts/${id}`}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{subtitle}</p>

          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{likes}</span>
          </div>
        </div>
      </a>
    </article>
  );
}
