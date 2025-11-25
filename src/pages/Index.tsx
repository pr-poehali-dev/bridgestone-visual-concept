import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'BRIDGESTONE',
    subtitle: 'Визуальная концепция',
    type: 'title',
    content: {
      projectName: 'Racing Brand Identity',
      author: 'Creative Studio',
      tagline: 'Performance. Power. Precision.'
    }
  },
  {
    id: 2,
    title: 'АНАЛИЗ ПРОЕКТА',
    type: 'analysis',
    content: {
      description: 'Bridgestone — мировой лидер в производстве высокопроизводительных шин для автоспорта и премиум-сегмента.',
      utp: 'Технологии из Formula 1 в каждой шине',
      values: ['Инновации', 'Безопасность', 'Производительность', 'Качество']
    }
  },
  {
    id: 3,
    title: 'ЦЕЛЕВАЯ АУДИТОРИЯ',
    type: 'audience',
    content: {
      who: '25-45 лет, автоэнтузиасты, профессиональные гонщики, владельцы спорткаров',
      insights: ['Хотят максимальную безопасность на высоких скоростях', 'Ценят технологии из автоспорта', 'Готовы платить за проверенное качество'],
      solution: 'Визуал передает скорость, технологичность и надежность через агрессивную графику'
    }
  },
  {
    id: 4,
    title: 'TONE OF VOICE',
    type: 'tone',
    content: {
      voice: 'Дерзкий, уверенный, технологичный',
      emotions: ['Адреналин', 'Мощь', 'Контроль', 'Превосходство'],
      keywords: ['СКОРОСТЬ', 'PRECISION', 'ПОБЕДА', 'ТЕХНОЛОГИИ', 'GRIP']
    }
  },
  {
    id: 5,
    title: 'МУДБОРД',
    type: 'moodboard',
    content: {
      description: 'Racing-эстетика: гоночные трассы, протекторы шин, динамические линии скорости'
    }
  },
  {
    id: 6,
    title: 'ЦВЕТОВАЯ ПАЛИТРА',
    type: 'colors',
    content: {
      colors: [
        { name: 'Bridgestone Red', hex: '#E31E24', usage: 'Основной акцент, призывы к действию' },
        { name: 'Racing Black', hex: '#000000', usage: 'Фон, типографика, премиум-ощущение' },
        { name: 'Pure White', hex: '#FFFFFF', usage: 'Контраст, читаемость, чистота' },
        { name: 'Chrome Silver', hex: '#C0C0C0', usage: 'Детали, металлические акценты' }
      ]
    }
  },
  {
    id: 7,
    title: 'ТИПОГРАФИКА',
    type: 'typography',
    content: {
      primary: {
        name: 'Montserrat Black',
        usage: 'Заголовки, акциденция',
        example: 'BRIDGESTONE'
      },
      secondary: {
        name: 'Roboto',
        usage: 'Основной текст, описания',
        example: 'Performance-driven technology from track to road'
      }
    }
  },
  {
    id: 8,
    title: 'ГРАФИЧЕСКИЕ ЭЛЕМЕНТЫ',
    type: 'graphics',
    content: {
      elements: [
        { name: 'Логотип Bridgestone', description: 'Классический красный логотип на черном' },
        { name: 'Паттерн протектора', description: 'Текстура протектора шин как графический элемент' },
        { name: 'Динамические линии', description: 'Диагональные линии скорости и движения' },
        { name: 'Иконки', description: 'Минималистичные пиктограммы характеристик' }
      ]
    }
  },
  {
    id: 9,
    title: 'СОЦИАЛЬНЫЕ СЕТИ',
    type: 'social',
    content: {
      formats: ['Stories: 1080x1920', 'Posts: 1080x1080', 'Reels: вертикальный формат'],
      style: 'Динамичные визуалы с крупной типографикой, резкие переходы, эффект скорости'
    }
  },
  {
    id: 10,
    title: 'ДРУГИЕ НОСИТЕЛИ',
    type: 'carriers',
    content: {
      items: [
        { name: 'Презентации', description: 'Темный фон, контрастная типографика' },
        { name: 'Бланки и документы', description: 'Минимализм с красным акцентом' },
        { name: 'Визитки', description: 'Черный мат с выборочным лаком на логотипе' },
        { name: 'Мерч', description: 'Футболки, кепки в racing-стилистике' }
      ]
    }
  },
  {
    id: 11,
    title: 'ОБОСНОВАНИЕ РЕШЕНИЙ',
    type: 'reasoning',
    content: {
      color: 'Красный #E31E24 — фирменный Bridgestone, вызывает адреналин и ассоциируется со скоростью. Черный — премиальность и технологичность.',
      typography: 'Montserrat Black передает агрессию и уверенность гонок. Roboto обеспечивает читаемость в технических текстах.',
      impact: 'Визуал мгновенно считывается как racing-бренд, привлекает целевую аудиторию автоэнтузиастов и создает желание владеть продуктом.'
    }
  },
  {
    id: 12,
    title: 'СПАСИБО ЗА ВНИМАНИЕ!',
    type: 'final',
    content: {
      email: 'studio@example.com',
      phone: '+7 (999) 123-45-67',
      website: 'bridgestone-concept.ru'
    }
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E31E24] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E31E24] to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-12 min-h-screen flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </div>
          <div className="text-2xl font-black tracking-wider text-[#E31E24]">
            BRIDGESTONE
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          {slide.type === 'title' && (
            <div className="text-center animate-fade-in">
              <h1 className="text-8xl font-black mb-6 tracking-tight">{slide.title}</h1>
              <div className="text-xl text-muted-foreground mb-12">{slide.subtitle}</div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-[#E31E24]">{slide.content.projectName}</div>
                <div className="text-xl text-muted-foreground">{slide.content.author}</div>
                <div className="text-2xl font-light italic mt-8">{slide.content.tagline}</div>
              </div>
            </div>
          )}

          {slide.type === 'analysis' && (
            <div className="max-w-4xl animate-slide-in">
              <h2 className="text-6xl font-black mb-12">{slide.title}</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#E31E24] mb-3">ОПИСАНИЕ</h3>
                  <p className="text-lg leading-relaxed">{slide.content.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#E31E24] mb-3">УТП</h3>
                  <p className="text-2xl font-bold">{slide.content.utp}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#E31E24] mb-3">ЦЕННОСТИ БРЕНДА</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {slide.content.values.map((value: string, idx: number) => (
                      <Card key={idx} className="bg-secondary border-[#E31E24] border-l-4 p-6">
                        <div className="text-xl font-bold">{value}</div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'audience' && (
            <div className="max-w-4xl animate-slide-in">
              <h2 className="text-6xl font-black mb-12">{slide.title}</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#E31E24] mb-3">КТО НАШИ ЛЮДИ</h3>
                  <p className="text-lg leading-relaxed">{slide.content.who}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#E31E24] mb-3">ИНСАЙТЫ</h3>
                  <div className="space-y-3">
                    {slide.content.insights.map((insight: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-[#E31E24] flex-shrink-0 mt-1" size={20} />
                        <span className="text-lg">{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#E31E24] mb-3">КАК ВИЗУАЛ РЕШАЕТ</h3>
                  <p className="text-lg leading-relaxed">{slide.content.solution}</p>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'tone' && (
            <div className="max-w-4xl animate-slide-in">
              <h2 className="text-6xl font-black mb-12">{slide.title}</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#E31E24] mb-3">КАК ГОВОРИТ БРЕНД</h3>
                  <p className="text-2xl font-bold">{slide.content.voice}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#E31E24] mb-3">ЭМОЦИИ</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {slide.content.emotions.map((emotion: string, idx: number) => (
                      <Card key={idx} className="bg-secondary border-none p-6">
                        <div className="text-xl font-bold text-center">{emotion}</div>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#E31E24] mb-3">КЛЮЧЕВЫЕ СЛОВА</h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {slide.content.keywords.map((keyword: string, idx: number) => (
                      <div key={idx} className="px-6 py-3 bg-[#E31E24] text-white font-black text-lg">
                        {keyword}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'moodboard' && (
            <div className="max-w-4xl animate-slide-in">
              <h2 className="text-6xl font-black mb-12">{slide.title}</h2>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="aspect-square bg-gradient-to-br from-[#E31E24] to-black rounded"></div>
                <div className="aspect-square bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNIDAgMCBMIDIwIDIwIE0gMjAgMCBMIDAgMjAiIHN0cm9rZT0iI0UzMUUyNCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] rounded"></div>
                <div className="aspect-square bg-gradient-to-tr from-black via-[#C0C0C0] to-white rounded"></div>
                <div className="aspect-square bg-black border-4 border-[#E31E24] rounded flex items-center justify-center">
                  <Icon name="Zap" size={64} className="text-[#E31E24]" />
                </div>
                <div className="aspect-square bg-secondary rounded flex items-center justify-center">
                  <div className="text-4xl font-black rotate-12">SPEED</div>
                </div>
                <div className="aspect-square bg-gradient-to-bl from-[#E31E24] via-black to-[#C0C0C0] rounded"></div>
              </div>
              <p className="text-lg text-center text-muted-foreground">{slide.content.description}</p>
            </div>
          )}

          {slide.type === 'colors' && (
            <div className="max-w-4xl animate-slide-in">
              <h2 className="text-6xl font-black mb-12">{slide.title}</h2>
              <div className="space-y-6">
                {slide.content.colors.map((color: any, idx: number) => (
                  <Card key={idx} className="bg-secondary border-none p-6 flex items-center gap-6">
                    <div 
                      className="w-32 h-32 rounded flex-shrink-0 border-2 border-white/20"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{color.name}</h3>
                      <div className="text-lg text-[#E31E24] font-mono mb-2">{color.hex}</div>
                      <p className="text-muted-foreground">{color.usage}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'typography' && (
            <div className="max-w-4xl animate-slide-in">
              <h2 className="text-6xl font-black mb-12">{slide.title}</h2>
              <div className="space-y-12">
                <Card className="bg-secondary border-none p-8">
                  <h3 className="text-xl font-bold text-[#E31E24] mb-4">ЗАГОЛОВКИ</h3>
                  <div className="text-sm text-muted-foreground mb-4">{slide.content.primary.name} • {slide.content.primary.usage}</div>
                  <div className="text-6xl font-black">{slide.content.primary.example}</div>
                </Card>
                <Card className="bg-secondary border-none p-8">
                  <h3 className="text-xl font-bold text-[#E31E24] mb-4">ОСНОВНОЙ ТЕКСТ</h3>
                  <div className="text-sm text-muted-foreground mb-4">{slide.content.secondary.name} • {slide.content.secondary.usage}</div>
                  <div className="text-2xl font-normal">{slide.content.secondary.example}</div>
                </Card>
              </div>
            </div>
          )}

          {slide.type === 'graphics' && (
            <div className="max-w-4xl animate-slide-in">
              <h2 className="text-6xl font-black mb-12">{slide.title}</h2>
              <div className="grid grid-cols-2 gap-6">
                {slide.content.elements.map((element: any, idx: number) => (
                  <Card key={idx} className="bg-secondary border-l-4 border-[#E31E24] p-6">
                    <h3 className="text-xl font-bold mb-3">{element.name}</h3>
                    <p className="text-muted-foreground">{element.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'social' && (
            <div className="max-w-4xl animate-slide-in">
              <h2 className="text-6xl font-black mb-12">{slide.title}</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#E31E24] mb-4">ФОРМАТЫ</h3>
                  <div className="space-y-3">
                    {slide.content.formats.map((format: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Icon name="Image" className="text-[#E31E24]" size={20} />
                        <span className="text-lg">{format}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#E31E24] mb-4">СТИЛЬ</h3>
                  <p className="text-lg leading-relaxed">{slide.content.style}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <Card className="aspect-square bg-gradient-to-br from-[#E31E24] to-black p-6 flex items-end">
                    <div className="text-2xl font-black">POST</div>
                  </Card>
                  <Card className="aspect-[9/16] bg-black border-2 border-[#E31E24] p-6 flex items-end">
                    <div className="text-xl font-black">STORY</div>
                  </Card>
                  <Card className="aspect-square bg-secondary p-6 flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-[#E31E24]" />
                  </Card>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'carriers' && (
            <div className="max-w-4xl animate-slide-in">
              <h2 className="text-6xl font-black mb-12">{slide.title}</h2>
              <div className="grid grid-cols-2 gap-6">
                {slide.content.items.map((item: any, idx: number) => (
                  <Card key={idx} className="bg-secondary border-none p-8 hover:border-[#E31E24] hover:border-l-4 transition-all">
                    <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'reasoning' && (
            <div className="max-w-4xl animate-slide-in">
              <h2 className="text-6xl font-black mb-12">{slide.title}</h2>
              <div className="space-y-8">
                <Card className="bg-secondary border-l-4 border-[#E31E24] p-8">
                  <h3 className="text-xl font-bold text-[#E31E24] mb-4">ЦВЕТ</h3>
                  <p className="text-lg leading-relaxed">{slide.content.color}</p>
                </Card>
                <Card className="bg-secondary border-l-4 border-[#E31E24] p-8">
                  <h3 className="text-xl font-bold text-[#E31E24] mb-4">ТИПОГРАФИКА</h3>
                  <p className="text-lg leading-relaxed">{slide.content.typography}</p>
                </Card>
                <Card className="bg-secondary border-l-4 border-[#E31E24] p-8">
                  <h3 className="text-xl font-bold text-[#E31E24] mb-4">ВОЗДЕЙСТВИЕ</h3>
                  <p className="text-lg leading-relaxed">{slide.content.impact}</p>
                </Card>
              </div>
            </div>
          )}

          {slide.type === 'final' && (
            <div className="text-center animate-fade-in">
              <h2 className="text-7xl font-black mb-12">{slide.title}</h2>
              <div className="space-y-6 text-xl">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Mail" className="text-[#E31E24]" size={24} />
                  <span>{slide.content.email}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Phone" className="text-[#E31E24]" size={24} />
                  <span>{slide.content.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Globe" className="text-[#E31E24]" size={24} />
                  <span>{slide.content.website}</span>
                </div>
              </div>
              <div className="mt-16 text-6xl font-black text-[#E31E24]">
                BRIDGESTONE
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="lg"
            className="border-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-all"
            disabled={currentSlide === 0}
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>
          
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-[#E31E24] w-8' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="lg"
            className="border-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-all"
            disabled={currentSlide === slides.length - 1}
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-[#E31E24] to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-[#E31E24] to-transparent"></div>
    </div>
  );
}
