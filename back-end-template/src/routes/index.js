import { helloRoute } from "./helloRoute";const helloRoute = {
    method: 'get',
    path: '/hello',
    handler: (req, res) => {
        res.send("hello from helloRoute");
    },
}

export const routes = [
    helloRoute,
];