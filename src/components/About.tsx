const About = () => {
  return (
    <section id="about" className="pt-[10dvh]">
      {/* block 1 */}
      <div className="min-h-[calc(100dvh-10dvh)] md:min-h-[42dvh] bg-gray-600 flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-12 px-12 md:px-24 text-white">
        <div className="w-full md:w-2/6 text-center md:text-left">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-md md:text-sm mt-2 italic">Myself, unmasked.</p>
        </div>
        <div className="w-full md:w-4/6 prose max-w-none text-justify md:text-left">
          <p className="leading-loose">
            A results-driven software developer with a versatile technical skill set, 
            keen design sensibility, and meticulous attention to detail. 
            Adept at Test-Driven Development practices and known for building strong, 
            empathetic relationships with clients and stakeholders. 
            Thrives in collaborative, hands-on environments and is passionate about 
            delivering innovative, high-impact solutions.
          </p>
        </div>
      </div>

      {/* block 2 */}
      <div className="min-h-[calc(100dvh-10dvh)] md:min-h-[48dvh] bg-gray-100 flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-12 px-12 md:px-24 text-black">
        <div className="w-full md:w-2/6 text-center md:text-left">
          <h2 className="text-3xl font-bold">Outside of work...</h2>
          <p className="text-md md:text-sm mt-2 italic">A personal touch.</p>
        </div>
        <div className="w-full md:w-4/6 prose max-w-none space-y-8 text-justify md:text-left">
          <p className="leading-loose">
            I'm someone who enjoys movement, novelty, and moments that make life feel a 
            little fuller; the type to say yes to the next adventure with the people I 
            care about. I like going on road trips, eating good food, indulging in a nice 
            cup of coffee, and getting lost in documentaries or movies on YouTube. 
            I also like learning for its own sake--feeling challenged, being part of events, 
            and trying my hand at competitive environments always carries a unique thrill.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;