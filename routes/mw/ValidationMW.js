export default (req, res, next) => {
    if (!(req.body && Object.keys(req.body)[0])) {
        res.status(404).send('No body')
    } else {
        next()
    }
}