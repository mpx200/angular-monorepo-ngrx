
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

export interface SettingsStruktura {
  widgetUrl: string;
}

export interface Post {
  url: string;
  comments_url: string;
  title: string;
  display_photo: boolean;
  display_video: boolean;
  thumbs: any;
  category_url: string;
  category_name: string;
  shares: number;
  comment_count: number;
}

export interface PostoviStruktura {
  settings: SettingsStruktura;
  posts: Post[];
}
