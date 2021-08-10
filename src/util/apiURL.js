export const apiURL = () => {
    if (
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'test'
    ) {
      return 'http://localhost:5000'
    }
    return 'https://budgeting-app-express.herokuapp.com/';
  }