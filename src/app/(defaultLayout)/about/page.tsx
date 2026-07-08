export default function AboutPage() {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image & Stats */}
        <div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-gradient rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition" />
            <img 
              // src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800" 
              src="/images/about_image.jpg"
              alt="About Me" 
              className="relative rounded-2xl w-full grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-card p-6 rounded-2xl text-center">
              <h4 className="text-3xl font-bold text-primary">3+</h4>
              <p className="text-muted text-sm">Years Experience</p>
            </div>
            <div className="bg-card p-6 rounded-2xl text-center">
              <h4 className="text-3xl font-bold text-primary">40+</h4>
              <p className="text-muted text-sm">Projects Completed</p>
            </div>
          </div>
        </div>

        {/* Right: Story */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold bg-brand-gradient bg-clip-text text-muted inline-block">
            My Journey
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            I am a self-taught Full Stack Developer with a passion for building clean, 
            performant, and user-centric web applications. My journey started in 2022 
            with curiosity about how the web works.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            Today, I specialize in the T3 Stack (Next.js, TypeScript, Prisma) and 
            focus on delivering high-quality SaaS products that solve real-world problems.
          </p>
          
          <div className="pt-6 space-y-4">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white font-medium">Location</span>
              <span className="text-muted">Dhaka, Bangladesh</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white font-medium">Email</span>
              <span className="text-muted">sarowar2287@gmail.com</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white font-medium">Education</span>
              <span className="text-muted">BSc in Computer Science Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}