function searchSuggestions(repository, customerQuery) {
    let results = []
    
    for (let i=1; i<customerQuery.length; i++) {
        const query = customerQuery.substr(0,i+1)
        const queryResult = repository.filter(word => word.toLowerCase().startsWith(query.toLowerCase()))
        const limitedResult = queryResult.map(word => word.toLowerCase()).sort().slice(0,3)
        results.push(limitedResult)
    }
    
    return results
}