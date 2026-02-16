import { FooterProperties } from "./Footer.types";

const Footer = ({ authorName, year, copyright, links }: FooterProperties) => {

    return (
        <>
            <footer
                className='w-full px-6 py-4 border-t bg-gray-100 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400'>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex gap-4 flex-wrap">
                        {links?.map(({ label, url }) => (
                            <a
                                key={url}
                                href={url}
                                className="hover:text-blue-600 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                    
                    {copyright && (
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                            © {year} {copyright}
                        </div>
                    )}
                </div>
            </footer>

        </>
    );
};

export default Footer;