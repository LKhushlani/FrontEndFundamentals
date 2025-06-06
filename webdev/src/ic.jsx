function FruitsList() { 
    const fruits = ['a', 'b', 'c', 'd'];

    return (

        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li> 
            )
            )}
        </ul>

    );
}

export default FruitsList;
