
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projetos");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 dark:bg-gradient-to-br dark:from-blue-950 dark:via-blue-900 dark:to-indigo-950 
                          bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 inline-block p-2 dark:bg-blue-900/50 bg-blue-200/50 rounded-lg border dark:border-blue-700/30 border-blue-300/50">
            <span className="dark:text-blue-300 text-blue-700 font-medium">Bem-vindo ao meu portfólio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-300 dark:via-blue-400 dark:to-indigo-300
                         bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800">
            Desenvolvedor Full Stack
          </h1>
          <p className="text-lg dark:text-blue-200 text-blue-950 mb-8 leading-relaxed">
          Atualmente, estou cursando Engenharia de Software e Análise e Desenvolvimento de Sistemas. Tenho grande interesse na área de desenvolvimento e estou sempre buscando aprimorar minhas habilidades e conhecimentos. Sou proativo, dedicado e motivado a aprender, buscando oportunidades para aplicar meus conhecimentos na prática e contribuir para o crescimento da equipe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button 
            onClick={scrollToProjects}
            className="p-2 rounded-full dark:border-blue-700/50 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 
                       border-blue-400/70 bg-blue-200/40 hover:bg-blue-200/70 transition-all animate-bounce"
          >
            <ChevronDown className="h-5 w-5 dark:text-blue-400 text-blue-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
