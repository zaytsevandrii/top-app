
import { Button, Htag, P } from '../components'


export default function Home():JSX.Element {
  const a:number = 1
  return (
    <div >
      <Htag tag='h2'>Text</Htag>
      <Button appearance='primary' arrow='right'>knopka</Button>
      <Button appearance='ghost' arrow='right'>knopka</Button>
      <P size='l'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quos, excepturi soluta placeat tenetur distinctio.</P>
      <P>Srdniy</P>
      <P size='s'>Srdniy</P>
    </div>
  )
}
