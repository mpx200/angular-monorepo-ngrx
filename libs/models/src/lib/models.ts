
export interface Submenu {
  slug: string;
  title: string;
  url: string;
}

export interface Kategorije {
  title: string;
  url: string;
  slug: string;
  submenu: Submenu[];
}

export interface ONama {
  title: string;
  url: string;
}

export interface Marketing {
  title: string;
  url: string;
}

export interface Impressum {
  title: string;
  url: string;
}

export interface UsloviKoriscenja {
  title: string;
  url: string;
}

export interface Kontakt {
  title: string;
  url: string;
}

export interface Redakcija {
  onama: ONama;
  marketing: Marketing;
  impressum: Impressum;
  usloviKoriscenja: UsloviKoriscenja;
  kontakt: Kontakt;
}

export interface Radio {
  title: string;
  url: string;
}

export interface Telegram {
  title: string;
  url: string;
}

export interface Servisi {
  radio: Radio;
  telegram: Telegram;
}

export interface TelegrafStruktura {
  kategorije: Kategorije[];
  redakcija: Redakcija;
  servisi: Servisi;
}

export interface PopularneVesti {
  popular: Popular[];
}

export interface Popular {
  id: BigInteger;
  title: string;
  date: BigInteger;
  uri: string;
  url: string;
}

export interface Comments {
  comments: Comment[];
}

export interface Comment {
  id: BigInteger;
  title: string;
  comment_count: BigInteger;
  date: BigInteger;
  uri: string;
  url: string;
  shares: BigInteger;
}
