const dev = {
  BASE_URL: "https://uu6tvasc0i.execute-api.eu-west-1.amazonaws.com/dev",
  IMAGE_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/challenges-dev",
  CAROUSEL_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/carousel-dev"
}

const preprod = {
  BASE_URL: "https://api.challengeacceptedapp.com/private-admin-preprod",
  IMAGE_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/challenges-preprod",
  CAROUSEL_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/carousel-preprod"
}
const prod = {
  BASE_URL: "https://api.challengeacceptedapp.com/private-admin-prod",
  IMAGE_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/challenges-prod",
  CAROUSEL_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/carousel-prod"
}

const config = process.env.REACT_APP_STAGE === 'preprod' ? preprod : process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  ...config
};
