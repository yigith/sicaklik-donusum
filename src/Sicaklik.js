

function Sicaklik(props) {
    let sicaklik;
    if (props.celcius === "")
        sicaklik = "";
    else  {
        sicaklik = props.birim == "f" ? props.celcius * 1.8 + 32 : props.celcius;
        sicaklik = Math.round(sicaklik);
    }

    const birimAd = props.birim == "f" ? "Fahrenheit" : "Celcius";

    const handleDegisiklik = function (e) {
        const yeniDegerC = props.birim == "f" && e.target.value !== ""
            ? (e.target.value - 32) / 1.8
            : e.target.value;
        props.sicaklikDegisti(yeniDegerC); // lifting state up
    };

    return (
        <fieldset>
            <legend>Sıcaklık ({birimAd})</legend>
            <input type="number" value={sicaklik} onChange={handleDegisiklik} />
        </fieldset>
    );
}

export default Sicaklik;