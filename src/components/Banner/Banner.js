import React from "react";

function Banner({count, type, answer}) {
  return (
    <div className={`banner ${ type }`}>
      {type === 'happy' &&
        <p><strong>Congratulations!</strong> Got it in <strong>{count} guesses</strong>.</p>
      }
      {type === 'sad' &&
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      }
    </div>
  );
}

export default Banner;
