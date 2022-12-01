
import { Button } from '../components'
import { Htag } from '../components/Htag/Htag'

export default function Home():JSX.Element {
  const a:number = 1
  return (
    <div >
      <Htag tag='h2'>Text</Htag>
      <Button appearance='primary'>knopka</Button>
      <Button appearance='ghost'>knopka</Button>
    </div>
  )
}
