
function KaynamaKarar(props) {
    const karar = props.celcius < 100 ? "kaynamaz" : "kaynar";
    return <p>Su bu sıcaklıkta {karar}.</p>;
}

export default KaynamaKarar;