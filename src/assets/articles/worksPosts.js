// import projectImg1 from '../assets/images/project1.png'; // 画像がある場合

export const worksPosts = [
    {
        id: 3,
        title: "Google Search Consoleを設定",
        date: "2025.11.23",
        category: "Web Development",
        tools: ["Google Search Console"],
        image: "/images/worksImg/id3.png",
        description: "過去のWEBサイトではちゃんと設定していなかったかもしれないですが、GA4設定のあとにGoogleSearchConsoleも設定完了。サイトマップをGemini3.0で作成し、アップロードしたので、そのうちGoogle先生が拾ってくれるだろう",
        link: "#",
        featured: true,
    },
    {
        id: 2,
        title: "Googleアナリティクス4を設定",
        date: "2025.11.22",
        category: "Web Development",
        tools: ["Google Analytics 4"],
        image: "/images/worksImg/id2.png",
        description: "こちらは若干使い慣れているのと、過去にWEBサイトを作成したときの設定が残っていたので苦労せず設定できました。",
        link: "#",
        featured: true,
    },
    {
        id: 1,
        title: "ポートフォリオサイトを作成しました",
        date: "2025.11.22",
        category: "Web Development",
        tools: ["React", "Vite", "GitHub Pages"],
        image: "/images/worksImg/id1.png",
        description: `Gemini3・Antigravityの誕生により、簡単にサイトを生成できることが判明したため
        さっそく自身の活動を記録するためのWebサイトを作成。`,
        link: "https://github.com/kokage21/...",
        featured: true,
    },
];