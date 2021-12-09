import { Router } from "express"

import testRoute from "./testRoute.js";

const router = Router()

router.use('/test', testRoute)

// router.use('/user', testRoute)
// router.use('/books', testRoute)
// router.use('/disc', testRoute)

// router.get('/user/:id', (req, res, next) => {
//     console.log(req)
//     res.send('Hello World!')
// })

// router.post('/', ValidationMW, (req, res, next) => {
//     res.send(req.body)
// })

export default router