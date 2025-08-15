import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

export default function Index() {
  const services = [
    {
      title: "Индивидуальная терапия",
      description: "Персональная работа с эмоциональными трудностями",
      duration: "50 минут",
      price: "3 500 ₽"
    },
    {
      title: "Семейная терапия", 
      description: "Работа с парами и семьями для улучшения отношений",
      duration: "1 час 20 минут",
      price: "5 000 ₽"
    },
    {
      title: "Групповая терапия",
      description: "Работа в группе для развития социальных навыков",
      duration: "1 час 30 минут", 
      price: "2 000 ₽"
    }
  ];

  const products = [
    {
      title: "Курс \"Управление тревожностью\"",
      description: "21-дневный курс практических техник для снижения тревоги",
      price: "4 900 ₽",
      format: "Онлайн-курс"
    },
    {
      title: "Рабочая тетрадь \"Эмоциональный баланс\"",
      description: "120 страниц упражнений для самопознания и развития",
      price: "1 200 ₽",
      format: "PDF + печатная версия"
    },
    {
      title: "Медитации для сна",
      description: "Коллекция из 15 авторских медитаций для качественного отдыха",
      price: "990 ₽",
      format: "Аудио-курс"
    }
  ];

  const testimonials = [
    {
      name: "Анна К.",
      text: "После работы с Марией я научилась лучше понимать свои эмоции и справляться со стрессом. Очень благодарна за поддержку!",
      rating: 5
    },
    {
      name: "Дмитрий С.",
      text: "Семейная терапия помогла нам с женой наладить общение. Мария создала очень комфортную атмосферу.",
      rating: 5
    },
    {
      name: "Елена М.",
      text: "Курс по тревожности оказался очень практичным. Техники действительно работают в повседневной жизни.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-coral/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-coral text-2xl" />
              <h1 className="text-xl font-bold text-coral-dark">Мария Иванова</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-coral-dark hover:text-coral transition-colors">Обо мне</a>
              <a href="#services" className="text-coral-dark hover:text-coral transition-colors">Услуги</a>
              <a href="#products" className="text-coral-dark hover:text-coral transition-colors">Продукты</a>
              <a href="#reviews" className="text-coral-dark hover:text-coral transition-colors">Отзывы</a>
              <a href="#contact" className="text-coral-dark hover:text-coral transition-colors">Контакты</a>
            </div>
            <Button className="bg-coral hover:bg-coral/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-coral/10 text-coral border-coral/20 px-4 py-1">
                  Сертифицированный психолог
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-coral-dark leading-tight">
                  Путь к <span className="text-coral">внутренней гармонии</span> начинается здесь
                </h1>
                <p className="text-xl text-coral-dark/80 leading-relaxed">
                  Помогаю людям обрести душевное равновесие, справиться с тревогой и 
                  построить здоровые отношения с собой и окружающими
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-coral hover:bg-coral/90 text-white px-8 py-4">
                  <Icon name="Calendar" className="mr-2" />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-coral text-coral hover:bg-coral/5 px-8 py-4">
                  <Icon name="Phone" className="mr-2" />
                  Бесплатная консультация
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral">500+</div>
                  <div className="text-sm text-coral-dark/70">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral">8 лет</div>
                  <div className="text-sm text-coral-dark/70">Опыта работы</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral">15+</div>
                  <div className="text-sm text-coral-dark/70">Сертификатов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/e7c0772f-dcac-4cbb-bd4b-6b191770346e.jpg" 
                  alt="Мария Иванова - психолог"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coral/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-coral/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-sm text-coral-dark">Онлайн сейчас</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coral-dark mb-4">Обо мне</h2>
            <p className="text-xl text-coral-dark/80">
              Практикующий психолог с 8-летним опытом работы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-coral-dark/90 leading-relaxed">
                Я - Мария Иванова, дипломированный психолог с опытом работы более 8 лет. 
                Помогаю людям находить внутреннюю гармонию и справляться с жизненными вызовами.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="GraduationCap" className="text-coral" />
                  <span className="text-coral-dark">МГУ им. М.В. Ломоносова, факультет психологии</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-coral" />
                  <span className="text-coral-dark">Сертификат когнитивно-поведенческой терапии</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" className="text-coral" />
                  <span className="text-coral-dark">Член Российского психологического общества</span>
                </div>
              </div>
            </div>
            <Card className="border-coral/20">
              <CardHeader className="bg-coral/5">
                <CardTitle className="text-coral-dark flex items-center gap-2">
                  <Icon name="FileText" />
                  Документы и сертификаты
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-cream rounded-lg">
                  <span className="text-coral-dark">Диплом психолога</span>
                  <Button size="sm" variant="ghost" className="text-coral">
                    <Icon name="Eye" className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-cream rounded-lg">
                  <span className="text-coral-dark">Сертификат КПТ</span>
                  <Button size="sm" variant="ghost" className="text-coral">
                    <Icon name="Eye" className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-cream rounded-lg">
                  <span className="text-coral-dark">Повышение квалификации</span>
                  <Button size="sm" variant="ghost" className="text-coral">
                    <Icon name="Eye" className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-cream/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coral-dark mb-4">Услуги</h2>
            <p className="text-xl text-coral-dark/80">
              Профессиональная психологическая поддержка для вашего благополучия
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-coral/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="bg-gradient-to-br from-coral/5 to-coral/10">
                  <CardTitle className="text-coral-dark">{service.title}</CardTitle>
                  <CardDescription className="text-coral-dark/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-coral-dark/70">Длительность:</span>
                      <span className="text-coral font-semibold">{service.duration}</span>
                    </div>
                    <Separator className="bg-coral/20" />
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-coral-dark">{service.price}</span>
                      <Button className="bg-coral hover:bg-coral/90">
                        Записаться
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coral-dark mb-4">Инфо продукты</h2>
            <p className="text-xl text-coral-dark/80">
              Авторские материалы для самостоятельной работы над собой
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-coral/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-coral/10 text-coral border-coral/20">
                      {product.format}
                    </Badge>
                    <Icon name="ShoppingCart" className="text-coral/50" />
                  </div>
                  <CardTitle className="text-coral-dark">{product.title}</CardTitle>
                  <CardDescription className="text-coral-dark/70">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-coral">{product.price}</span>
                    <Button variant="outline" className="border-coral text-coral hover:bg-coral/5">
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coral-dark mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-coral-dark/80">
              Истории изменений от тех, кто прошел этот путь
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-coral/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-5 h-5 text-coral fill-current" />
                      ))}
                    </div>
                    <p className="text-coral-dark/90 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                        <Icon name="User" className="w-4 h-4 text-coral" />
                      </div>
                      <span className="font-semibold text-coral-dark">{testimonial.name}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-coral to-coral-light">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Готовы начать путь к лучшей версии себя?
            </h2>
            <p className="text-xl text-white/90">
              Запишитесь на бесплатную 15-минутную консультацию
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-coral hover:bg-white/90 px-8 py-4">
                <Icon name="Calendar" className="mr-2" />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4">
                <Icon name="MessageCircle" className="mr-2" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 bg-coral-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-2">
              <Icon name="Phone" className="mx-auto text-coral text-2xl" />
              <h3 className="font-semibold">Телефон</h3>
              <p>+7 (999) 123-45-67</p>
            </div>
            <div className="space-y-2">
              <Icon name="Mail" className="mx-auto text-coral text-2xl" />
              <h3 className="font-semibold">Email</h3>
              <p>maria@psychology.ru</p>
            </div>
            <div className="space-y-2">
              <Icon name="MapPin" className="mx-auto text-coral text-2xl" />
              <h3 className="font-semibold">Адрес</h3>
              <p>Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-coral-dark border-t border-coral/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-coral" />
              <span className="text-white font-semibold">Мария Иванова - Психолог</span>
            </div>
            <div className="text-white/70 text-sm">
              © 2024 Все права защищены
            </div>
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" className="text-white hover:text-coral">
                <Icon name="Instagram" className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-coral">
                <Icon name="MessageSquare" className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-coral">
                <Icon name="Mail" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}