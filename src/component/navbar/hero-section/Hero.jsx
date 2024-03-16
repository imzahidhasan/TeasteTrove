const Hero = () => {
  return (
    <div className="container mx-auto my-5">
      <div
        className="hero min-h-screen  rounded-3xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/T8Bkmwt/banner.png)",
        }}
      >
        <div className="bg-[#150B2BE6] rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-6xl font-bold">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ <br />
              coding problems to become an exceptionally well world-class
              Programmer.
            </p>
            <div className="flex justify-center gap-6">
              <button className="btn bg-[#0BE58A] border-none text-base text-[#150B2B] rounded-full">
                Explore Now
              </button>
              <button className="btn border-white btn-ghost text-base rounded-full">
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
