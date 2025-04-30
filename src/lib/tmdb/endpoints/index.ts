/**
 * A collection of endpoint paths for accessing various TMDB API resources.
 */
const endpoint = {
  /** Endpoints related to movie data */
  movie: {
    /** Trending movie endpoints */
    trending: {
      /** Get movies trending over the past week */
      week: '/trending/movie/week',

      /** Get movies trending today */
      day: '/trending/movie/day',
    },

    /**
     * Get details for a specific movie by its ID
     * @param {number} id - The TMDB ID of the movie
     * @returns {string} The API path for the movie detail
     */
    id: (id: number) => `/movie/${id}`,
  },

  /** Endpoints related to TV show data */
  tv: {
    /** Trending TV show endpoints */
    trending: {
      /** Get TV shows trending over the past week */
      week: '/trending/tv/week',

      /** Get TV shows trending today */
      day: '/trending/tv/day',
    },

    /**
     * Get details for a specific TV show by its ID
     * @param {number} id - The TMDB ID of the TV show
     * @returns {string} The API path for the TV show detail
     */
    id: (id: number) => `/tv/${id}`,
  },

  /** Endpoints related to search functionality */
  search: {
    /** Perform a multi-type search (movies, TV shows, people) */
    multi: '/search/multi',
  },
}

export default endpoint
