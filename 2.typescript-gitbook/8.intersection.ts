// 프로그래머를 나타내는 타입
type Programmer = { favoriteLanguage: string };
const programmer: Programmer = { favoriteLanguage: 'TypeScript' };

// 맥주를 좋아하는 사람을 나타내는 타입
type BeerLover = { favoriteBeer: string };
const beerLover: BeerLover = { favoriteBeer: 'Imperial Stout' };

// 맥주를 좋아하는 프로그래머를 나타내는 타입을 일일이 기술했을 때
type BeerLovingProgrammer = { favoriteLanguage: string; favoriteBeer: string; };
const JuntaeKim: BeerLovingProgrammer = { 
  favoriteLanguage: 'TypeScript',
  favoriteBeer: 'Imperial Stout',
};

// intersection
type intersection1 = Programmer & BeerLover;
type intersection2
    = Programmer
    & BeerLover;
type intersection3 =
    & Programmer
    & BeerLover;

type Juntae = {
    favoriteLanguage: 'Typescript',
    favoriteBeer: 'none'
};

