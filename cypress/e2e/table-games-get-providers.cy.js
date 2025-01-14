// GET Table Games Providers List

const password = 'Qwerty1Admin*'
const user_id = 'm.raychev@nuxgame.com'
const platform_id = '90dd1cb0-ad8e-480a-b06e-d4c110b6653b'
const login_url = "/api/users/authorize"
const table_games_providers_url = '/api/v2/casino/table-games/get-providers'
let token = ''

describe('Get Table Games Providers List Tests', () => {
    before(() => {
        cy.authorize(login_url, password, user_id, platform_id).then(({body}) => {
            token = body.data.token
        })
    })
    it('Should Return List Of Table Games Providers', () => {
        cy.request({
            methtod: 'GET',
            url: table_games_providers_url,
            headers: {
                'Platform-Id': platform_id
            },
            auth: {
                bearer: token
            }
        }).then(({status, body}) => {
            expect(status).equal(200)
            expect(body.status).equal(true)
        })
    })
})
