const movies = [
    {
        title: "Avengers",
        hasSeen: true,
        stars: 4
    },
    {
        title: "Batman dark knight",
        hasSeen: true,
        stars: 4.5
    },
    {
        title: "star wars",
        hasSeen: false
    },
    {
        title: "Constantine",
        hasSeen: false
    },
    {
        title: "Pitch perfect",
        hasSeen: true,
        stars: 2
    },
    {
        title: "the shawshank redemption",
        hasSeen: true,
        stars: 5
    },
    {
        title: "devil wears a prada",
        hasSeen: true,
        stars: 4
    }
]

movies.forEach((movie)=>{
    if(movie.hasSeen)
        console.log("I have watched "+movie.title+" and I rate it "+movie.stars);
    else
        console.log("I have not watched "+movie.title);
})