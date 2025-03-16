
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard = ({ title, description, image, tags, liveUrl, repoUrl }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden project-card h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-portfolio-lightBlue/20 text-portfolio-darkBlue hover:bg-portfolio-lightBlue/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between mt-auto">
        {repoUrl && (
          <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span>Código</span>
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" className="flex items-center gap-1 ml-auto bg-portfolio-blue hover:bg-portfolio-darkBlue" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <span>Demo</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
