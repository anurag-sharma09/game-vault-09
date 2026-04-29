import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Car,
  ChessKnight,
  Compass,
  Download,
  Gamepad2,
  Joystick,
  Shield,
  ShieldCheck,
  ShieldHalf,
  Skull,
  Star,
  Swords,
  Volleyball,
  Zap,
} from 'lucide-react';

const STATS = [
  {
    value: '18+',
    label: 'Games Listed',
    icon: Gamepad2,
    accent: '#8A52FF',
  },
  {
    value: '100%',
    label: 'Official Links',
    icon: ShieldCheck,
    accent: '#12DFFF',
  },
  {
    value: 'Safe',
    label: 'Zero Malware',
    icon: Shield,
    accent: '#21E6A3',
  },
  {
    value: 'Free',
    label: 'No Hidden Fees',
    icon: Star,
    accent: '#FFC72A',
  },
];

const TRENDING_GAMES = [
  {
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    rating: '4.8',
    image: '/cyberpunk.png',
    badgeClass: 'bg-[#261445] text-[#A57CFF]',
    imagePosition: 'center 28%',
  },
  {
    title: 'Elden Ring',
    genre: 'Action',
    rating: '4.9',
    image: '/eldenring.png',
    badgeClass: 'bg-[#0E3550] text-[#3DD8FF]',
    imagePosition: 'center 58%',
  },
  {
    title: 'Call of Duty MWIII',
    genre: 'FPS',
    rating: '4.7',
    image: '/cod.png',
    badgeClass: 'bg-[#0D3A2F] text-[#20E89D]',
    imagePosition: 'center 44%',
  },
  {
    title: 'Forza Horizon 5',
    genre: 'Racing',
    rating: '4.8',
    image: '/forza.png',
    badgeClass: 'bg-[#4A2915] text-[#FFAE62]',
    imagePosition: 'center 59%',
  },
  {
    title: 'God of War Ragnarök',
    genre: 'Action',
    rating: '4.9',
    image: '/godofwar.png',
    badgeClass: 'bg-[#0E3550] text-[#3DD8FF]',
    imagePosition: 'center 46%',
  },
  {
    title: 'Hogwarts Legacy',
    genre: 'RPG',
    rating: '4.7',
    image: '/hogwarts.png',
    badgeClass: 'bg-[#261445] text-[#A57CFF]',
    imagePosition: 'center 57%',
  },
];

const CATEGORIES = [
  { name: 'Action', count: '320+ Games', icon: Swords, accent: '#8970FF' },
  { name: 'Adventure', count: '210+ Games', icon: Compass, accent: '#1AE1FF' },
  { name: 'RPG', count: '450+ Games', icon: ShieldHalf, accent: '#8E73FF' },
  { name: 'Racing', count: '180+ Games', icon: Car, accent: '#FFBD1D' },
  { name: 'Sports', count: '180+ Games', icon: Volleyball, accent: '#29E3A7' },
  { name: 'Strategy', count: '140+ Games', icon: ChessKnight, accent: '#FFD01E' },
  { name: 'Simulation', count: '190+ Games', icon: Joystick, accent: '#FF5BA6' },
  { name: 'Horror', count: '120+ Games', icon: Skull, accent: '#FF5BA6' },
];

