import styled from "styled-components";
import profileDog from "../../assets/user/profile_dog.png"
import profileTiger from "../../assets/user/profile_tiger.png"
import profilePig from "../../assets/user/profile_pig.png"
import profileDear from "../../assets/user/profile_dear.png"
import profileEagle from "../../assets/user/profile_eagle.png"
import profileSquirrel from '../../assets/user/profile_squirrel.png'
import profileRabbit from '../../assets/user/profile_rabbit.png'
import profileFox from '../../assets/user/profile_fox.png'
import profileGiraffe from '../../assets/user/profile_giraffe.png'
import profileCat from '../../assets/user/profile_cat.png'
import { useState } from "react";

const CharacterBox = styled.div`
    position : relative;
    width: 39.875rem;
    background-color : #A7A7A7;
    height : 15.6rem;
    border-radius : 2rem;
    opacity : 85%;
    z-index : 11;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
`
const ImgFormat = styled.img`
    /* position : absolute; */
    left : ${props => props.left || '2.06rem'};
    top : ${props => props.top ||'0.62rem'};
    width : 6.25rem;
    height : 6.25rem;
    outline : ${props => props.clicked ? '#29C325 solid 7px': 'none'}; 
    border-radius : 5rem;
    margin: 0 0.2rem;
`

const Character = ({onCharacterSelect}) => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);


    const clickImg = (characterName) => {
        setSelectedCharacter(characterName);
        onCharacterSelect(characterName);


    }

    return (
       <>
       <CharacterBox>
            <ImgFormat onClick={()=> clickImg("Dog")} src={profileDog} clicked={selectedCharacter === "Dog"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Tiger")} src={profileTiger} clicked={selectedCharacter === "Tiger"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Pig")} src={profilePig} clicked={selectedCharacter === "Pig"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Dear")} src={profileDear} clicked={selectedCharacter === "Dear"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Eagle")} src={profileEagle} clicked={selectedCharacter === "Eagle"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Squirrel")} src={profileSquirrel} clicked={selectedCharacter === "Squirrel"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Rabbit")} src={profileRabbit} clicked={selectedCharacter === "Rabbit"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Fox")} src={profileFox} clicked={selectedCharacter === "Fox"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Giraffe")} src={profileGiraffe} clicked={selectedCharacter === "Giraffe"}></ImgFormat>
            <ImgFormat onClick={()=> clickImg("Cat")} src={profileCat} clicked={selectedCharacter === "Cat"}></ImgFormat>
            
        </CharacterBox> 
       </>
    );
};

export default Character;