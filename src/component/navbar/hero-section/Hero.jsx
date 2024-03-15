
const Hero = () => {
  return (
    <div className="container mx-auto">
      <div
        className="hero min-h-screen  rounded-3xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/T8Bkmwt/banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex justify-center gap-6">
              <button className="btn btn-primary rounded-full">
                Explore Now
              </button>
              <button className="btn btn-primary rounded-full">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
