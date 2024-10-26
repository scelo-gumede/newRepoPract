// app/metadata.ts
import { Metadata } from "next";

export  const metadata: Metadata = {
    title: {
        default: "My blog",
        template: "%s - My awesome blog",
    },
    description: "The IT company that is beautiful",
    keywords: "blog, IT company, tech, development",
    authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
    openGraph: {
        title: "My blog",
        description: "The IT company that is beautiful",
        url: "https://yourblogurl.com",
        images: [
            {
                url: "https://yourimageurl.com/image.jpg",
                width: 800,
                height: 600,
                alt: "An image related to the blog",
            },
        ],
    },
};


export const dude ={
    name : "what"
}