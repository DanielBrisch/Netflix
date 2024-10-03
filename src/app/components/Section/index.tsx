import { Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";

const movies = [
    { poster: 'Acolita.jpg' },
    { poster: 'Acolita.jpg' },
    { poster: 'Acolita.jpg' },
    { poster: 'Acolita.jpg' },
    { poster: 'Acolita.jpg' },
    { poster: 'Acolita.jpg' },
    { poster: 'Acolita.jpg' },
    { poster: 'Acolita.jpg' },
]

type SectionProps = {
    title: string,
}

function Section({ title }: SectionProps) {
    return (
        <Box>
            <Container>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: 400,
                        paddingTop: '2rem'
                    }}>
                    {title}
                </Typography>
                <Stack direction='row' gap={0.5} sx={{
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingY: '1rem',
                }}>
                    {movies.map((e) => <MovieCard poster={'public/assets/posters/' + e.poster} />)}
                </Stack>
            </Container>
        </Box>
    )
}

export default Section;