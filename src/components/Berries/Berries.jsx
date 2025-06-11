import React from "react";
import "./berries.scss";

const Berries = () => {
  function handleClick() {
    window.open("https://www.w3schools.com/whatis/whatis_react.asp");
  }

  return (
    <div id="Berries">
      <div className="section">
        <h2>IT BERRIES</h2>
        <p>
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est. Morbi commodo, eros in
          dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
          tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
          Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
          varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
          tempor, accumsan nec eros.
        </p>

        <button onClick={() => handleClick()}>READ MORE</button>
      </div>
    </div>
  );
};

{
  /* <a href="./Blank.jsx" target="_blank"></a> */
}
export default Berries;