function SectionHeader({ title }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 sm:mb-7">
      <div className="flex items-center gap-4">
        <span className="h-9 w-[6px] rounded-full bg-[#7A46FF]" />
        <h2 className="font-[var(--font-head)] text-[1.9rem] font-extrabold tracking-[-0.05em] text-white sm:text-[2.1rem]">
          {title}
        </h2>
      </div>
      <Link
        to="/games"
        className="flex items-center gap-2 text-[1rem] font-semibold text-[#8A5DFF] transition hover:text-[#A580FF]"
      >
        View All
        <ArrowRight size={22} />
      </Link>
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="relative mt-10 h-[360px] overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#060A17] lg:mt-0 lg:h-full lg:min-h-[640px] lg:rounded-none lg:border-0 lg:bg-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(90,57,255,0.28),transparent_26%),radial-gradient(circle_at_83%_36%,rgba(0,217,255,0.22),transparent_18%),radial-gradient(circle_at_58%_92%,rgba(190,65,255,0.16),transparent_18%)]" />

      <div className="absolute inset-y-0 right-0 w-full overflow-hidden lg:w-[88%]">
        <img
          src="/hero-gamer.png"
          alt="Futuristic hooded gamer in a neon city"
          className="h-full w-full object-cover object-[55%_48%] opacity-85"
          style={{ filter: 'brightness(0.58) saturate(1.4) contrast(1.06)' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030611_0%,rgba(3,6,17,0.88)_18%,rgba(3,6,17,0.36)_36%,rgba(3,6,17,0.1)_54%,rgba(3,6,17,0)_100%)]" />
      </div>

      <div className="absolute left-[56%] top-[6%] hidden h-[84%] w-[18px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#E33DFF] to-transparent opacity-75 blur-[1px] lg:block" />
      <div className="absolute left-[64%] top-[12%] hidden h-[72%] w-[8px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1ED8FF] to-transparent opacity-70 lg:block" />

      <div className="absolute left-[4%] top-[31%] z-20 hidden h-[250px] w-[290px] -rotate-[17deg] rounded-[32px] border border-[#7A46FF]/50 bg-[#070B18] p-[3px] shadow-[0_0_40px_rgba(122,70,255,0.24)] lg:block xl:h-[286px] xl:w-[324px]">
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#050816]">
          <img
            src="/cod.png"
            alt="Call of Duty monitor"
            className="h-full w-full object-cover object-[center_42%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.08),rgba(5,8,22,0.18)_62%,rgba(5,8,22,0.38))]" />
        </div>
      </div>

      <div className="absolute right-[1%] top-[30%] z-10 hidden h-[246px] w-[282px] rotate-[16deg] rounded-[32px] border border-[#D14DFE]/40 bg-[#070B18] p-[3px] shadow-[0_0_34px_rgba(209,77,254,0.18)] lg:block xl:h-[280px] xl:w-[318px]">
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#050816]">
          <img
            src="/hogwarts.png"
            alt="Fantasy monitor"
            className="h-full w-full object-cover object-[center_54%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.05),rgba(5,8,22,0.16)_58%,rgba(5,8,22,0.32))]" />
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[9%] hidden h-10 w-10 rotate-12 rounded-[14px] border border-[#7A46FF]/35 bg-[#0A1020]/30 shadow-[0_0_26px_rgba(122,70,255,0.18)] lg:block" />
      <div className="absolute left-[11%] top-[22%] hidden h-14 w-14 -rotate-[18deg] rounded-[18px] border border-[#3F2A77]/45 bg-[#090E1D]/30 lg:block" />
    </div>
  );
}

