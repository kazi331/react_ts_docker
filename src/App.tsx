import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useFetch from "@/hooks/useFetch";


function App() {
  const url = useFetch("hello");
  console.log(url)

  return (
    <div>
      <h2 className="text-center m-2">React Drag N Drop</h2>
      <Button>Button</Button>
      <Card>Card</Card>
    </div>
  )
}

export default App
