import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MessageCircle, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, согласитесь на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }
    
    // Здесь будет интеграция с API
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    
    // Сброс формы
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      agree: false,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Телефон",
      content: "8 (905) 864-43-63",
      action: "tel:+79058644363",
      actionText: "Позвонить",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Telegram",
      content: "Наш канал",
      action: "https://t.me/NxzaLhtHhXMyY2Ey",
      actionText: "Перейти",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "dima01011981@yandex.ru",
      action: "mailto:dima01011981@yandex.ru",
      actionText: "Написать",
    },
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", time: "9:00 - 19:00" },
    { day: "Суббота", time: "10:00 - 17:00" },
    { day: "Воскресенье", time: "По записи" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold hero-text mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Готовы обсудить ваш проект? Мы всегда на связи и готовы ответить 
              на любые вопросы о ремонте и дизайне интерьера.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Оставить заявку
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Расскажите о своем проекте, и мы подготовим индивидуальное предложение
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Ваше имя *
                        </label>
                        <Input
                          placeholder="Введите ваше имя"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Телефон *
                        </label>
                        <Input
                          type="tel"
                          placeholder="+7 (900) 123-45-67"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Описание проекта *
                      </label>
                      <Textarea
                        placeholder="Расскажите о вашем проекте: тип помещения, площадь, пожелания по стилю и бюджету..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agree"
                        checked={formData.agree}
                        onCheckedChange={(checked) => setFormData({...formData, agree: !!checked})}
                      />
                      <label
                        htmlFor="agree"
                        className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                      >
                        Я согласен на обработку персональных данных и получение 
                        коммерческих предложений от Level House
                      </label>
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-primary-variant hover:from-primary-variant hover:to-primary text-white font-semibold"
                    >
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-soft hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-variant rounded-xl flex items-center justify-center text-white flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {info.content}
                          </p>
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="hover:bg-primary hover:text-white"
                          >
                            <a href={info.action}>
                              {info.actionText}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Working Hours */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Режим работы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {schedule.day}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-0 shadow-soft bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">
                    Бесплатная консультация
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Получите профессиональный совет по вашему проекту
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-accent to-yellow-500 text-accent-foreground font-semibold"
                  >
                    Заказать звонок
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-accent/5">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о наших услугах
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3">
                  Как долго длится ремонт?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Сроки зависят от объема работ: косметический ремонт — 2-4 недели, 
                  капитальный ремонт — 2-4 месяца. Точные сроки определяем после осмотра.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3">
                  Предоставляете ли вы гарантию?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Да, мы предоставляем 3 года гарантии на все виды работ. 
                  На материалы действует гарантия производителя.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3">
                  Можно ли изменить проект в процессе?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Конечно! Мы готовы вносить изменения на любом этапе. 
                  Корректировки согласовываются отдельно.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3">
                  Работаете ли вы с материалами заказчика?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Да, можем работать с вашими материалами. При этом гарантия 
                  распространяется только на выполненные работы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;