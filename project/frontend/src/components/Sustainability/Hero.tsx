import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function SustainabilityHero({
    title,
    description,
    image,
    reverse = false,
    link,
}: {
    title: string;
    description: string;
    image?: string;
    reverse?: boolean;
    link?: string;
}) {
    return (
        <>
            <article className="flex flex-col md:flex-row md:items-center space-y-4 md:gap-12">
                {reverse ? (
                    <>
                        {image && (
                            <img
                                className="md:w-1/2 rounded"
                                src={image}
                                alt={title}
                            />
                        )}
                        <div
                            className={`space-y-4 md:space-y-6 ${
                                image ? "md:w-1/2" : "w-full"
                            }`}
                        >
                            <h3 className="text-3xl md:text-5xl font-display">
                                {title}
                            </h3>
                            <p className="md:text-xl">{description}</p>
                            {link && (
                                <Button>
                                    <Link target="_blank" to={link}>
                                        Learn More
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className={`space-y-4 md:space-y-6 ${
                                image ? "md:w-1/2" : "w-full"
                            }`}
                        >
                            <h3 className="text-3xl md:text-5xl font-display">
                                {title}
                            </h3>
                            <p className="md:text-xl">{description}</p>
                            {link && (
                                <Button>
                                    <Link target="_blank" to={link}>
                                        Learn More
                                    </Link>
                                </Button>
                            )}
                        </div>
                        {image && (
                            <img
                                className="md:w-1/2 rounded"
                                src={image}
                                alt={title}
                            />
                        )}
                    </>
                )}
            </article>
            <hr />
        </>
    );
}
