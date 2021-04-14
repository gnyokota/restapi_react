
export type Languages = {
    iso639_1: string;
    name: string;
};
  
export interface CountriesI {
    name: string;
    nativeName?: string;
    alpha2Code?: string;
    flag: string;
    population: number;
    languages: Languages[];
    region: string;
}

export type PropsSearch = {
    search: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: () => void;
};

export type PropsWrapper = {
 countries: CountriesI[];
};