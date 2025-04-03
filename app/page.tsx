import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import FeatureCard from "@/components/feature-card"

export default function Home() {
  const features = [
    {
      title: "AI-Powered Crop Recommendations",
      description: "Suggest the best crops to grow based on soil type, weather and location.",
      icon: "seedling",
    },
    {
      title: "Soil Health Monitoring",
      description: "Upload soil test data or images for AI-based analysis and recommendations.",
      icon: "microscope",
    },
    {
      title: "Pest & Disease Detection",
      description: "Upload images of crops for AI-based pest and disease diagnosis with treatment suggestions.",
      icon: "bug",
    },
    {
      title: "Automated Irrigation Management",
      description: "AI can recommend optimal watering schedules based on weather and soil moisture data.",
      icon: "droplet",
    },
    {
      title: "AI-Generated Market Trends",
      description: "Provide price forecasts for crops based on historical and real-time market data.",
      icon: "trending-up",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
            $
          </div>
          <span className="font-semibold text-lg">AI-griculture</span>
        </div>
        <div className="hidden md:flex gap-6">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Contact</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-600 py-20 px-4">
        <div className="container mx-auto text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-6">
            Revolutionizing Farming with AI for Better Yields and Financial Stability
          </h1>
          <p className="text-xl max-w-3xl mb-10 text-green-50">
            Empowering farmers with innovative tools, AI-driven insights, and financial support to maximize crop yields,
            increase market value, and ensure a sustainable future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-green-400 hover:bg-green-500 text-white font-medium px-8 py-6 text-lg rounded-full">
              Login
            </Button>
            <Button className="bg-white hover:bg-gray-100 text-green-600 font-medium px-8 py-6 text-lg rounded-full">
              Signup
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">AI-Powered Features for Modern Farming</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="https://hackathon-nxyvkiegwckd2irdw2fxka.streamlit.app/">
            <FeatureCard key={1} title={"AI-Powered Crop Recommendations"} description={"Suggest the best crops to grow based on soil type, weather and location."} icon={"seedling"} />

          </a>

            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Transform Your Farming?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Join thousands of farmers who are already using AI-griculture to improve yields and increase profits.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-6 text-lg rounded-full">
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                  $
                </div>
                <span className="font-semibold">AI-griculture</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Empowering farmers with AI technology for better yields and financial stability.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Case Studies</li>
                  <li>Testimonials</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>About</li>
                  <li>Team</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Blog</li>
                  <li>Support</li>
                  <li>Documentation</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} AI-griculture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

