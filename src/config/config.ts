require('dotenv')
.config({path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"})

const port = process.env.APP_PORT;
export {
  port
}