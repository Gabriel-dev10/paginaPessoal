
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 dark:bg-[#0F172A] bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider text-sm">Contato</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900 dark:text-blue-100">Entre em Contato</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
            Tem alguma pergunta ou está interessado em trabalhar comigo? Entre em contato através das informações abaixo.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-md dark:bg-[#1E293B] border-blue-100 dark:border-blue-900/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-6">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                      <p className="text-gray-600 dark:text-blue-200">gsantana.dev@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">Telefone</h4>
                      <p className="text-gray-600 dark:text-blue-200">+55 (21) 97244-3733</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">Localização</h4>
                      <p className="text-gray-600 dark:text-blue-200">Rio de janeiro, Brasil</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-3 flex items-center space-x-4">
                      <span>Me encontre online</span>
                    </h4>
                    <div className="flex space-x-4">
                      <a href="https://github.com/Gabriel-dev10" target="_blank" rel="noopener noreferrer" 
                        className="p-3 rounded-full bg-gray-100 dark:bg-blue-900/50 hover:bg-gray-200 dark:hover:bg-blue-800/50 transition-colors">
                        <Github className="h-6 w-6 text-blue-800 dark:text-blue-300" />
                      </a>
                      <a href="https://linkedin.com/in/gabrielsantanadev" target="_blank" rel="noopener noreferrer" 
                        className="p-3 rounded-full bg-gray-100 dark:bg-blue-900/50 hover:bg-gray-200 dark:hover:bg-blue-800/50 transition-colors">
                        <Linkedin className="h-6 w-6 text-blue-800 dark:text-blue-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
