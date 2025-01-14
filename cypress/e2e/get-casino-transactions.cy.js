require("dotenv").config()
const password = 'Qwerty1Admin*'
const user_id = 'm.raychev@nuxgame.com'
const platform_id = '90dd1cb0-ad8e-480a-b06e-d4c110b6653b'
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
        "user_id": "m.raychev@nuxgame.com",
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