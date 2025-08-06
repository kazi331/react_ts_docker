import { Card } from "@/components/ui/card";


function App() {
  const onDrag = (e: any) => {
    // console.log(e.target)
  }

  const onDragStart = (e: any) => {
    // console.log(e.target)
    // e.target.style.backgroundColor = 'red';
  }
  const onDragEnd = (e: any) => {
    // console.log(e.target)
  }
  const onDragEnter = (e: any) => {
    e.preventDefault()
    console.log(e.target)
  }


  return (
    <div className="max-w-6xl mx-auto px-10">
      <h2 className="text-center m-2">React Drag N Drop</h2>

      <Card className="grid grid-cols-3 gap-2 px-3">
        <Card onDragEnter={onDragEnter} className="px-3">
          <h3 className="text-center border-b pb-1">Backlog</h3>
          {
            Array.from({ length: 5 }).map((_, i) => (
              <Card className="p-2 cursor-pointer active:cursor-grab"
                draggable
                onDrag={onDrag}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                key={i}>
                Card {(Math.random() * (i + 200)).toFixed(2)}
              </Card>)
            )
          }
        </Card>
        <Card className="px-3">
          <h3 className="text-center border-b pb-1">In Progress</h3>
          {
            Array.from({ length: 5 }).map((_, i) => (
              <Card className="p-2 cursor-pointer active:cursor-grab overflow-hidden"
                draggable
                onDrag={onDrag}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                key={i}>
                Card {(Math.random() * (i + 200)).toFixed(2)}
              </Card>)
            )
          }
        </Card>
        <Card className="px-3">
          <h3 className="text-center border-b pb-1">Done</h3>
          {
            Array.from({ length: 5 }).map((_, i) => (
              <Card className="p-2 cursor-pointer active:cursor-grab"
                draggable
                onDrag={onDrag}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                key={i}>
                Card {(Math.random() * (i + 200)).toFixed(2)}
              </Card>)
            )
          }
        </Card>
      </Card>
    </div>
  )
}

export default App
