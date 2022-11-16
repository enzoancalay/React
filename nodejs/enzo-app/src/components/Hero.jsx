import React from "react";
import Card from "react-bootstrap/Card";
const Hero = (props) => {
  console.log(props.titulo);
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22844%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20844%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1847dfd3772%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1847dfd3772%22%3E%3Crect%20width%3D%22844%22%20height%3D%22270%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22318.5812454223633%22%20y%3D%22157.56000137329102%22%3E844x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>Tenemos todo a excelente precio</Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Hero;
