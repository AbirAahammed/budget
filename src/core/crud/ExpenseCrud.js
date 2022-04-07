export async function getAllExpense() {
    return await fetch('http://localhost:3001/item/')
        .then(data => {
            return data.json()
        })
        .then(data => {
            return data.map((value, index) => ({ 
                id: value.id, 
                name: value.name, 
                price: value.price, 
                timeOfPurchase: value.timeOfPurchase, 
                cID: value.categoryId, 
                category: value['category.name'] }))
        })

}


