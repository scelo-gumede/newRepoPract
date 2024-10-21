import { benefit } from "../data";

export default function Benefits() {
    return (
        <section className="px-16 py-20 space-y-10 bg-whiteColor">
            <div>
                <p className="text-center text-4xl lg:text-6xl font-bold tracking-wider leading-snug">
                    BENEFITS OF WORKING WITH US
                </p>
                <p className="text-center text-textColor2">
                    Don&apos;t just take our word for it. Hear what our clients have to say about their experience
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {benefit.map((item, i) => {
                    return (
                        <div key={i} className="flex space-x-5 gap-5 justify-center">
                            <p>
                                {<item.icon className="text-green" fontSize="large" />}
                            </p>
                            <p>{item.label}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
