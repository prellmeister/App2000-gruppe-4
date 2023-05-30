const mongoose = require('mongoose');

const ChessOpeningsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    king: {
        type: String,
        required: true,
    },
    queen: {
        type: String,
        required: true,
    },
    rook1: {
        type: String,
        required: true,
    },
    rook2: {
        type: String,
        required: true,
    },
    bishop1: {
        type: String,
        required: true,
    },
    bishop2: {
        type: String,
        required: true,
    },
    knight1: {
        type: String,
        required: true,
    },
    knight2: {
        type: String,
        required: true,
    },
    pawn1: {
        type: String,
        required: true,
    },
    pawn2: {
        type: String,
        required: true,
    },
    pawn3: {
        type: String,
        required: true,
    },
    pawn4: {
        type: String,
        required: true,
    },
    pawn5: {
        type: String,
        required: true,
    },
    pawn6: {
        type: String,
        required: true,
    },
    pawn7: {
        type: String,
        required: true,
    },
    pawn8: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('ChessOpenings', ChessOpeningsSchema);