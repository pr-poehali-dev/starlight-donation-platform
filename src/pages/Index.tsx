import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');

  const donationPackages = [
    {
      id: 1,
      name: 'Стартовый пакет',
      price: '299₽',
      features: ['100 игровых монет', '+10% к опыту', 'Уникальный ник', 'Доступ к VIP-чату'],
      color: 'from-purple-600 to-purple-800',
      icon: 'Sparkles'
    },
    {
      id: 2,
      name: 'Продвинутый пакет',
      price: '599₽',
      features: ['300 игровых монет', '+25% к опыту', 'Эксклюзивный скин', 'VIP-статус на 30 дней', 'Приоритет в очереди'],
      color: 'from-cyan-600 to-cyan-800',
      icon: 'Zap',
      popular: true
    },
    {
      id: 3,
      name: 'Легендарный пакет',
      price: '1299₽',
      features: ['1000 игровых монет', '+50% к опыту', '3 легендарных скина', 'VIP-статус на 90 дней', 'Особый эффект входа', 'Личный помощник'],
      color: 'from-pink-600 to-pink-800',
      icon: 'Crown'
    }
  ];

  const vipStatuses = [
    {
      name: 'Bronze',
      color: 'from-amber-700 to-amber-900',
      benefits: ['+10% к опыту', 'Бронзовый значок', 'Доступ к VIP-зонам'],
      price: '199₽/мес'
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      benefits: ['+20% к опыту', 'Серебряный значок', 'Приоритет в очереди', 'Особый эффект аватара'],
      price: '399₽/мес'
    },
    {
      name: 'Gold',
      color: 'from-yellow-500 to-yellow-700',
      benefits: ['+35% к опыту', 'Золотой значок', 'Доступ ко всем VIP-зонам', 'Эксклюзивные скины', 'Особый ник'],
      price: '699₽/мес'
    },
    {
      name: 'Diamond',
      color: 'from-cyan-400 to-blue-600',
      benefits: ['+50% к опыту', 'Алмазный значок', 'Безлимитный доступ', 'Все привилегии', 'Личный помощник', 'Уникальные эффекты'],
      price: '1299₽/мес'
    }
  ];

  const faqItems = [
    {
      question: 'Как активировать донат-пакет?',
      answer: 'После покупки пакет активируется автоматически. Все бонусы будут зачислены на ваш игровой аккаунт в течение 5 минут.'
    },
    {
      question: 'Можно ли вернуть средства?',
      answer: 'Возврат средств возможен в течение 14 дней с момента покупки, если услуга не была использована.'
    },
    {
      question: 'Что дает VIP-статус?',
      answer: 'VIP-статус открывает доступ к эксклюзивным зонам, дает бонусы к опыту и игровой валюте, а также особые визуальные эффекты.'
    },
    {
      question: 'Можно ли подарить донат другу?',
      answer: 'Да! При покупке вы можете указать никнейм получателя, и все бонусы будут зачислены на его аккаунт.'
    },
    {
      question: 'Как продлить VIP-статус?',
      answer: 'VIP-статус продлевается автоматически каждый месяц. Вы можете отключить автопродление в личном кабинете.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold neon-glow">StarLight Shop</h1>
            </div>
            <div className="flex gap-4">
              <Button
                variant={activeTab === 'main' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('main')}
                className="relative"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeTab === 'donate' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('donate')}
              >
                <Icon name="Gift" size={18} className="mr-2" />
                Донат
              </Button>
              <Button
                variant={activeTab === 'faq' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('faq')}
              >
                <Icon name="HelpCircle" size={18} className="mr-2" />
                FAQ
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {activeTab === 'main' && (
        <div className="animate-fade-in">
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 animate-glow-pulse"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-6xl font-bold mb-6 neon-glow animate-slide-up">
                  Прокачай свою игру
                </h2>
                <p className="text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Получи эксклюзивные привилегии, уникальные скины и преимущества в игре
                </p>
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 neon-border hover:scale-105 transition-transform animate-slide-up"
                  style={{ animationDelay: '0.2s' }}
                  onClick={() => setActiveTab('donate')}
                >
                  <Icon name="Rocket" size={24} className="mr-2" />
                  Выбрать пакет
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-12 neon-glow">VIP Статусы</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vipStatuses.map((status, index) => (
                <Card
                  key={status.name}
                  className={`neon-card hover:scale-105 transition-transform animate-slide-up bg-gradient-to-br ${status.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Shield" size={24} />
                      {status.name}
                    </CardTitle>
                    <CardDescription className="text-lg font-bold text-white">
                      {status.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {status.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Icon name="CheckCircle" size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-white/20 hover:bg-white/30">
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="py-16 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 animate-slide-up">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">10,000+</h4>
                  <p className="text-muted-foreground">Активных игроков</p>
                </div>
                <div className="p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
                    <Icon name="TrendingUp" size={32} className="text-secondary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">99.9%</h4>
                  <p className="text-muted-foreground">Аптайм серверов</p>
                </div>
                <div className="p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                    <Icon name="Star" size={32} className="text-accent" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">5/5</h4>
                  <p className="text-muted-foreground">Рейтинг игроков</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'donate' && (
        <div className="py-16 container mx-auto px-4 animate-fade-in">
          <h2 className="text-5xl font-bold text-center mb-4 neon-glow">Донат пакеты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выбери подходящий пакет и получи мгновенный доступ к привилегиям
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donationPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`neon-card hover:scale-105 transition-all duration-300 animate-slide-up relative ${
                  pkg.popular ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center animate-glow-pulse`}
                  >
                    <Icon name={pkg.icon} size={40} />
                  </div>
                  <CardTitle className="text-3xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-4xl font-bold text-primary mt-2">
                    {pkg.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 transition-opacity`}
                    size="lg"
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'faq' && (
        <div className="py-16 container mx-auto px-4 max-w-3xl animate-fade-in">
          <h2 className="text-5xl font-bold text-center mb-4 neon-glow">Часто задаваемые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на популярные вопросы о донате и VIP-статусах
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="neon-card px-6 border-none animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  <div className="flex items-center gap-3">
                    <Icon name="HelpCircle" size={20} className="text-primary" />
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <Card className="neon-card mt-12 text-center p-8">
            <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-2">Не нашли ответ?</h3>
            <p className="text-muted-foreground mb-4">
              Свяжитесь с нашей службой поддержки, и мы поможем вам!
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Send" size={18} className="mr-2" />
              Написать в поддержку
            </Button>
          </Card>
        </div>
      )}

      <footer className="bg-card/50 border-t border-primary/20 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Gamepad2" size={24} className="text-primary" />
            <span className="text-xl font-bold">StarLight Shop</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 StarLight Shop. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
