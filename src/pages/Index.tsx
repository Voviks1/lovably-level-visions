import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, CheckCircle, Phone, Calculator, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-interior.jpg";
import beforeAfterImage from "@/assets/before-after.jpg";
import { ApartmentTour } from "@/components/ApartmentTour/ApartmentTour";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "150+ проектов",
      description: "Успешно реализованных интерьеров",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "1 год гарантии",
      description: "На все виды выполняемых работ",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "98% клиентов",
      description: "Рекомендуют нас друзьям",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Точные сроки",
      description: "Сдаем объекты в срок",
    },
  ];

  const services = [
    {
      title: "Дизайн-проект",
      price: "от 2 500 ₽/м²",
      description: "3D-визуализация и полный пакет документов",
    },
    {
      title: "Капитальный ремонт",
      price: "от 30 000 ₽/м²",
      description: "Полная трансформация пространства",
    },
    {
      title: "Чистовая отделка",
      price: "от 35 000 ₽/м²",
      description: "Финишные работы премиального качества",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] pt-20 sm:pt-24 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 section-container text-center text-white">
          <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            Премиум ремонт с 2020 года
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-center">Ровный ремонт</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Создаем роскошные интерьеры, которые вдохновляют каждый день. 
            Воплощаем самые смелые мечты в реальность с безупречным качеством и стилем.
          </p>
          
          <div className="flex justify-center mb-12">
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                  {feature.icon}
                </div>
                <div className="text-lg font-bold">{feature.title}</div>
                <div className="text-sm text-white/80">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 3D Tour Section */}
      <section className="py-4 md:py-8 bg-gradient-to-br from-muted/30 to-accent/5">
        <div className="section-container">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
              Интерактивный 3D-тур
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Погрузитесь в наш проект и пройдите по квартире от черновой отделки до финального результата. 
              Посмотрите на трансформацию каждой комнаты своими глазами.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span className="text-sm">Навигация между комнатами</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span className="text-sm">3 режима просмотра</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span className="text-sm">180° обзор</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto touch-pan-y">
            <ApartmentTour />
          </div>
          
          <div className="text-center mt-8">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Квартира 85м² • 3 месяца работ • Современный стиль
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Полный спектр услуг — от концепции до воплощения
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-0 shadow-soft text-center">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <div className="gold-text text-3xl font-bold mb-4">
                    {service.price}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              asChild
              className="bg-gradient-to-r from-primary to-primary-variant hover:from-primary-variant hover:to-primary text-white font-semibold"
            >
              <Link to="/services">
                Все услуги
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-variant">
        <div className="section-container text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Почему выбирают нас?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Премиальное качество</h3>
              <p className="text-white/90 leading-relaxed">
                Используем только лучшие материалы и проверенные технологии
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Команда профи</h3>
              <p className="text-white/90 leading-relaxed">
                Опытные дизайнеры и мастера с многолетним стажем
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Гарантия результата</h3>
              <p className="text-white/90 leading-relaxed">
                1 год гарантии и полное сопровождение проекта
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              asChild
            >
              <Link to="/projects">Посмотреть проекты</Link>
            </Button>
            
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold border border-white"
              asChild
            >
              <Link to="/contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;