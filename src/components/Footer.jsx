const Footer = () => {
    return (
        <footer className="relative bottom-0 bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Code for footer was copied from <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.x.com/OjetokunF" target="_blank" className="hover:text-white me-4 md:me-6 text-gray-500 dark:text-gray-400">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.github.com/FemiOje" target="_blank" className="hover:text-white me-4 md:me-6 text-gray-500 dark:text-gray-400">Github</a>
                    </li>
                    <li>
                        <a href="https://t.me/jinius_1" target="_blank" className="hover:text-white text-gray-500 dark:text-gray-400">Telegram</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;