import '../css/Education.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaGraduationCap } from 'react-icons/fa';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import myDegreePdf1 from '../assets/doc1.pdf';
import myDegreePdf2 from '../assets/doc2.pdf';

const Education = () => {
    return (
        <div id="education" className="education-container">
            <div className="education-title-container">
                <FaGraduationCap className="education-icon" />
                <span className="education-title"> Education</span>
            </div>
            <div className="education-inline-block-card">
                <Card className="custom-card" sx={{ backgroundColor: '#2a2a2a', color: '#ffffff' }}>
                    <CardMedia
                        className="custom-card-media"
                        image={img1}
                        title="Image 1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ho Chi Minh City University of Industry and Trade
                        </Typography>
                        <Typography variant="body2" className="custom-card-description">
                            University of Industry and Trade is an educational institution offering multidisciplinary...
                        </Typography>
                        <Typography variant="body2" className="custom-card-description">
                            Year: 2020 - 2024
                        </Typography>
                        <Typography variant="body2" className="custom-card-description">
                            Graduated – Bachelor of Engineering in Software Engineering
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="normal"
                            component="a"
                            href="https://vi.wikipedia.org/wiki/Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_C%C3%B4ng_Th%C6%B0%C6%A1ng_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn More
                        </Button>
                        <Button
                            size="normal"
                            component="a"
                            href={myDegreePdf1}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            My Degrees
                        </Button>
                    </CardActions>
                </Card>
                <Card className="custom-card" sx={{ backgroundColor: '#2a2a2a', color: '#ffffff' }}>
                    <CardMedia
                        className="custom-card-media"
                        image={img2}
                        title="Image 2"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Marie Curie High School
                        </Typography>
                        <Typography variant="body2" className="custom-card-description">
                            Marie Curie High School is a public secondary school located in Ho Chi Minh City...
                        </Typography>
                        <Typography variant="body2" className="custom-card-description">
                            Year: 2017 - 2020
                        </Typography>
                        <Typography variant="body2" className="custom-card-description">
                            Graduated
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="normal"
                            component="a"
                            href="https://vi.wikipedia.org/wiki/Tr%C6%B0%E1%BB%9Dng_Trung_h%E1%BB%8Dc_ph%E1%BB%95_th%C3%B4ng_Marie_Curie"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn More
                        </Button>
                        <Button
                            size="normal"
                            component="a"
                            href={myDegreePdf2}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            My Degrees
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default Education;