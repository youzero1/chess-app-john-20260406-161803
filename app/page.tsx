import ChessBoard from '@/components/ChessBoard'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center p-4">
      <div className="relative">
        <ChessBoard />
      </div>
    </div>
  )
}