// GET Live Providers List

const password = 'Qwerty1Admin*'
const user_id = 'maxraychev76@gmail.com'
const platform_id = '28fcaa6c-7147-457b-824c-391a95038d96'
const login_url = "/api/users/authorize"
const live_providers_url = '/api/casino/live_provider_list'
let token = ''

describe('Get Live Providers List Tests', () => {
    before(() => {
        cy.authorize(login_url, password, user_id, platform_id).then(({body}) => {
            token = body.data.token
        })
    })
    it('Should Return List Of Live Games Providers', () => {
        cy.request({
            methtod: 'GET',
            url: live_providers_url,
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
