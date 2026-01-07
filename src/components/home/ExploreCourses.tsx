import { Link } from "react-router-dom";
import { BookOpen, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const courses = [
  {
    icon: BookOpen,
    title: "Complete Digital Marketing",
    description: "Master all aspects of digital marketing from SEO to social media advertising.",
    duration: "1 Month",
    modules: "21 Modules",
  },
  {
    icon: Users,
    title: "Social Media Mastery",
    description: "Learn to create engaging content and grow audiences across all platforms.",
    duration: "2 Weeks",
    modules: "8 Modules",
  },
  {
    icon: Clock,
    title: "SEO & Content Strategy",
    description: "Rank higher on search engines with proven SEO techniques and content planning.",
    duration: "3 Weeks",
    modules: "12 Modules",
  },
  {
    icon: Award,
    title: "Paid Advertising Pro",
    description: "Master Google Ads, Facebook Ads, and other paid marketing channels.",
    duration: "2 Weeks",
    modules: "10 Modules",
  },
];

const ExploreCourses = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Courses
          </h2>
          <p className="text-muted-foreground text-lg">
            Practical, hands-on training designed to give you the skills employers want.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <course.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{course.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {course.modules}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/plans">View All Plans & Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourses;
