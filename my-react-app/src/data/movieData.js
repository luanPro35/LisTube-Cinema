// data/movieData.js
export const movieData = {
  trending: [
    {
      id: 1,
      title: "Spider-Man: No Way Home",
      year: 2021,
      rating: 8.4,
      duration: "148 min",
      genre: ["Action", "Adventure", "Sci-Fi"],
      poster:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop&crop=faces",
      description:
        "Peter Parker seeks help from Doctor Strange to make the world forget his secret identity as Spider-Man.",
    },
    {
      id: 2,
      title: "The Batman",
      year: 2022,
      rating: 7.8,
      duration: "176 min",
      genre: ["Action", "Crime", "Drama"],
      poster:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop&crop=faces",
      description:
        "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
    },
    {
      id: 3,
      title: "Top Gun: Maverick",
      year: 2022,
      rating: 8.7,
      duration: "131 min",
      genre: ["Action", "Drama"],
      poster:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop&crop=faces",
      description:
        "After thirty years, Maverick is still pushing the envelope as a top naval aviator.",
    },
    {
      id: 4,
      title: "Dune",
      year: 2021,
      rating: 8.0,
      duration: "155 min",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      poster:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop&crop=faces",
      description:
        "Paul Atreides leads nomadic tribes in a rebellion against the evil House Harkonnen.",
    },
  ],
  popular: [
    {
      id: 5,
      title: "Avatar: The Way of Water",
      year: 2022,
      rating: 7.6,
      duration: "192 min",
      genre: ["Action", "Adventure", "Family"],
      poster:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop&crop=faces",
      description:
        "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together.",
    },
    {
      id: 6,
      title: "Black Panther: Wakanda Forever",
      year: 2022,
      rating: 6.7,
      duration: "161 min",
      genre: ["Action", "Adventure", "Drama"],
      poster:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop&crop=faces",
      description:
        "The nation of Wakanda is pitted against intervening world powers as they mourn the loss of their king.",
    },
    {
      id: 7,
      title: "Doctor Strange in the Multiverse of Madness",
      year: 2022,
      rating: 6.9,
      duration: "126 min",
      genre: ["Action", "Adventure", "Fantasy"],
      poster:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop&crop=faces",
      description:
        "Doctor Strange teams up with a mysterious young woman to travel through the multiverse.",
    },
    {
      id: 8,
      title: "Minions: The Rise of Gru",
      year: 2022,
      rating: 6.5,
      duration: "87 min",
      genre: ["Animation", "Adventure", "Comedy"],
      poster:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop&crop=faces",
      description:
        "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.",
    },
  ],
  recent: [
    {
      id: 9,
      title: "Everything Everywhere All at Once",
      year: 2022,
      rating: 7.8,
      duration: "139 min",
      genre: ["Action", "Adventure", "Comedy"],
      poster:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop&crop=faces",
      description:
        "A middle-aged Chinese immigrant is swept up in an insane adventure.",
    },
    {
      id: 10,
      title: "The Northman",
      year: 2022,
      rating: 7.0,
      duration: "137 min",
      genre: ["Action", "Adventure", "Drama"],
      poster:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop&crop=faces",
      description:
        "A young Viking prince on his quest to avenge his father's murder.",
    },
  ],
};

export const tabs = [
  { id: "trending", label: "Trending", icon: "🔥" },
  { id: "popular", label: "Popular", icon: "⭐" },
  { id: "recent", label: "Recently Added", icon: "🆕" },
];
