const ChessBoard = () => {
  const renderSquare = (row: number, col: number) => {
    const isLight = (row + col) % 2 === 0
    const squareColor = isLight ? 'bg-amber-200' : 'bg-amber-700'
    
    return (
      <div
        key={`${row}-${col}`}
        className={`w-12 h-12 ${squareColor} flex items-center justify-center relative`}
      >
        {renderPiece(row, col)}
      </div>
    )
  }

  const renderPiece = (row: number, col: number) => {
    const pieces: { [key: string]: string } = {
      '0-0': '♜', '0-1': '♞', '0-2': '♝', '0-3': '♛', '0-4': '♚', '0-5': '♝', '0-6': '♞', '0-7': '♜',
      '1-0': '♟', '1-1': '♟', '1-2': '♟', '1-3': '♟', '1-4': '♟', '1-5': '♟', '1-6': '♟', '1-7': '♟',
      '6-0': '♙', '6-1': '♙', '6-2': '♙', '6-3': '♙', '6-4': '♙', '6-5': '♙', '6-6': '♙', '6-7': '♙',
      '7-0': '♖', '7-1': '♘', '7-2': '♗', '7-3': '♕', '7-4': '♔', '7-5': '♗', '7-6': '♘', '7-7': '♖'
    }
    
    const piece = pieces[`${row}-${col}`]
    if (!piece) return null
    
    const isWhite = row > 5
    const pieceColor = isWhite ? 'text-white' : 'text-black'
    
    return (
      <span className={`text-4xl ${pieceColor} select-none`}>
        {piece}
      </span>
    )
  }

  const renderBoard = () => {
    const board = []
    for (let row = 0; row < 8; row++) {
      const squares = []
      for (let col = 0; col < 8; col++) {
        squares.push(renderSquare(row, col))
      }
      board.push(
        <div key={row} className="flex">
          {squares}
        </div>
      )
    }
    return board
  }

  return (
    <div className="relative">
      {/* Board container with wooden texture background */}
      <div className="bg-amber-900 p-4 rounded-lg shadow-2xl">
        <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-2 rounded">
          {renderBoard()}
        </div>
      </div>
      
      {/* Control buttons */}
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        <button className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        <button className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
      
      {/* Left side controls */}
      <div className="absolute top-2 left-2 flex flex-col gap-2">
        <button className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </button>
        <button className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ChessBoard