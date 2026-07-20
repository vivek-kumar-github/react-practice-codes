export default function HeaderComponent(props) {
    const { name, age, sum} = props;
    return(
        <>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{sum(1, 5)}</h1>
        </>
    )
}