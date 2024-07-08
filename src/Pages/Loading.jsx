import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Loading = () => {
    return(
        <LoadingContainer>
            <CircularProgress size={100} />
        </LoadingContainer>
    )
}

export default Loading