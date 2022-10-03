import DareDevil from './MoviePics/Daredevil.jpg'
import Inception from './MoviePics/Inception.jpg'
import Legend from './MoviePics/Legend.jpg'
import SpiderMan from './MoviePics/Spider-Man-Miles.jpg'
import SpyKids from './MoviePics/Spy-Kids-2.jpg'
import TheMatrix from './MoviePics/The matrix.jpg'
import TheHangover from './MoviePics/The-Hangover.jpg'
import TheNoteBook from './MoviePics/The-Note-Book.jpg'
import Titanic from './MoviePics/Titanic.jpg'
import XMEN from './MoviePics/X-MEN.jpg'
import rocky from './MoviePics/rocky.jpg'
import Gladiator from './MoviePics/Gladiator'
import Thor from  './MoviePics/Thor.Love_and_Thunder.jpg'
import Dragon from './MoviePics/Dragon.jpg'
const MovieList = [
    {
        movieTitle: 'Thor: Love and Thunder',
            Img: Thor,
                Rate: 5,
                    url: 'https://www.youtube.com/watch?v=Go8nTmfrQd8&ab_channel=MarvelEntertainment',
                        Type: 'Action',
                        Description:'Natalie Portman as Jane Foster / Mighty Thor: An astrophysicist and Thor\'s ex-girlfriend who is undergoing cancer treatment and who gains powers to become the Mighty Thor by wielding a reconstructed Mjolnir, the hammer previously wielded by Thor.                   '
    }
    ,
    {
        movieTitle: 'Daredevil',
        Img: DareDevil,
        Rate: '5',
        url: 'https://www.youtube.com/watch?v=Y6p_3s0d9TI',
        Type: 'action',
        Description: ' fights crime as an acrobatic martial arts superhero. A man blinded by toxic waste which also enhanced his remaining senses fights crime as an acrobatic martial arts superhero.'


    }
    ,
    {
        movieTitle: 'Inception',
        Img: Inception,
        Rate: 7,
        url: 'https://www.youtube.com/watch?v=YoHD9XEInc0&ab_channel=RottenTomatoesClassicTrailers',
        Type: 'Action',
        Description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.'
    }
    ,
    {
        movieTitle: 'Legend',
        Img: Legend,
        Rate: 6,
        url: 'https://www.youtube.com/watch?v=yI3v6KfR9Mw&ab_channel=ZeroMedia',
        Type: 'Action',
        Description: ' the 1960s. Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s. Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s'
    }
    ,
    {
        movieTitle: 'Spider Man Miles',
        Img: SpiderMan,
        Rate: 7,
        url: 'https://www.youtube.com/watch?v=ii3n7hYQOl4&ab_channel=SonyPicturesEntertainment',
        Type: 'Kids',
        Description: 'Miles Morales has just started at a new school and is struggling to fit in. Then he is bitten by a radioactive spider and he obtains certain powers, similar to those of Spiderman. He doesn\'t know what to do with the powers, or how to control them, so naturally he turns to Spider- Man for advice'
    }
    ,
{
    movieTitle: 'Spy Kids 2',
        Img: SpyKids,
            Rate: 4,
                url: 'https://www.youtube.com/watch?v=8tTJ7kMgANg&ab_channel=RottenTomatoesClassicTrailers',
                    Type: 'Kids',
                    Description:'The Cortez siblings set out for a mysterious island, where they encounter a genetic scientist and a set of rival spy kids. The Cortez siblings set out for a mysterious island, where they encounter a genetic scientist and a set of rival spy kids.                    '
}
    ,
{
    movieTitle: 'The matrix',
        Img: TheMatrix,
            Rate: 6,
                url: 'https://www.youtube.com/watch?v=vKQi3bBA1y8&ab_channel=RottenTomatoesClassicTrailers',
                    Type: 'Action',
                    Description:'It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.                    '
}
    ,
{
    movieTitle: 'The Hangover',
        Img: TheHangover,
            Rate: 5,
                url: 'https://www.youtube.com/watch?v=tcdUhdOlz9M&ab_channel=RottenTomatoesClassicTrailers',
                    Type: 'Comedi',
                    Description:'The story was about three friends who lose the groom at his Las Vegas bachelor party and then must retrace their steps to figure out what happened. It was then rewritten by Jeremy Garelick and director Todd Phillips, who added additional elements such as Mike Tyson and his tiger, the baby, and the police cruiser.                    '
}
    ,
{
    movieTitle: 'The Note Book',
        Img: TheNoteBook,
            Rate: 3,
                url: 'https://www.youtube.com/watch?v=yDJIcYE32NU&ab_channel=A99Studios',
                    Type: 'Romance',
                    Description:'A poor yet passionate young man (Ryan Gosling) falls in love with a rich young woman (Rachel McAdams), giving her a sense of freedom, but they are soon separated because of their social differences.                    '
}
    ,
{
    movieTitle: 'Titanic',
        Img: Titanic,
            Rate: 5,
                url: 'https://www.youtube.com/watch?v=b0KYvGa_nN8&ab_channel=RottenTomatoesClassicTrailers',
                    Type: 'Romance',
                    Description:'The movie is about the 1912 sinking of the RMS Titanic. It stars Kate Winslet and Leonardo DiCaprio. The two play characters who are of different social classes. They fall in love after meeting aboard the ship, but it was not good for a rich girl to fall in love with a poor boy in 1912.                    '
}
    ,
{
    movieTitle: 'X-MEN',
        Img: XMEN,
            Rate: 5,
                url: 'https://www.youtube.com/watch?v=VNxwlx6etXI&ab_channel=RottenTomatoesClassicTrailers',
                    Type: 'Action',
                    Description:'In a world where both Mutants and Humans fear each other, Marie, better known as Rogue, runs away from home and hitches a ride with another mutant, known as Logan, a.k.a. Wolverine. Professor Charles Xavier, who owns a school for young mutants, sends Storm and Cyclops to bring them back before it is too late.                    '
},
{
    movieTitle: 'rocky',
        Img: rocky,
            Rate: 6,
                url:'https://www.youtube.com/watch?v=7RYpJAUMo2M&ab_channel=JohnVexer',
                    Type: 'action',
                    Description:'A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect. Rocky Balboa is a struggling boxer trying to make the big time, working as a debt collector for a pittance.                    '
}
    ,
{
    movieTitle: 'Gladiator',
        Img: Gladiator,
            Rate: 5,
                url: 'https://www.youtube.com/watch?v=owK1qxDselE&ab_channel=nathansmoviereviews',
                    Type: 'action',
                    Description:'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery. Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius.                    '
}
    ,

{
    movieTitle: 'Dragon',
        Img: Dragon,
            Rate: 4,
                url: 'https://www.youtube.com/watch?v=oKiYuIsPxYk&ab_channel=hollywoodstreams',
                    Type: 'kids',
                    Description:'How to Train Your Dragon is a 2010 American computer-animated action fantasy film loosely based on the 2003 book of the same name by Cressida Cowell, produced by DreamWorks Animation and distributed by Paramount Pictures.                    '
}



]

export default MovieList