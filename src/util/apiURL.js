export const apiURL = () => {
    if (
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'test'
    ) {
      return 'http://localhost:5000'
    }
    return null;//would be  backend heroku link
  }