function TrendingCard({ title, genre, rating, image, badgeClass, imagePosition }) {
  return (
    <div className="group overflow-hidden rounded-[18px] border border-[#18233B] bg-[#09111D] shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1.5 hover:border-[#243251] hover:shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
      <div className="relative aspect-[1.7/1] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0)_0%,rgba(5,8,22,0.12)_55%,rgba(5,8,22,0.42)_100%)]" />
      </div>
      <div className="px-5 pb-4 pt-4">
        <h3 className="truncate font-[var(--font-head)] text-[1.15rem] font-bold tracking-[-0.04em] text-white">
          {title}
        </h3>
        <div className="mt-4 flex items-center justify-between gap-4">
          <span className={`inline-flex rounded-full px-3 py-[6px] text-[0.82rem] font-semibold ${badgeClass}`}>
            {genre}
          </span>
          <div className="flex items-center gap-1.5 text-[0.98rem] font-medium text-white/78">
            <Star size={16} fill="#FFC72A" color="#FFC72A" />
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ name, count, icon: Icon, accent }) {
  return (
    <Link
      to={`/category/${name.toLowerCase()}`}
      className="group flex h-[184px] flex-col items-center justify-center rounded-[18px] border border-[#18233B] bg-[#09111D] px-4 text-center shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1.5 hover:border-[#243251] hover:shadow-[0_18px_40px_rgba(0,0,0,0.3)]"
    >
      <Icon
        size={40}
        strokeWidth={1.9}
        className="mb-5 transition duration-300 group-hover:scale-105"
        style={{
          color: accent,
          filter: `drop-shadow(0 0 14px ${accent}55)`,
        }}
      />
      <span className="font-[var(--font-head)] text-[1.08rem] font-bold tracking-[-0.03em] text-white">
        {name}
      </span>
      <span className="mt-2 text-[0.92rem] text-[#8A94AA]">{count}</span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,#030611_0%,#040815_34%,#050916_100%)] pt-[94px] text-white">
      <Helmet>
        <title>AntiGravity - Play Without Limits</title>
        <meta
          name="description"
          content="Discover, explore, and download the greatest games on the planet."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(111,70,255,0.12),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(20,223,255,0.08),transparent_18%)]" />

        <div className="relative mx-auto max-w-[1920px] pl-5 sm:pl-8 xl:pl-[52px]">
          <div className="grid lg:min-h-[720px] lg:grid-cols-[minmax(0,690px)_minmax(0,1fr)]">
            <div className="z-10 px-0 pb-12 pt-16 pr-5 sm:pr-8 lg:translate-y-[120px] lg:pb-[58px] lg:pt-[104px] lg:pr-8 xl:pr-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6C46FF]/25 bg-[#171329] px-5 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                <Zap size={15} className="text-[#8A5DFF]" />
                <span className="text-[0.86rem] font-bold tracking-[0.06em] text-[#8057FF] sm:text-[0.95rem]">
                  THE NEXT-GEN GAMING HUB
                </span>
              </div>

              <h1 className="mt-8 font-[var(--font-head)] text-[3.8rem] font-extrabold leading-[0.92] tracking-[-0.07em] text-white sm:text-[5.2rem] lg:text-[5.9rem] xl:text-[6.55rem]">
                <span className="block">Play Without</span>
                <span className="mt-1 block bg-gradient-to-b from-[#39E4FF] to-[#1CB8FF] bg-clip-text text-transparent">
                  Limits.
                </span>
              </h1>

              <p className="mt-7 max-w-[640px] text-[1.18rem] leading-[1.58] text-[#A2ACBF] sm:text-[1.24rem]">
                Discover, explore, and download the greatest games on the planet. Every link is
                official, every redirect is safe.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Link
                  to="/games"
                  className="inline-flex h-[68px] min-w-[270px] items-center justify-center gap-3 rounded-[18px] bg-gradient-to-r from-[#6A3EFF] to-[#7A56FF] px-8 text-[1.12rem] font-semibold text-white shadow-[0_0_34px_rgba(112,78,255,0.35)] transition hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(112,78,255,0.45)]"
                >
                  <Gamepad2 size={23} />
                  Browse Games
                </Link>
                <Link
                  to="/games"
                  className="inline-flex h-[68px] min-w-[286px] items-center justify-center gap-3 rounded-[18px] border border-[#1E2A44] bg-[#09111D] px-8 text-[1.12rem] font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] transition hover:-translate-y-1 hover:border-[#273452] hover:bg-[#0B1422]"
                >
                  <Download size={23} />
                  Download Games
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {STATS.map(({ value, label, icon: Icon, accent }) => (
                  <div
                    key={label}
                    className="flex min-h-[84px] items-center gap-4 rounded-[18px] border border-[#18233B] bg-[#09111D]/92 px-4 py-3 backdrop-blur-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/[0.06] bg-[#0C1422]">
                      <Icon
                        size={24}
                        style={{
                          color: accent,
                          filter: `drop-shadow(0 0 12px ${accent}50)`,
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-[var(--font-head)] text-[1.18rem] font-extrabold tracking-[-0.04em] text-white">
                        {value}
                      </div>
                      <div className="text-[0.95rem] text-[#A2ACBF]">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <HeroArtwork />
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-12">
        <div className="mx-auto max-w-[1920px] px-5 sm:px-8 xl:px-[52px]">
          <SectionHeader title="Trending Games" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-6">
            {TRENDING_GAMES.map((game) => (
              <TrendingCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="mx-auto max-w-[1920px] px-5 sm:px-8 xl:px-[52px]">
          <SectionHeader title="Browse by Category" />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-8">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
