export interface Leaderboard {
    desc: string;
    date: Date;
    answers: Answers[];
}

export interface Answers {
    name: String;
    selected: String;
}

export interface Animal {
    name: String;
    letters: string[];
    img: String;
}

export interface Alphabets {
    img: string;
    desc: string;
}

export interface Numbers {
    img: string;
    words: string;
}
