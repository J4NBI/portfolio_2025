const Impressum = () => {

  return (
    <>
        <div className="container mt-12">
          <div className="w-full inline-flex flex-col justify-center gap-4 mx-auto">
            <h1>Impressum</h1>
            <h2 id="m46">Service Provider</h2>
            <div>
              <p>Jan Bihl</p>
              <p>Mareschstraße 14</p>
              <p>12055 Berlin</p>
            </div>
            <h2 id="m56">Contact Options</h2>
            <p>
              Email address:{" "}
              <a href="mailto:mail@janbihl.de">mail@janbihl.de</a>
            </p>
            <p className="seal">
              <a
                href="https://datenschutz-generator.de/"
                title="Legal text by Dr. Schwenke - click for more information."
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Created with the free privacy policy generator by Dr. Thomas
                Schwenke
              </a>
            </p>
          </div>
        </div>
    </>
  );
};

export default Impressum;