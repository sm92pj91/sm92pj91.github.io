const dev = {
  BASE_URL: "https://cmfz9gue62.execute-api.eu-west-1.amazonaws.com/dev",
  IMAGE_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/challenges-dev",
  CAROUSEL_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/carousel-dev"
}

const preprod = {
  BASE_URL: "https://cmfz9gue62.execute-api.eu-west-1.amazonaws.com/preprod",
  IMAGE_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/challenges-preprod",
  CAROUSEL_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/carousel-preprod"
}


const config = process.env.REACT_APP_STAGE ==='preprod' ? preprod : dev;

export default {
  ...config
};
