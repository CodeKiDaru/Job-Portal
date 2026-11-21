
const companies = [
    {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
        name: "Netflix",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
        name: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
        name: "Spotify",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    },
    {
        name: "Accenture",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/960px-Accenture.svg.png",
    },
];

const Companies = () => {
    return (
        <section className="w-full py-12 px-4 content-wrapper">
            <div className="content-wrapper">

                <h2 className="text-center text-2xl font-semibold text-gray-800 mb-3">
                    Top companies hiring through us
                </h2>

                <p className="text-center text-gray-500 mb-10">
                    Explore exciting career opportunities with leading companies
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10">

                    {companies.map((company) => (
                        <div
                            key={company.name}
                            className="flex items-center justify-center w-32 h-14 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                            title={company.name}
                        >
                            <img
                                src={company.logo}
                                alt={`${company.name} logo`}
                                loading="lazy"
                                className="max-w-full max-h-10 object-contain"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Companies;
