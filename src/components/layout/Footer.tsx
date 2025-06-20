export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              DevBlog
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A blog about web development, programming, and tech.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Subscribe
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Stay updated with the latest posts
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} DevBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
