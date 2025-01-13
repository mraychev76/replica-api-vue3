require("dotenv").config()
const user_id = process.env.USER_ID
const password = process.env.PASSWORD
const platform_id = "28fcaa6c-7147-457b-824c-391a95038d96"
let token = ''

const get_casino_transactions_url = "/api/v2/get_casino_transactions"
const login_url = "/api/users/authorize"

describe('Get Casino Transactions Tests', () => {
  before(() => {
    cy.request({
      method: 'POST',
      url: login_url,
      headers: {
        'Platform-Id': platform_id
      },
      body: {
        "password": "Qwerty1Admin*",
        "user_id": "maxraychev76@gmail.com",
      }
    }).then(({body}) => {
      token = body.data.token
    })
  })
  it('Should Return List of Casino Transacitons For User', () => {
    cy.request({
      method: 'GET',
      url: get_casino_transactions_url,
      headers: {
        Authorization: "Bearer " + token,
        'Platform-Id': platform_id
      }
    }).then(({status, body}) => {
      expect(status).equal(200)
      expect(body.status).equal(true)
    })
  })
})