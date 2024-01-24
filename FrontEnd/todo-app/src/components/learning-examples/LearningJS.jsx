const person = {
    name: 'Vikas Seervi',
    height: 5.9,
    address: {
        line1: 'Jeedimetla',
        city: 'London',
        country: 'UK'
    },
    profiles: ['twitter', 'linked.in', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJS() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.height}</div>
            <div>{person.address.line1}, {person.address.city}, {person.address.country}</div>
            <div>{person.profiles[2]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}