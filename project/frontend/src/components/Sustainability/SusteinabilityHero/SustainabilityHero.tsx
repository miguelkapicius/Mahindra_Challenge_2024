import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
            {reverse ? (
                <article className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
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
                        <h3 className="text-3xl md:text-4xl font-display">
                            {title}
                        </h3>
                        <p className="md:text-xl">{description}</p>
                        {link && (
                            <Link
                                target="_blank"
                                className="block w-max"
                                to={link}
                            >
                                <Button>Learn More</Button>
                            </Link>
                        )}
                    </div>
                </article>
            ) : (
                <article className="flex flex-col-reverse md:flex-row md:items-center gap-4 md:gap-12">
                    <div
                        className={`space-y-4 md:space-y-6 ${
                            image ? "md:w-1/2" : "w-full"
                        }`}
                    >
                        <h3 className="text-3xl md:text-4xl font-display">
                            {title}
                        </h3>
                        <p className="md:text-xl">{description}</p>
                        {link && (
                            <Link
                                target="_blank"
                                className="block w-max"
                                to={link}
                            >
                                <Button>Learn More</Button>
                            </Link>
                        )}
                    </div>
                    {image && (
                        <img
                            className="md:w-1/2 rounded"
                            src={image}
                            alt={title}
                        />
                    )}
                </article>
            )}
            <hr />
        </>
    );
}
