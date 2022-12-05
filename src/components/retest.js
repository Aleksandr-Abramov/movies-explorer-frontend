const movies = [{id:2, name:"dad"},{id:3, name:"sssse"}]
const newMovie = movies.filter((film)=>{
    film['pay'] = 3
    return film.name.includes("s")
})
console.log(newMovie);