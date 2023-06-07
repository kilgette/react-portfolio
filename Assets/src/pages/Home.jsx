import '../styles/homepage.css';
import avatar from ".assets/AMYK.png";

const styleObj = {
  img: { width: "250px", height: "350px", borderRadius: "90px" },
  flex: { display: "flex", height: "100%" },
  textBox: { padding: "10px" },
  p: { textAlign: "center" }
};

const HomePage = (props) => {

  return (
    <div>
      <div className="container" style={styleObj.flex}>
        <img id="avatar" src={avatar} style={styleObj.img}></img>

        <div style={styleObj.textBox}>
          <h1 style={styleObj.p}>About Me</h1>
          <h3 style={styleObj.p}>My name is Amy Kilgour, welcome to my portfolio!</h3>
          <p style={styleObj.p}>I am a junior  web developer, based in Minneapolis. </p>

          <p style={styleObj.p}>
            Placeholder text.</p>

          <p style={styleObj.p}>Placeholder text</p>

        </div>
      </div>
    </div>
  );
};

export default HomePage;