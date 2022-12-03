import { useEffect, useState } from "react"
import { Button, Htag, P, Rating, Tag } from "../components"
import { Layout, withLayout } from "../layout/Layout"

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4)

    return (
        <>
            <Htag tag="h2">Text</Htag>
            <Button appearance="primary" arrow="right">
                knopka
            </Button>
            <Button appearance="ghost" arrow="right">
                knopka
            </Button>
            <P size="l">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quos, excepturi soluta placeat tenetur distinctio.
            </P>
            <P>Srdniy</P>
            <P size="s">Srdniy</P>
            <Tag size="s">Ghost</Tag>
            <Tag size="m" color="red">
                Red
            </Tag>
            <Tag size="s" color="green">
                Green
            </Tag>
            <Tag color="primary">Green</Tag>
            
            <Rating rating={3} />
            <Rating rating={rating} isEditable setRating={setRating} />
        </>
    )
}

export default withLayout(Home)