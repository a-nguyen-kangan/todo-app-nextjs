export function ProductLine({id, name, description}: Product) {
    return (

            <div className="grid grid-cols-3">
                <p>{id}</p>
                <p>{name}</p>
                <p>{description}</p>
            </div>
        
    )
}

interface Product { 
    id: string, 
    name: string, 
    description: string
}