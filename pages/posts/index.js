const Salles = ({ params }) => {
    return (
        <div>
            <ul>
                {params.search.map(room => (
                    <li key={room.id}>{room.attributes.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Salles;