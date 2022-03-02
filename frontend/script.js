/*const currentDate = new Date("1999/01/02")

console.log(currentDate)*/

function Book(title, author, year, genre) {

    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.age = function(){
        const d = new Date()
        const currentYear = d.getFullYear()
        return currentYear - this.year
    }
}

const myFavouriteBook = new Book('Háború és béke', 'Lev Tolsztoj', 1887, 'historical novel')

console.log(myFavouriteBook.year)

const mySecondFavouriteBook = new Book('Az algebra alapjai', 'Joe Algebra', 1992, 'sci-fi')

console.log(mySecondFavouriteBook.age())

const myThirdFavouriteBook = new Book('Az', 'Stephen King', 1998, 'horror')

console.log(myThirdFavouriteBook.year)