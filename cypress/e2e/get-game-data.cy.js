// GET Game Data

const password = 'Qwerty1Admin*'
const user_id = 'maxraychev76@gmail.com'
const platform_id = '28fcaa6c-7147-457b-824c-391a95038d96'
const login_url = "/api/users/authorize"
const get_game_data_url = '/api/casino/game_data'
const game_id = 5796
let token = ''

describe('Get Game Data By ID', () => {
    before(() => {
        cy.authorize(login_url, password, user_id, platform_id).then(({body}) => {
            token = body.data.token
        })
    })
    it('Should Get Game Data By ID', () => {
        cy.request({
            method: 'GET',
            url: get_game_data_url,
            auth: {
                bearer: token
            },
            headers: {
                'Platform-Id': platform_id
            },
            qs: {
                game_id
            }
        }).then(({status, body}) => {
            expect(status).equal(200)
            expect(body.status).equal(true)
        })
    })
})