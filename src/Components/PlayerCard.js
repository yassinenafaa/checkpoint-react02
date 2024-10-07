import React from 'react'

const PlayerCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={player.imageUrl} />
                <Card.Body>
                    <Card.Title>{player.name}</Card.Title>
                    <Card.Text>team:{player.team}</Card.Text>
                    <Card.Text>nationality:{player.nationality}</Card.Text>
                    <Card.Text>jerseyNumber:{player.jerseyNumber}</Card.Text>
                    <Card.Text>age:{player.age}</Card.Text>
                    <Button variant="primary">Go Somewhere</Button>
                </Card.Body>
            </Card>


        </div>


    )
}

export default PlayerCard