

function List(){

    const fruits = [{id : 1, name :'Apple', color : 'Red'}, 
                    {id : 2, name :'Banana', color : 'Yellow'}, 
                    {id : 3, name :'Cherry', color : 'Red'}, 
                    {id : 4, name :'Date', color : 'Brown'}];

    fruits.sort()

    const ListItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name} - <b>{fruit.color}</b></li>)

    return (
        <ol className ="listitems">{ListItems}</ol>
    );
}

export default List;