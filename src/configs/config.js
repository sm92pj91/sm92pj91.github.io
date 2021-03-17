const dev = {
  env: "DEV",
  BASE_URL: "https://uu6tvasc0i.execute-api.eu-west-1.amazonaws.com/dev",
  IMAGE_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/challenges-dev",
  CAROUSEL_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/carousel-dev"
}

const preprod = {
  env: "PREPROD",
  BASE_URL: "https://api.challengeacceptedapp.com/private-admin-preprod",
  IMAGE_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/challenges-preprod",
  CAROUSEL_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/carousel-preprod"
}
const prod = {
  env: "",
  BASE_URL: "https://api.challengeacceptedapp.com/private-admin-prod",
  IMAGE_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/challenges-prod",
  CAROUSEL_BASE: "https://challenge-accepted-mob.s3.eu-west-2.amazonaws.com/carousel-prod"
}

const config = process.env.REACT_APP_STAGE === 'preprod' ? preprod : process.env.REACT_APP_STAGE === 'prod' ? prod : dev;
// eslint-disable-next-line
export default {
  ...config
};
