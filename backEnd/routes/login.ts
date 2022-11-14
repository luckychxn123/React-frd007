import express from 'express'

export let loginRoute = express.Router()

loginRoute.get('/', (req, res) => {
    res.end('hi lucky')
    return
})



loginRoute.get('/todoItems', (req, res) => {
    res.json([{ name: 'server_oat', count: 5 }])
    return
})


loginRoute.post('/testsinglefetch', (req, res) => {
    let data = req.body.msg
    console.log(data, '==data from Front end')
    res.json({ name: 'test waiting for the /upgrade/' })
    return
})


loginRoute.post('/testsendfetch', (req, res) => {
    console.log(req.body)
    let data = req.body.msg
    console.log(data, '==data sent from Front end sendFetchX')
    res.json({ msg: 'success test send fetch from backEnd' })
    return
})