// Get Table Games List

const password = 'Qwerty1Admin*'
const user_id = 'maxraychev76@gmail.com'
const platform_id = '28fcaa6c-7147-457b-824c-391a95038d96'
const login_url = "/api/users/authorize"
const table_games_url ='/api/v2/casino/table-games'
let token = ''


describe('Get Table Games List Tests', () => {
    before(() => {
        cy.authorize(login_url, password, user_id, platform_id).then(({body}) => {
            token = body.data.token
        })
    })
    it('Should Return List Of Table Games', () => {
        cy.request({
            methtod: 'GET',
            url: table_games_url,
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