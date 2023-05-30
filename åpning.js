app.get('/', (req, res) => {
    res.sendFile(Sjakk_Trener + '/applikasjon.html');
  });

  function clickShowPositionBtn () {
    console.log('1.d4 d5 2.Nf3 Nf6 3.Bf4')
    console.log(board.position())
  
    console.log("rnbqkbnr/pppppppp/8/8/8/2P5/PP1PPPPP/RNBQKBNR w KQkq - 0 1")
    console.log(board.fen())
  }
  