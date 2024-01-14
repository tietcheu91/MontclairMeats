import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './About.css';

const About = () => {
//   return (
//     <div>
//       <div>
//         <h1>About Us</h1>
//         <h2>What is Butchery?</h2>
//         <p>
//           Whole animal butchery is the practice of receiving whole animals
//           carcasses and breaking it down instead of receiving parts of an animal
//           in bulk standard cuts. This type of practice supports small local
//           farms instead of large feed lot/factory farms that are harmful to our
//           planet. It requires very experienced butchers who can customize cuts
//           or roasts for you the consumer depending on the season. Since we
//           receive the entire carcass, you will find a variety of cuts of beef,
//           pork and lamb that you do not see in traditional butcher shops.{" "}
//         </p>
//         <h2>Our Values</h2>
//         <div className="cardMain-about">
//           <Card sx={{ width: '18rem' }}>
//             <CardContent >
//               <Typography gutterBottom variant="h5" component="div">
//               Source Clarity 
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//               you know where your meat is coming from
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Share</Button>
//               <Button size="small">Learn More</Button>
//             </CardActions>
//           </Card>
//           <Card sx={{ width: '18rem' }}>
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//               Sustainability 
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//               you are supporting ethical practices from small local farms and butchers who limit waste creating a more sustainable system
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Share</Button>
//               <Button size="small">Learn More</Button>
//             </CardActions>
//           </Card>
//           <Card sx={{ width: '18rem' }}>
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//               Freshness 
//               </Typography>
//               the by product of reducing the time your meat is cut and sold, sourcing 	from local farms that are grass fed and pasture raised results in a fresher, tastier cut of meat
//               <Typography variant="body2" color="text.secondary">
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Share</Button>
//               <Button size="small">Learn More</Button>
//             </CardActions>
//           </Card>
//         </div>
        
//       </div>
//     </div>
//   );
// };
return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 800, margin: 3 }}>
            <CardContent>
                <Typography variant="h4" component="div" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="h5" component="div">
                    What is Butchery?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Whole animal butchery is the practice of receiving whole animals carcasses and breaking it down instead of receiving parts of an animal in bulk standard cuts. This type of practice supports small local farms instead of large feed lot/factory farms that are harmful to our planet. It requires very experienced butchers who can customize cuts or roasts for you the consumer depending on the season. Since we receive the entire carcass, you will find a variety of cuts of beef, pork and lamb that you do not see in traditional butcher shops.
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    Our Values
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Quality: We ensure the highest quality in all our products.<br />
                    Sustainability: We source our meat from sustainable farms.<br />
                    Customer Service: We strive to provide excellent service to all our customers.
                </Typography>
            </CardContent>
        </Card>
    </Box>
);
};

export default About;
