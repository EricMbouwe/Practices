function searchSuggestions(repository, customerQuery) { // O(n)+O(n) space
    let results = []  // O(n) space
    
    for (let i=1; i<customerQuery.length; i++) { // O(1) space
        const query = customerQuery.substr(0,i+1) // O(n) space
        const queryResult = repository.filter(word => word.toLowerCase().startsWith(query.toLowerCase())) // O(n) space
        const limitedResult = queryResult.map(word => word.toLowerCase()).sort().slice(0,3) // O(n) space
        results.push(limitedResult) // O(1) space
    }
    
    return results
}

/** Space complexity measures memory usage of a specific program and depends on
 * Assigning new variables / storing things in memory 
    * (Primitives types(Numbers & Boolean)) take up O(1) Constant space
    * (Object types(Strings, Arrays & Object)) take up O(n) Linear space
 * Functions calling and allocation (eg: recursive calls)
 * Creating new data structures
**/

/** Why is Time Complexity prioritized over Space Complexity?
 * Cost to produce and run processor are much higher compared to RAM
 * Better use of time writing code that is easier on the processor
 * Consumer / Users in general care more about speed than RAM usage (eg: Chrome uses more Ram but is faster enough to keep users prefering it)
 */