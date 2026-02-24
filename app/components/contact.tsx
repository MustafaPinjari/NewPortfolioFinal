export default function Contact() {
  return (
    <section 
      id="contact"
      className="relative h-screen w-screen py-10 px-12 md:px-32 xl:px-36 dark:bg-black dark:text-white bg-white  text-black"
    >
      <div className="flex flex-col justify-evenly h-5/6">
        <div>
          <h2 className="text-3xl md:text-6xl xl:text-8xl mb-8">
            Contact
          </h2>
          <p className="text-3xl md:text-6xl xl:text-8xl">
            Let&apos;s make something <br></br> great together
          </p>
        </div>
        <div className="text-3xl md:text-6xl xl:text-8xl text-end space-y-4">
          <div>
            <a 
              href="mailto:mustafapinjari344@gmail.com"
              className="underline hover:text-blue-500 transition-colors"
            >
              mustafapinjari344@gmail.com
            </a>
          </div>
          <div>
            <a 
              href="tel:+918799879228"
              className="hover:text-blue-500 transition-colors"
            >
              +91 8799879228
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
