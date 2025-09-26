import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import modernApartmentImg from "@/assets/projects/modern-apartment.jpg";
import scandinavianHouseImg from "@/assets/projects/scandinavian-house.jpg";
import minimalistApartmentImg from "@/assets/projects/minimalist-apartment.jpg";
import classicMansionImg from "@/assets/projects/classic-mansion.jpg";
import industrialLoftImg from "@/assets/projects/industrial-loft.jpg";
import ecoHouseImg from "@/assets/projects/eco-house.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Современная квартира в ЖК 'Аврора'",
      category: "apartment",
      style: "modern",
      area: "85 м²",
      duration: "3 месяца",
      location: "Москва",
      image: modernApartmentImg,
      description: "Элегантное пространство с элементами лофта и современными решениями",
      year: "2024",
    },
    {
      id: 2,
      title: "Загородный дом в скандинавском стиле",
      category: "house",
      style: "scandinavian",
      area: "120 м²",
      duration: "4 месяца",
      location: "Подмосковье",
      image: scandinavianHouseImg,
      description: "Уютный дом с натуральными материалами и светлыми тонами",
      year: "2024",
    },
    {
      id: 3,
      title: "Апартаменты в стиле минимализм",
      category: "apartment",
      style: "minimalist",
      area: "65 м²",
      duration: "2 месяца",
      location: "Москва",
      image: minimalistApartmentImg,
      description: "Функциональное пространство с акцентом на качество материалов",
      year: "2023",
    },
    {
      id: 4,
      title: "Классический особняк",
      category: "house",
      style: "classic",
      area: "200 м²",
      duration: "6 месяцев",
      location: "Москва",
      image: classicMansionImg,
      description: "Роскошный интерьер с элементами классической архитектуры",
      year: "2023",
    },
    {
      id: 5,
      title: "Лофт в историческом центре",
      category: "apartment",
      style: "loft",
      area: "90 м²",
      duration: "3 месяца",
      location: "Москва",
      image: industrialLoftImg,
      description: "Промышленная эстетика с современными удобствами",
      year: "2024",
    },
    {
      id: 6,
      title: "Эко-дом из натуральных материалов",
      category: "house",
      style: "eco",
      area: "150 м²",
      duration: "5 месяцев",
      location: "Подмосковье",
      image: ecoHouseImg,
      description: "Экологически чистые материалы и энергоэффективные решения",
      year: "2023",
    },
  ];

  const filters = [
    { id: "all", label: "Все проекты" },
    { id: "apartment", label: "Квартиры" },
    { id: "house", label: "Дома" },
    { id: "modern", label: "Современный" },
    { id: "scandinavian", label: "Скандинавский" },
    { id: "classic", label: "Классика" },
    { id: "loft", label: "Лофт" },
  ];

  const filteredProjects = projects.filter(project => 
    filter === "all" || 
    project.category === filter || 
    project.style === filter
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold hero-text mb-6">
              Наши проекты
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Более 150 успешно реализованных проектов. 
              Каждый интерьер создается с любовью к деталям и заботой о комфорте наших клиентов.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card border-b border-border">
        <div className="section-container">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filterItem) => (
              <Button
                key={filterItem.id}
                variant={filter === filterItem.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(filterItem.id)}
                className={filter === filterItem.id 
                  ? "bg-gradient-to-r from-primary to-primary-variant text-white" 
                  : ""
                }
              >
                {filterItem.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="hover-lift border-0 shadow-soft overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="gold-text font-semibold">{project.area}</div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      Срок реализации: {project.duration}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category === "apartment" ? "Квартира" : "Дом"}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.style}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-variant">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-white/90">Проектов</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="text-white/90">Года опыта</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-white/90">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Поддержка</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;