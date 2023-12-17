// import * as _React from 'react'; 
// import { styled } from '@mui/system'; 
// import { Button, Typography } from '@mui/material';
// import { Link } from 'react-router-dom'; 
// import {serverCalls } from '../../api';

// import shopImage from '../../assets/images/carshop.mp4';
// import { NavBar } from '../sharedComponents'; 
// import { shopStyles } from '..';

// interface Props {
//     title: string
// }


// const Root = styled('div')({
//     padding: 0,
//     margin: 0
// })

// const Main = styled('main')({
//     backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)), url(${shopImage});`,
//     width: '100%',
//     height: '100%',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center top 5px',
//     position: 'absolute',
//     marginTop: '-500px'
// })

// const MainText = styled('div')({
//     textAlign: 'center',
//     position: 'relative',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     color: 'grey'
// })



// export const Home = (props: Props) => {
//     const myAuth = localStorage.getItem('auth')
//     serverCalls.getCar()

   
//     return (
//         <Root>
//             <NavBar />
//             <Main sx={shopStyles.main}>
           
           

//                 <video autoPlay loop muted style={{position: 'fixed'}}>
//                     <source src={shopImage} type='video/mp4' /> 
//                     </video>
//                     <MainText>
//                     <Typography variant='h3'> { props.title }</Typography>
//                     <Button sx={{ marginTop: '-600px', color: 'white'}} component={Link} to={myAuth === 'true' ? "/shop" : "/auth"} variant='contained'>Find your favorite car</Button>
//                 </MainText>
            
                
                 
               
//             </Main>
//         </Root>
//     )
// }





import * as _React from 'react';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



import shopImage from '../../assets/images/carshop.mp4';
import { NavBar } from '../sharedComponents'; 
import { shopStyles } from '..';
import { serverCalls } from '../../api';

interface Props {
    title: string
}


const Root = styled('div')({
    padding: 0,
    margin: 0
})

const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)), url(${shopImage});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top 5px',
    position: 'absolute',
    marginTop: '-193px'
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})



export const Home = (props: Props) => {
    const myAuth = localStorage.getItem('auth')
    serverCalls.getShop()

    
    return (
        <Root>
            <NavBar />
            <Main sx={shopStyles.main}>
           
           

                <video autoPlay loop muted style={{position: 'fixed'}}>
                    <source src={shopImage} type='video/mp4' /> 
                    </video>
                    <MainText>
                    <Typography variant='h3'> { props.title }</Typography>
                    <Button sx={{ marginTop: '-600px', color: 'white'}} component={Link} to={myAuth === 'true' ? "/shop" : "/auth"} variant='contained'>Find your favorite car</Button>
                </MainText>
            
                
                 
               
            </Main>
        </Root>
    )
}