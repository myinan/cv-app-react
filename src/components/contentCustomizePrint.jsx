function CustomizationField({ setResumeLayout, resumeFont, setResumeFont }) {
  return (
    <>
      <div className="change-layout-container">
        <h1>Layout</h1>
        <div className="layout-buttons-container">
          <button type="button" onClick={() => setResumeLayout("top")}>
            <div className="visual top-visual"></div>
            Top
          </button>
          <button type="button">
            <div
              className="visual left-visual"
              onClick={() => setResumeLayout("left")}
            ></div>
            Left
          </button>
          <button type="button">
            <div
              className="visual right-visual"
              onClick={() => setResumeLayout("right")}
            ></div>
            Right
          </button>
        </div>
      </div>
      <div className="change-font-container">
        <h1>Fonts</h1>
        <div className="font-buttons-container">
          <button
            type="button"
            onClick={() => setResumeFont("serif")}
            className={`serif-btn ${resumeFont === "serif" ? "current" : ""}`}
          >
            <span className="font-test">Aa</span>
            Serif
          </button>
          <button
            type="button"
            onClick={() => setResumeFont("sans")}
            className={`sans-btn ${resumeFont === "sans" ? "current" : ""}`}
          >
            <span className="font-test">Aa</span>
            Sans
          </button>
          <button
            type="button"
            onClick={() => setResumeFont("mono")}
            className={`mono-btn ${resumeFont === "mono" ? "current" : ""}`}
          >
            <span className="font-test">Aa</span>
            Mono
          </button>
        </div>
      </div>
    </>
  );
}

export { CustomizationField };

function ContentCustomizePrintButtons({ isSelected, setIsSelected }) {
  return (
    <div className="customize-container">
      <button
        type="button"
        className={`content-btn ${isSelected === "content" ? "selected" : ""}`}
        onClick={() => setIsSelected("content")}
      >
        Content
      </button>
      <button
        type="button"
        className={`customize-btn ${isSelected === "customize" ? "selected" : ""}`}
        onClick={() => setIsSelected("customize")}
      >
        Customize
      </button>
      <button
        type="button"
        className={`print-btn ${isSelected === "print" ? "selected" : ""}`}
        onClick={() => {
          setIsSelected("print");
          window.print();
        }}
      >
        Print
      </button>
    </div>
  );
}

export default ContentCustomizePrintButtons;
