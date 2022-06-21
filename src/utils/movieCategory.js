const fetchTrending = () => {
    
};

const fetchTopPicks = () => {

}

const fetchNewReleases = () => {

}

export const movieCategory = {
  trendingNow: {
    heading: 'Trending Now',
    fetchTrending,
  },
  topPicks: {
    heading: 'Top Picks',
    fetchTopPicks,
  },
  newReleases: {
    heading: 'New Releases',
    fetchNewReleases,
  },
};
