export const tmdbEndpoints = {
  trending: {
    movies: '/trending/movie/week',
    tv: '/trending/tv/week',
  },
  person: (id: number) => `/person/${id}`,
  movie: (id: number) => `/movie/${id}`,
  tv: (id: number) => `/tv/${id}`,
  search: '/search/multi',
}
