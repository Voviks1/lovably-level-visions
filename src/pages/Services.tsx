import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Palette, Zap, Droplet, Hammer, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Капитальный ремонт",
      description: "Полная трансформация пространства с нуля до готового интерьера",
      price: "от 15 000 ₽/м²",
      duration: "от 60 дней",
      features: ["Демонтаж", "Перепланировка", "Все виды работ"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Дизайн-проект",
      description: "Индивидуальный дизайн с 3D-визуализацией и подбором материалов",
      price: "от 2 500 ₽/м²",
      duration: "от 14 дней",
      features: ["3D-визуализация", "Чертежи", "Спецификации"],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Черновая отделка",
      description: "Качественная подготовка помещения под финишную отделку",
      price: "от 8 000 ₽/м²",
      duration: "от 30 дней",
      features: ["Стяжка", "Штукатурка", "Грунтовка"],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Чистовая отделка",
      description: "Финишные работы премиального качества",
      price: "от 12 000 ₽/м²",
      duration: "от 45 дней",
      features: ["Покраска", "Напольные покрытия", "Декор"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Электромонтаж",
      description: "Современные электрические системы с умным управлением",
      price: "от 3 500 ₽/м²",
      duration: "от 7 дней",
      features: ["Проводка", "Розетки", "Освещение"],
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Сантехнические работы",
      description: "Качественная сантехника и водоснабжение",
      price: "от 4 000 ₽/м²",
      duration: "от 10 дней",
      features: ["Трубы", "Сантехника", "Теплый пол"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold hero-text mb-6">
              Наши услуги
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Полный спектр услуг по ремонту и дизайну интерьеров. 
              От идеи до воплощения - мы создаем пространства мечты.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-lift border-0 shadow-soft bg-gradient-to-br from-card to-card/50 overflow-hidden group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-variant rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex justify-between items-center py-3 border-t border-border/50">
                    <div>
                      <div className="gold-text font-bold text-lg">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-foreground mb-2">Включает:</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary-variant hover:from-primary-variant hover:to-primary text-white font-semibold"
                  >
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-variant">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы начать ремонт мечты?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Бесплатная консультация
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold"
            >
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;