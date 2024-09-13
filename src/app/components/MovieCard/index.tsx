import { Paper } from "@mui/material";

type MovieCardProps = {
    poster?: string,
}

function MovieCard(props: MovieCardProps) {
    return (
        <Paper
            component="a"
            elevation={3}
            href="/1"
            sx={{ minWidth: '10rem' }}
        >
            <img src={props.poster} style={{
                width: '100%'
            }} />
        </Paper>
    )
}

export default MovieCard;