import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries'
import { Image } from 'cloudinary-react';
import Hero from "../components/Hero";
import Iconbar from "../components/Iconbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "../style/Profile.css";
import Auth from '../utils/auth';

const Profile = () => {
    
    const { loading, data } = useQuery(QUERY_ME);
    
    const user = data?.me || {};

    console.log(user);
    
    if (loading) {
        return <div>Loading...</div>;
    };

    if(!Auth.loggedIn()){
        return <Redirect to="/SignUp" />;
    };

    return (
        <div>
         <Hero />
         <Iconbar />
         <div className="btnContainer">
             <Link to="/SubmitItem">
             <button className="submit-btn">POST AN ITEM</button>
             </Link>
         </div>
         <div className="titleContainer">
             <h1>MY ITEMS</h1>
         </div>
         <div className="container">
         {user.item.map(item => (
             <Card
             className="card"
             style={{ width: "25rem", height: "40rem" }}
             key={item._id}
           >
             <Image
               style={{ width: "25rem", height: "25rem" }}
               variant="top"
               className="img-fluid"
               alt="Product image."
               cloudName="outdoor-trading-co"
               publicId={item.image_id}
             />
             <Card.Body>
               <Card.Title class="card-title text-center title">
                 {item.name}
               </Card.Title>
             </Card.Body>
             <ListGroup className="list-group-flush">
               <ListGroupItem>Location: {item.location}</ListGroupItem>
               <ListGroupItem>Condition: {item.condition}</ListGroupItem>
             </ListGroup>
             <Card.Body>
             </Card.Body>
           </Card>
         ))}
         </div>
        </div>
    );
};

export default Profile;