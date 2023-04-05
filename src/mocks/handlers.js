import { rest } from "msw"

const baseURL = "https://ci-moments-react.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return ctx.json({

        });
    }),
    rest.post(`${baseURL}d-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.ststus(200));
    })
    }),
]