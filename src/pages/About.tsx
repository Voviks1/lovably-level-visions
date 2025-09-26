import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Shield, Star, Lightbulb } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Качество превыше всего",
      description: "Мы используем только проверенные материалы и технологии",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Индивидуальный подход",
      description: "Каждый проект уникален и создается под конкретного клиента",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Соблюдение сроков",
      description: "Строго придерживаемся установленных временных рамок",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Гарантия качества",
      description: "Предоставляем 3 года гарантии на все виды работ",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Инновационные решения",
      description: "Используем современные технологии и материалы",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Награды и признание",
      description: "Наши проекты получают премии в области дизайна",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Основание компании",
      description: "Level House начинает свою деятельность с первых проектов в Москве",
    },
    {
      year: "2021",
      title: "Расширение команды",
      description: "Привлекаем лучших специалистов и увеличиваем штат до 15 человек",
    },
    {
      year: "2022",
      title: "50 проектов",
      description: "Достигаем отметки в 50 успешно реализованных проектов",
    },
    {
      year: "2023",
      title: "Премия 'Лучший дизайн'",
      description: "Получаем престижную награду за инновационные решения в интерьере",
    },
    {
      year: "2024",
      title: "150+ проектов",
      description: "Превышаем планку в 150 проектов и расширяемся в регионы",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold hero-text mb-6">
              О нас
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Level House — это команда профессионалов, создающая уникальные интерьеры 
              с 2020 года. Мы превращаем пространства в произведения искусства.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div>
                <div className="text-3xl font-bold gold-text">150+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div>
                <div className="text-3xl font-bold gold-text">3</div>
                <div className="text-sm text-muted-foreground">Года опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold gold-text">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши ценности
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в каждом проекте
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-0 shadow-soft text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-variant rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Timeline */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              История развития
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Путь от стартапа до лидера рынка премиального ремонта
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-variant rounded-full flex items-center justify-center text-white font-bold text-lg shadow-medium relative z-10">
                      {item.year}
                    </div>
                    <div className="ml-8 flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-variant">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы работать с лучшими?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Доверьте свой проект профессионалам и получите результат, превосходящий ожидания
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Обсудить проект
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold"
            >
              Посмотреть портфолио
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;