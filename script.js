export function displayMovies(movies) {
    const list = document.getElementById("list")
    let html =""
    list.array.forEach((movies) => {
        html += `
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Movie</th>
                        <th scope="col">Director</th>
                        <th scope="col">Star</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>${movies.movname}</td>
                        <td>${movies.director}</td>
                        <td>${movies.star}</td>
                    </tr>
                </tbody>
            </table>
        `
 
    });
}