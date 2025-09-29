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
import sochiSeaApartmentImg from "@/assets/projects/sochi-sea-apartment.jpg";
import sochiVillaLivingImg from "@/assets/projects/sochi-villa-living.jpg";
import sochiKitchenModernImg from "@/assets/projects/sochi-kitchen-modern.jpg";
import sochiBathroomLuxuryImg from "@/assets/projects/sochi-bathroom-luxury.jpg";
import sochiBedroomCozyImg from "@/assets/projects/sochi-bedroom-cozy.jpg";
import sochiTerranceMediterraneanImg from "@/assets/projects/sochi-terrace-mediterranean.jpg";
import sochiOfficeLuxuryImg from "@/assets/projects/sochi-office-luxury.jpg";
import sochiDiningStylishImg from "@/assets/projects/sochi-dining-stylish.jpg";
import sochiSpaBathroomImg from "@/assets/projects/sochi-spa-bathroom.jpg";
import sochiClosetChicImg from "@/assets/projects/sochi-closet-chic.jpg";
import sochiKidsRoomImg from "@/assets/projects/sochi-kids-room.jpg";
import sochiHomeTheaterImg from "@/assets/projects/sochi-home-theater.jpg";
import sochiGymModernImg from "@/assets/projects/sochi-gym-modern.jpg";
import sochiLibraryElegantImg from "@/assets/projects/sochi-library-elegant.jpg";
import sochiEntranceContemporaryImg from "@/assets/projects/sochi-entrance-contemporary.jpg";
import sochiBarLuxuryImg from "@/assets/projects/sochi-bar-luxury.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Квартира с видом на море",
      category: "apartment", 
      style: "modern",
      area: "85 м²",
      duration: "3 месяца",
      location: "Сочи",
      image: sochiSeaApartmentImg,
      description: "Современная квартира с панорамными окнами и видом на Черное море",
      year: "2024",
    },
    {
      id: 2,
      title: "Вилла в современном стиле",
      category: "house",
      style: "modern",
      area: "180 м²",
      duration: "4 месяца", 
      location: "Сочи",
      image: sochiVillaLivingImg,
      description: "Роскошная вилла с видом на горы и море в престижном районе",
      year: "2024",
    },
    {
      id: 3,
      title: "Кухня в стиле модерн",
      category: "apartment",
      style: "modern",
      area: "25 м²",
      duration: "1 месяц",
      location: "Сочи", 
      image: sochiKitchenModernImg,
      description: "Современная кухня с мраморными столешницами и видом на море",
      year: "2024",
    },
    {
      id: 4,
      title: "Ванная в стиле spa",
      category: "apartment",
      style: "modern",
      area: "15 м²",
      duration: "2 недели",
      location: "Сочи",
      image: sochiBathroomLuxuryImg,
      description: "Роскошная ванная комната в стиле пятизвездочного отеля",
      year: "2024",
    },
    {
      id: 5,
      title: "Уютная спальня с видом на море",
      category: "apartment",
      style: "modern",
      area: "20 м²",
      duration: "3 недели",
      location: "Сочи",
      image: sochiBedroomCozyImg,
      description: "Комфортная спальня в теплых тонах с элементами тропического декора",
      year: "2024",
    },
    {
      id: 6,
      title: "Терраса в средиземноморском стиле",
      category: "house",
      style: "mediterranean",
      area: "40 м²",
      duration: "1 месяц",
      location: "Сочи",
      image: sochiTerranceMediterraneanImg,
      description: "Открытая терраса с мебелью для отдыха и видом на закат",
      year: "2024",
    },
    {
      id: 7,
      title: "Офис класса люкс",
      category: "office",
      style: "modern",
      area: "60 м²",
      duration: "2 месяца",
      location: "Сочи",
      image: sochiOfficeLuxuryImg,
      description: "Современный офис в бизнес-центре с панорамными окнами",
      year: "2024",
    },
    {
      id: 8,
      title: "Элегантная столовая",
      category: "apartment",
      style: "modern",
      area: "25 м²",
      duration: "3 недели",
      location: "Сочи",
      image: sochiDiningStylishImg,
      description: "Стильная обеденная зона с дизайнерской мебелью и люстрой",
      year: "2024",
    },
    {
      id: 9,
      title: "SPA-ванная премиум класса",
      category: "apartment",
      style: "luxury",
      area: "30 м²",
      duration: "1 месяц",
      location: "Сочи",
      image: sochiSpaBathroomImg,
      description: "Домашний спа-центр с джакузи и натуральным камнем",
      year: "2024",
    },
    {
      id: 10,
      title: "Гардеробная мечты",
      category: "apartment",
      style: "luxury",
      area: "18 м²",
      duration: "2 недели",
      location: "Сочи",
      image: sochiClosetChicImg,
      description: "Просторная гардеробная с зеркальными поверхностями",
      year: "2024",
    },
    {
      id: 11,
      title: "Детская в морском стиле",
      category: "apartment",
      style: "modern",
      area: "22 м²",
      duration: "3 недели",
      location: "Сочи",
      image: sochiKidsRoomImg,
      description: "Яркая детская комната с морской тематикой и игровой зоной",
      year: "2024",
    },
    {
      id: 12,
      title: "Домашний кинотеатр",
      category: "house",
      style: "luxury",
      area: "35 м²",
      duration: "1 месяц",
      location: "Сочи",
      image: sochiHomeTheaterImg,
      description: "Профессиональный домашний кинотеатр с кожаными креслами",
      year: "2024",
    },
    {
      id: 13,
      title: "Современный спортзал",
      category: "apartment",
      style: "modern",
      area: "40 м²",
      duration: "3 недели",
      location: "Сочи",
      image: sochiGymModernImg,
      description: "Полностью оборудованный тренажерный зал с видом на море",
      year: "2024",
    },
    {
      id: 14,
      title: "Элегантная библиотека",
      category: "house",
      style: "classic",
      area: "45 м²",
      duration: "1.5 месяца",
      location: "Сочи",
      image: sochiLibraryElegantImg,
      description: "Уютная библиотека с деревянными стеллажами и зоной для чтения",
      year: "2024",
    },
    {
      id: 15,
      title: "Современная прихожая",
      category: "apartment",
      style: "contemporary",
      area: "12 м²",
      duration: "2 недели",
      location: "Сочи",
      image: sochiEntranceContemporaryImg,
      description: "Стильная входная зона с мраморным полом и современным искусством",
      year: "2024",
    },
    {
      id: 16,
      title: "Домашний бар",
      category: "house",
      style: "luxury",
      area: "20 м²",
      duration: "3 недели",
      location: "Сочи",
      image: sochiBarLuxuryImg,
      description: "Роскошная барная зона с винным хранилищем и подсветкой",
      year: "2024",
    },
    // Оригинальные проекты
    {
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
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
      id: 21,
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
      id: 22,
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
    { id: "office", label: "Офисы" },
    { id: "modern", label: "Современный" },
    { id: "scandinavian", label: "Скандинавский" },
    { id: "classic", label: "Классика" },
    { id: "luxury", label: "Люкс" },
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
              Более 200+ успешно реализованных проектов в Сочи и других городах России. 
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
                        {project.category === "apartment" ? "Квартира" : 
                         project.category === "house" ? "Дом" : "Офис"}
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
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <div className="text-white/90">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-white/90">Проектов</div>
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