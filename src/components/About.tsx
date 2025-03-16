
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "JavaScript", "Python", "React", "Node.js", "HTML", "CSS", 
    "MySQL", "Git", "Figma", "Pacote office", "Scrum", "Agile developer","Gestão de pessoas","Inglês(Intermediário)",
  ];

  return (
    <section id="sobre" className="py-20 dark:bg-[#111827] bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider text-sm">Conheça-me melhor</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900 dark:text-blue-100">Sobre Mim</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-800 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="dark:bg-[#1E293B] bg-white p-8 rounded-xl shadow-xl dark:border-blue-900/20 border border-blue-100">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-blue-100">Minha História</h3>
            <p className="text-gray-600 dark:text-blue-200 mb-6">
              Olá! Sou um desenvolvedor apaixonado por criar soluções web bonitas e funcionais. 
              Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam 
              na web, e desde então venho aprimorando minhas habilidades e conhecimentos.
            </p>
            <p className="text-gray-600 dark:text-blue-200 mb-6">
              Especializei-me em desenvolvimento Frontend, com foco em React, 
              mas também tenho experiência em desenvolvimento backend com Node.js.
              Estou sempre em busca de novos desafios e oportunidades para crescer como profissional.
            </p>
            <p className="text-gray-600 dark:text-blue-200">
              Quando não estou codando, gosto de [ler e fazer cursos]. Acredito que esses 
              interesses diversos me ajudam a trazer uma perspectiva única para meus projetos.
            </p>
          </div>
          
          <div>
            <Card className="p-6 shadow-xl dark:border-blue-900/30 border-blue-100 dark:bg-[#1E293B] bg-white">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-blue-100 border-b pb-4 dark:border-blue-900/30 border-blue-100">Minhas Habilidades</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    className="dark:bg-blue-900/40 dark:text-blue-200 dark:hover:bg-blue-800/50 
                               bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-blue-100 border-b pb-4 dark:border-blue-900/30 border-blue-100">Educação</h3>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-blue-500 dark:bg-blue-900/30 bg-blue-50 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-blue-100">Engenharia de software</h4>
                  <p className="text-gray-600 dark:text-blue-200">Universidade de vassouras | 2023 - 2027</p>
                </div>
                <div className="p-4 border-l-4 border-blue-500 dark:bg-blue-900/30 bg-blue-50 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-blue-100">Analise e desenvolvimento de sistemas</h4>
                  <p className="text-gray-600 dark:text-blue-200">Unopar | 2023 - 2025</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
