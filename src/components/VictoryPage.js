import "./VictoryPage.css";
import spotifyLogo from "../assets/Spotify_Logo_RGB_Black.png";

function roundToDivs(matchesInRound)
{
    let divArray = [];

    for (let i = 0; i < matchesInRound.length; i++)
    {
        let trackOne = matchesInRound[i].matchComponent.props.trackOne;
        let trackTwo = matchesInRound[i].matchComponent.props.trackTwo;
        
        divArray.push(  <div key={trackOne.id}>
                            <img 
                                src={trackOne.album.images[0] !== undefined && trackOne.album.images[0].url} 
                                alt={trackOne.name}
                            >
                            </img>

                            <a className="songtitle" href={`https://open.spotify.com/track/${trackOne.id}`} target="_blank">{trackOne.name}</a>
                        </div>);

        divArray.push(  <div key={trackTwo.id}>
                            <img 
                                src={trackTwo.album.images[0] !== undefined && trackTwo.album.images[0].url} 
                                alt={trackTwo.name}
                            >
                            </img>

                            <a className="songtitle" href={`https://open.spotify.com/track/${trackTwo.id}`} target="_blank">{trackTwo.name}</a>
                        </div>);
    }

    return divArray;
}

function VictoryPage({bracket})
{
    let winner = bracket[bracket.length-1].matchComponent.props.trackOne;
    let numPlayers = bracket.length;

    return (
        <div id="victory-page">
            <h1 id="winner-display">Winner!</h1>
            <a href={`https://open.spotify.com/track/${winner.id}`} target="_blank">
                <img 
                    src={winner.album.images[0] !== undefined && winner.album.images[0].url} 
                    alt={winner.name} 
                    width="200" 
                    height="200"
                >
                </img>
            </a>
            <a href={`https://open.spotify.com/track/${winner.id}`} target="_blank">
                <h4>{winner.artists[0].name + " - " + winner.name}</h4>
            </a>
            <br></br><br></br>

            <article id="container">
                <section id="round-of-16">
                    {roundToDivs(bracket.filter((match) => (numPlayers / Math.pow(2, match.matchRound-1)) === 16))}
                </section>

                <section id="round-of-8">
                    {roundToDivs(bracket.filter((match) => (numPlayers / Math.pow(2, match.matchRound-1)) === 8))}
                </section>

                <section id="round-of-4">
                    {roundToDivs(bracket.filter((match) => (numPlayers / Math.pow(2, match.matchRound-1)) === 4))}
                </section>

                <section id="final">
                    {roundToDivs(bracket.filter((match) => (numPlayers / Math.pow(2, match.matchRound-1)) === 2))}
                </section>

                <section id="winner-round">
                    <img id="spotify-logo" src={spotifyLogo}></img>
                    <h1 id="watermark">Madnessify</h1>
                    <p id="watermark-link">seigfrieds.github.io/radio-madness</p>
                    <div>
                        <img 
                            src={winner.album.images[0] !== undefined && winner.album.images[0].url} 
                            alt={winner.name} 
                            width="40" 
                            height="40"
                        >
                        </img>
                        <a className="songtitle" href={`https://open.spotify.com/track/${winner.id}`} target="_blank">{winner.name}</a>
                    </div>
                </section>
            </article>

            <p id="spotify-logout-text">Want to disconnect from the app? Click the button and remove access to "Radio Madness"</p>
            <a 
                href="https://www.spotify.com/account/apps/"
                id="spotify-logout-button"
            >
                Log out
            </a>
        </div>
    );
}

export default VictoryPage;