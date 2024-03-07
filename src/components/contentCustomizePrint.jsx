function CustomizationField() {
  return (
    <>
      <div className="change-layout-container">
        <h1>Layout</h1>
        <div className="layout-buttons-container">
          <button type="button">
            <div className="visual top-visual"></div>
            Top
          </button>
          <button type="button">
            <div className="visual left-visual"></div>
            Left
          </button>
          <button type="button">
            <div className="visual right-visual"></div>
            Right
          </button>
        </div>
      </div>
      <div className="change-font-container">
        <h1>Fonts</h1>
        <div className="font-buttons-container">
          <button type="button">Serif</button>
          <button type="button">Sans</button>
          <button type="button">Mono</button>
        </div>
      </div>
    </>
  );
}

export { CustomizationField };

function ContentCustomizePrintButtons({ setIsSelected }) {
  return (
    <div className="customize-container">
      <button
        type="button"
        className="content-btn"
        onClick={() => setIsSelected("content")}
      >
        Content
      </button>
      <button
        type="button"
        className="customize-btn"
        onClick={() => setIsSelected("customize")}
      >
        Customize
      </button>
      <button
        type="button"
        className="print-btn"
        onClick={() => setIsSelected("print")}
      >
        Print
      </button>
    </div>
  );
}

export default ContentCustomizePrintButtons;
