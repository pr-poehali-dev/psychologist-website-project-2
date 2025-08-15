import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

export default function HealthyRelationships() {
  const modules = [
    {
      title: "Основы здоровых отношений",
      duration: "45 мин",
      lessons: 3,
      description: "Что делает отношения действительно счастливыми"
    },
    {
      title: "Эффективная коммуникация",
      duration: "60 мин", 
      lessons: 4,
      description: "Учимся говорить и слушать друг друга"
    },
    {
      title: "Решение конфликтов",
      duration: "50 мин",
      lessons: 3,
      description: "Превращаем споры в возможности для роста"
    },
    {
      title: "Границы в отношениях",
      duration: "40 мин",
      lessons: 3,
      description: "Как сохранить себя, оставаясь близкими"
    },
    {
      title: "Интимность и близость",
      duration: "55 мин",
      lessons: 4,
      description: "Углубляем эмоциональную и физическую связь"
    },
    {
      title: "Планирование будущего вместе",
      duration: "35 мин",
      lessons: 3,
      description: "Строим общие цели и мечты"
    }
  ];

  const testimonials = [
    {
      name: "Анна и Сергей",
      text: "Курс спас наш брак! Мы были на грани развода, но благодаря этим знаниям смогли все исправить.",
      rating: 5,
      result: "Восстановили доверие за 2 месяца"
    },
    {
      name: "Марина К.",
      text: "Наконец-то поняла, что делала неправильно в отношениях. Теперь у меня здоровые границы.",
      rating: 5,
      result: "Улучшила качество общения на 90%"
    },
    {
      name: "Игорь и Елена",
      text: "Практические упражнения помогли нам научиться решать конфликты без скандалов.",
      rating: 5,
      result: "Прекратили ссоры и начали договариваться"
    }
  ];

  const bonuses = [
    {
      title: "Рабочая тетрадь \"Дневник отношений\"",
      description: "120 страниц упражнений и практик",
      value: "2 900 ₽"
    },
    {
      title: "Чек-листы для каждого модуля",
      description: "Быстрые инструменты для применения знаний",
      value: "1 500 ₽"
    },
    {
      title: "Аудио-медитации для пар",
      description: "10 медитаций для гармонизации отношений",
      value: "3 500 ₽"
    },
    {
      title: "Доступ в закрытый чат",
      description: "Поддержка и общение с единомышленниками",
      value: "5 000 ₽"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-blue/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Brain" className="text-blue text-2xl" />
              <h1 className="text-xl font-bold text-blue-dark">Дмитрий Волков</h1>
            </div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-blue-dark hover:text-blue transition-colors">
                Главная
              </a>
              <Button className="bg-blue hover:bg-blue/90">
                Купить курс
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="bg-blue/10 text-blue border-blue/20 px-6 py-2 text-lg mb-6">
            Авторский курс
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-blue-dark mb-6 leading-tight">
            Здоровые <span className="text-blue">отношения</span>
          </h1>
          <p className="text-xl text-blue-dark/80 mb-8 max-w-2xl mx-auto">
            Полный гид по построению гармоничных отношений. 20+ часов практических знаний, 
            которые изменят вашу жизнь навсегда.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue">20+</div>
              <div className="text-sm text-blue-dark/70">Видео уроков</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-blue/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue">6</div>
              <div className="text-sm text-blue-dark/70">Модулей</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-blue/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue">∞</div>
              <div className="text-sm text-blue-dark/70">Доступ навсегда</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue/10 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <div className="text-lg text-blue-dark/70 mb-2">Обычная цена: <span className="line-through">19 900 ₽</span></div>
                <div className="text-4xl font-bold text-blue mb-4">12 900 ₽</div>
                <p className="text-blue-dark/70 mb-6">
                  Специальная цена действует ограниченное время
                </p>
                <Button size="lg" className="bg-blue hover:bg-blue/90 w-full">
                  <Icon name="ShoppingCart" className="mr-2" />
                  Купить курс сейчас
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-500" />
                  <span>Доступ сразу после оплаты</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-500" />
                  <span>Возврат денег в течение 14 дней</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-500" />
                  <span>Поддержка куратора</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-500" />
                  <span>Сертификат о прохождении</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-dark mb-4">Программа курса</h2>
            <p className="text-xl text-blue-dark/80">
              6 подробных модулей с практическими заданиями
            </p>
          </div>

          <div className="grid gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="border-blue/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="text-center md:text-left">
                      <div className="text-3xl font-bold text-blue mb-2">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="text-sm text-blue-dark/70">Модуль</div>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-blue-dark mb-2">
                        {module.title}
                      </h3>
                      <p className="text-blue-dark/70">{module.description}</p>
                    </div>
                    <div className="text-center md:text-right space-y-2">
                      <div className="text-blue font-semibold">{module.duration}</div>
                      <div className="text-sm text-blue-dark/70">
                        {module.lessons} урока
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-16 px-4 bg-sky/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-dark mb-4">Бонусы к курсу</h2>
            <p className="text-xl text-blue-dark/80">
              Дополнительные материалы стоимостью 12 900 ₽
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="border-blue/20 bg-white">
                <CardHeader className="bg-gradient-to-br from-blue/5 to-blue/10">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-blue-dark">{bonus.title}</CardTitle>
                    <Badge className="bg-green-100 text-green-600 border-green-200">
                      {bonus.value}
                    </Badge>
                  </div>
                  <CardDescription className="text-blue-dark/70">
                    {bonus.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="text-2xl text-blue-dark/70 mb-2">
              Общая стоимость бонусов: <span className="line-through">12 900 ₽</span>
            </div>
            <div className="text-4xl font-bold text-green-600 mb-4">
              БЕСПЛАТНО
            </div>
            <p className="text-blue-dark/70">при покупке курса сегодня</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-dark mb-4">Результаты учеников</h2>
            <p className="text-xl text-blue-dark/80">
              Реальные истории изменений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-blue/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-5 h-5 text-blue fill-current" />
                      ))}
                    </div>
                    <p className="text-blue-dark/90 italic">"{testimonial.text}"</p>
                    <div className="bg-blue/5 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-blue">Результат:</div>
                      <div className="text-sm text-blue-dark">{testimonial.result}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue/20 rounded-full flex items-center justify-center">
                        <Icon name="User" className="w-4 h-4 text-blue" />
                      </div>
                      <span className="font-semibold text-blue-dark">{testimonial.name}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue to-blue-ocean">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Начните строить здоровые отношения уже сегодня
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Более 2000 пар уже изменили свою жизнь благодаря этому курсу
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">93%</div>
                  <div className="text-sm opacity-90">Участников улучшили отношения</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">30 дней</div>
                  <div className="text-sm opacity-90">Средний срок видимых изменений</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4.9/5</div>
                  <div className="text-sm opacity-90">Средняя оценка курса</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-2xl text-white/90">
                Цена курса: <span className="line-through opacity-70">19 900 ₽</span>
              </div>
              <div className="text-5xl font-bold text-white mb-6">12 900 ₽</div>
              <Button size="lg" className="bg-white text-blue hover:bg-white/90 px-12 py-4 text-lg">
                <Icon name="ShoppingCart" className="mr-2" />
                Купить курс сейчас
              </Button>
              <p className="text-white/70 text-sm">
                Гарантия возврата денег 14 дней
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-blue-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Brain" className="text-blue" />
              <span className="text-white font-semibold">Дмитрий Волков - Психолог отношений</span>
            </div>
            <div className="text-white/70 text-sm">
              © 2024 Все права защищены
            </div>
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" className="text-white hover:text-blue">
                <Icon name="Youtube" className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-blue">
                <Icon name="Instagram" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}