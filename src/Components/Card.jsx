import styled from "styled-components";
import { IoMdMore } from "react-icons/io";
import { IoMdClose } from "react-icons/io";



const CardContainer = styled.div`
color: white;
h2,
h3,
h4 {
  margin: 0;
  font-weight: 500;
}


.card {
  position: relative;
  perspective: 1000px;
  width: 300px;
  height: 300px;
}

 .card header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 26px;
}

 .card header h2 {
  font-size: 20px;
  text-transform: capitalize;
}

 .card .front,
 .card .back {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
  background: #18283f;
  border-radius: 10px;
  padding: 36px 36px 44px 44px;
  transition: 0.6s;
  cursor: pointer;
}

 .back {
  transform: rotateY(180deg);
}

 input {
  position: absolute;
  scale: 0;
}

 input:checked ~ .card .back {
  transform: rotateY(0);
}

 input:checked ~ .card .front {
  transform: rotateY(-180deg);
}

.card var {
  font-style: normal;
  font-size: 80px;
  line-height: 1;
}

.card h3 {
  margin: 0 0 30px;
  font-weight: 500;
}

var, h3{
  color: ${props => props.$cor};
}


.card :is(h4, p) {
  opacity: 0.6;
  font-size: 20px;
}

.card p {
  margin-top: 76px;
}

label{
    display: flex;
    justify-content: center;
}

span{

    font-size: 2rem;
}

.Info{
    text-align: center;
}

a{
    color: ${props => props.$cor};
    transition: 0.2s;
}
a:hover{
    opacity: 0.6;
}
`


const Card = ({ name, total, description, footer, color, info , contact }) => {
    return (
        <CardContainer $cor={color}>
            <label>
                <input type="checkbox" />
                <div className="card">
                    <div className="front">
                        <header>
                            <h2>{name}</h2><span><IoMdMore /></span>
                        </header>
                        <var>{total}</var>
                        <h3>{description}</h3>
                        <h4>{footer}</h4>
                    </div>
                    <div className="back">
                        <header>
                            <h2>{name}</h2><span><IoMdClose /></span>
                        </header>
                        <p className="Info">{!contact? "Link":  ""} <br />{info}</p>
                    </div>
                </div>
            </label>
        </CardContainer>

    );
}

export default Card;