// GET Game Data

const password = 'Qwerty1Admin*'
const user_id = 'm.raychev@nuxgame.com'
const platform_id = '90dd1cb0-ad8e-480a-b06e-d4c110b6653b'
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
                'Platform-Id': platform_id,
                Authorzation: "Bearer " + token
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