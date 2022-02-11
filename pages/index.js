import {
  Hero,
  Intro,
  Streamlined,
  Header,
  Footer,
  Features,
  Tools,
  Future,
  Devtools,
  Product,
} from "components";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <Product />
      <Intro />
      <Streamlined />
      <Devtools />
      <Features />
      <Tools />
      <Future />
      <Footer />
    </>
  );
}
