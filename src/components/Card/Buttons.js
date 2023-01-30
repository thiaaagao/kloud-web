import {Containerbotoes, BotaoPlay} from './StyledButton';

function Buttons({name, url}){
    return(
        <>
        <Containerbotoes>
            <BotaoPlay>{name}<a href={url}>Spotify</a></BotaoPlay>
            <BotaoPlay>{name}</BotaoPlay>
            <BotaoPlay>{name}</BotaoPlay>
            <BotaoPlay>{name}</BotaoPlay>
        </Containerbotoes>
        </>

    );


}

export default Buttons