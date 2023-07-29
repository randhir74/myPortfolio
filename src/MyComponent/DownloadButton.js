import React from "react";
function DownloadButton(props) {
  return (
    <>
      <div>
        <a href={props.myUrl} download>
          <button type="button" className="btn btn-secondary btn-lg" style={{ width: '120px', height: '40px', borderRadius: '10px', marginRight: '25px', marginTop: '20px', fontSize: '14px' }}>Download CV</button>
        </a>
        <a href="https://wa.me/+917492969807" target={"_blank"} rel="noopener noreferrer">
          <button type="button" className="btn btn-primary btn-lg" style={{ width: '120px', height: '40px', borderRadius: '10px', marginTop: '20px', fontSize: '14px' }}>Contact me</button>
        </a>
      </div>
    </>
  );
}

export default DownloadButton;
