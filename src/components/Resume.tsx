import ResumeThumbnail from "../assets/thumbnail.png"

const Resume = () => {
    return(
        <main 
            id="resume" 
            className="bg-black text-white relative min-h-screen w-full pt-16 md:pt-24 px-8 md:px-16 py-8"
        >
            <section className="flex flex-col md:flex-row justify-center items-start  text-white ">
                {/* Left Column */}
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold mb-2">Resume</h2>
                    <p className="text-md md:text-sm italic">
                    Professional experience and qualifications.
                    </p>
                </div>

                {/* Right Column */}
                <div className="md:w-1/2 flex flex-col items-center">
                    {/* Resume Thumbnail */}
                    <div className="w-full md:w-3/4 h-96 flex items-center justify-center mb-4">
                    <img 
                        src={ResumeThumbnail}
                        alt="Resume Thumbnail" 
                        className="object-contain h-full"
                    />
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                    <button 
                        className="w-full bg-green-600 hover:bg-green-700 rounded"
                    >
                        Download PDF
                    </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Resume;
