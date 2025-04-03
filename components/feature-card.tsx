import { SproutIcon as Seedling, Microscope, Bug, Droplet, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "seedling":
        return <Seedling className="h-8 w-8 text-green-600" />
      case "microscope":
        return <Microscope className="h-8 w-8 text-green-600" />
      case "bug":
        return <Bug className="h-8 w-8 text-green-600" />
      case "droplet":
        return <Droplet className="h-8 w-8 text-green-600" />
      case "trending-up":
        return <TrendingUp className="h-8 w-8 text-green-600" />
      default:
        return <Seedling className="h-8 w-8 text-green-600" />
    }
  }

  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="mb-2">{getIcon()}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

