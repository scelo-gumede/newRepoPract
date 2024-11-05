
import AboutUsHome from "./components/AboutUsHome"
import Details from "./components/Details"
import Form from "./components/Form"
import Modal from "./components/form/Modal"
import Hero from "./components/Hero"
import ItSolution from "./components/ItSolution"
import OurPortfolio from "./components/OurPortfolio"
import Recognition from "./components/Recognitions"
import Team from "./components/Team"
import Head from "next/head"
import { Metadata } from "next"


export const metadata: Metadata={
  title: {
    default: "Regular Pages - Your Digital Marketing Experts",
    template: "%s - Regular Pages | Transforming Your Online Presence",
  },
  description: "At Regular Pages, we specialize in tailored Website development,SEO and digital marketing solutions that drive traffic, increase engagement, and boost conversions. Let us help you elevate your brand and achieve your business goals in the digital landscape."

  
}


export default function Home(){
  return (
    <>
    <Head>
                <title>home | Regular pages </title>
                <meta name="description" content="Welcome to regular pages,software development company specializing in innovative website design, custom web development, digital marketing, and SEO solutions to elevate your business online." />

                <meta name="keywords" content="software development, website design, web development, digital marketing, SEO, custom software solutions, online presence, small business technology, innovative web solutions, technology consulting" />

                <meta name="msvalidate.01" content="CF926693516941D2542C86EFAA6D8262" />
                <meta property="og:title" content="RegularPages: Where Web Development Meets Innovation" />
                <meta property="og:description" content="software development, website design, web development, digital marketing, SEO, custom software solutions, online presence, small business technology, innovative web solutions, technology consulting" />
                <meta property="og:url" content="https://regularpages.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card data */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Regular pages" />
              <meta name="twitter:description" content="software development, website design, web development, digital marketing, SEO, custom software solutions, online presence, small business technology, innovative web solutions, technology consulting" />
              <meta name="twitter:image" content="https://regularpages.com/opengraph-image.png" />

    </Head>
    <main>
      <Modal />
      <Hero />
      <AboutUsHome value={true}/>
      <ItSolution />
      <OurPortfolio />
      <Recognition />
      <Team value={false}/>
      <Form />
      <Details />
      </main>
    </>
  )
}