const ChessOpenings = require('../models/ChessOpenings');

module.exports = (app) => {
    app.get('/api/chessopenings/:id', async (req, res) => {
        const id = req.params.id;
        const result = await ChessOpenings.findById(id);
        if (!result) {
            return res.status(404).send({success: false, msg: 'Chess opening not found'});
        }
        res.status(200).send({success: true, result: result});
    });
    app.get('/api/chessopenings', async (req, res) => {
        const id = req.params.id;
        const result = await ChessOpenings.find();
        if (!result) {
            return res.status(404).send({success: false, msg: 'Chess opening not found'});
        }
        res.status(200).send({success: true, result: result});
    });

    app.post('/api/chessopenings', async (req, res) => {
        const { name, king, queen, rook1, rook2, bishop1, bishop2, knight1, knight2, pawn1, pawn2, pawn3, pawn4, pawn5, pawn6, pawn7, pawn8 } = req.body;
        const chessOpenings = new ChessOpenings({
            name,
            king,
            queen,
            rook1,
            rook2,
            bishop1,
            bishop2,
            knight1,
            knight2,
            pawn1,
            pawn2,
            pawn3,
            pawn4,
            pawn5,
            pawn6,
            pawn7,
            pawn8});
        const result = await chessOpenings.save();
        res.status(201).send({success: true, result: result});
    });
}